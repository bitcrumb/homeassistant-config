"""Support for DomesticHotWaterProduction."""
from pyoverkiz.enums import OverkizCommand, OverkizCommandParam, OverkizState

from homeassistant.components.climate.const import SUPPORT_TARGET_TEMPERATURE
from homeassistant.components.water_heater import (
    STATE_ECO,
    SUPPORT_AWAY_MODE,
    SUPPORT_OPERATION_MODE,
    WaterHeaterEntity,
)
from homeassistant.const import ATTR_TEMPERATURE, TEMP_CELSIUS

from ..entity import OverkizEntity

DHWP_TYPE_MURAL = "io:AtlanticDomesticHotWaterProductionV2_MURAL_IOComponent"
DHWP_TYPE_CE_FLAT_C2 = "io:AtlanticDomesticHotWaterProductionV2_CE_FLAT_C2_IOComponent"
DHWP_TYPE_CV4E_IO = "io:AtlanticDomesticHotWaterProductionV2_CV4E_IOComponent"
DHWP_TYPE_MBL = "modbuslink:AtlanticDomesticHotWaterProductionMBLComponent"

SET_BOOST_MODE_DURATION = "setBoostModeDuration"  # remove when added to pyoverkiz
REFRESH_BOOST_MODE_DURATION = (
    "refreshBoostModeDuration"  # remove when added to pyoverkiz
)

STATE_AUTO = "Auto"
STATE_BOOST = "Boost"
STATE_MANUAL = "Manual"

OVERKIZ_TO_OPERATION_MODE = {
    OverkizCommandParam.MANUAL_ECO_ACTIVE: STATE_ECO,
    OverkizCommandParam.MANUAL_ECO_INACTIVE: STATE_MANUAL,
    OverkizCommandParam.AUTO: STATE_AUTO,
    OverkizCommandParam.AUTO_MODE: STATE_AUTO,
    OverkizCommandParam.BOOST: STATE_BOOST,
}

OPERATION_MODE_TO_OVERKIZ = {v: k for k, v in OVERKIZ_TO_OPERATION_MODE.items()}


class DomesticHotWaterProduction(OverkizEntity, WaterHeaterEntity):
    """Representation of a DomesticHotWaterProduction Water Heater."""

    _attr_operation_list = [*OPERATION_MODE_TO_OVERKIZ]
    _attr_supported_features = (
        SUPPORT_OPERATION_MODE | SUPPORT_AWAY_MODE | SUPPORT_TARGET_TEMPERATURE
    )
    _attr_temperature_unit = TEMP_CELSIUS

    @property
    def _is_boost_mode_on(self) -> bool:
        """Return true if boost mode is on."""
        if self.device.controllable_name == DHWP_TYPE_MURAL:
            return (
                self.executor.select_state(OverkizState.CORE_OPERATING_MODE).get(
                    OverkizCommandParam.RELAUNCH
                )
                == OverkizCommandParam.ON
            )
        if self.device.controllable_name == DHWP_TYPE_CV4E_IO:
            return self.executor.select_state("core:BoostModeDurationState") > 0
        if self.device.controllable_name == DHWP_TYPE_CE_FLAT_C2:
            return (
                self.executor.select_state(OverkizState.IO_DHW_BOOST_MODE)
                == OverkizCommandParam.ON
            )
        return False

    @property
    def min_temp(self):
        """Return the minimum temperature."""
        return self.executor.select_state(
            OverkizState.CORE_MINIMAL_TEMPERATURE_MANUAL_MODE
        )

    @property
    def max_temp(self):
        """Return the maximum temperature."""
        return self.executor.select_state(
            OverkizState.CORE_MAXIMAL_TEMPERATURE_MANUAL_MODE
        )

    @property
    def current_operation(self):
        """Return current operation ie. eco, electric, performance, ..."""
        if self._is_boost_mode_on:
            return OVERKIZ_TO_OPERATION_MODE[OverkizCommandParam.BOOST]
        return OVERKIZ_TO_OPERATION_MODE[
            self.executor.select_state(
                OverkizState.IO_DHW_MODE, OverkizState.MODBUSLINK_DHW_MODE
            )
        ]

    @property
    def current_temperature(self):
        """Return the current temperature."""
        return self.executor.select_state(
            OverkizState.IO_MIDDLE_WATER_TEMPERATURE,
            OverkizState.MODBUSLINK_MIDDLE_WATER_TEMPERATURE,
        )

    @property
    def target_temperature(self):
        """Return the temperature we try to reach."""
        return self.executor.select_state(OverkizState.CORE_TARGET_TEMPERATURE)

    @property
    def target_temperature_high(self):
        """Return the highbound target temperature we try to reach."""
        return self.executor.select_state(
            OverkizState.CORE_MAXIMAL_TEMPERATURE_MANUAL_MODE
        )

    @property
    def target_temperature_low(self):
        """Return the lowbound target temperature we try to reach."""
        return self.executor.select_state(
            OverkizState.CORE_MINIMAL_TEMPERATURE_MANUAL_MODE
        )

    async def async_set_temperature(self, **kwargs):
        """Set new target temperature."""
        target_temperature = kwargs.get(ATTR_TEMPERATURE)
        await self.executor.async_execute_command(
            OverkizCommand.SET_TARGET_TEMPERATURE, target_temperature
        )

    async def async_set_operation_mode(self, operation_mode):
        """Set new target operation mode."""
        if operation_mode == STATE_BOOST:
            if self.device.controllable_name in [DHWP_TYPE_MURAL, DHWP_TYPE_CV4E_IO]:
                await self.executor.async_execute_command(
                    OverkizCommand.SET_CURRENT_OPERATING_MODE,
                    {
                        OverkizCommandParam.RELAUNCH: OverkizCommandParam.ON,
                        OverkizCommandParam.ABSENCE: OverkizCommandParam.OFF,
                    },
                )
            if self.device.controllable_name == DHWP_TYPE_CV4E_IO:
                await self.executor.async_execute_command(SET_BOOST_MODE_DURATION, 7)
                await self.executor.async_execute_command(REFRESH_BOOST_MODE_DURATION)
            if self.device.controllable_name == DHWP_TYPE_CE_FLAT_C2:
                await self.executor.async_execute_command(
                    OverkizCommand.SET_BOOST_MODE, OverkizCommand.ON
                )
            return
        if self._is_boost_mode_on:
            if self.device.controllable_name in [DHWP_TYPE_MURAL, DHWP_TYPE_CV4E_IO]:
                await self.executor.async_execute_command(
                    OverkizCommand.SET_CURRENT_OPERATING_MODE,
                    {
                        OverkizCommandParam.RELAUNCH: OverkizCommandParam.OFF,
                        OverkizCommandParam.ABSENCE: OverkizCommandParam.OFF,
                    },
                )
            if self.device.controllable_name == DHWP_TYPE_CV4E_IO:
                await self.executor.async_execute_command(SET_BOOST_MODE_DURATION, 0)
                await self.executor.async_execute_command(REFRESH_BOOST_MODE_DURATION)
            if self.device.controllable_name == DHWP_TYPE_CE_FLAT_C2:
                await self.executor.async_execute_command(
                    OverkizCommand.SET_BOOST_MODE, OverkizCommand.OFF
                )
        await self.executor.async_execute_command(
            OverkizCommand.SET_DHW_MODE, OPERATION_MODE_TO_OVERKIZ[operation_mode]
        )

    @property
    def is_away_mode_on(self):
        """Return true if away mode is on."""
        if self.device.controllable_name == DHWP_TYPE_MURAL:
            return (
                self.executor.select_state(OverkizState.CORE_OPERATING_MODE).get(
                    OverkizCommandParam.ABSENCE
                )
                == OverkizCommandParam.ON
            )
        if self.device.controllable_name == DHWP_TYPE_CV4E_IO:
            return (
                self.executor.select_state(OverkizState.CORE_OPERATING_MODE).get(
                    OverkizCommandParam.AWAY
                )
                == OverkizCommandParam.ON
            )
        if self.device.controllable_name == DHWP_TYPE_CE_FLAT_C2:
            return (
                self.executor.select_state(OverkizState.IO_DHW_ABSENCE_MODE)
                == OverkizCommandParam.ON
            )
        if self.device.controllable_name == DHWP_TYPE_MBL:
            return (
                self.executor.select_state(OverkizState.MODBUSLINK_DHW_ABSENCE_MODE)
                == OverkizCommandParam.ON
            )

    async def async_turn_away_mode_on(self):
        """Turn away mode on."""
        if self.device.controllable_name in [DHWP_TYPE_MURAL, DHWP_TYPE_CV4E_IO]:
            await self.executor.async_execute_command(
                OverkizCommand.SET_CURRENT_OPERATING_MODE,
                {
                    OverkizCommandParam.RELAUNCH: OverkizCommandParam.OFF,
                    OverkizCommandParam.ABSENCE: OverkizCommandParam.ON,
                },
            )
        if self.device.controllable_name in [DHWP_TYPE_CE_FLAT_C2, DHWP_TYPE_MBL]:
            await self.executor.async_execute_command(
                OverkizCommand.SET_ABSENCE_MODE, OverkizCommandParam.ON
            )

    async def async_turn_away_mode_off(self):
        """Turn away mode off."""
        if self.device.controllable_name in [DHWP_TYPE_MURAL, DHWP_TYPE_CV4E_IO]:
            await self.executor.async_execute_command(
                OverkizCommand.SET_CURRENT_OPERATING_MODE,
                {
                    OverkizCommandParam.RELAUNCH: OverkizCommandParam.OFF,
                    OverkizCommandParam.ABSENCE: OverkizCommandParam.OFF,
                },
            )
        if self.device.controllable_name in [DHWP_TYPE_CE_FLAT_C2, DHWP_TYPE_MBL]:
            await self.executor.async_execute_command(
                OverkizCommand.SET_ABSENCE_MODE, OverkizCommandParam.OFF
            )
