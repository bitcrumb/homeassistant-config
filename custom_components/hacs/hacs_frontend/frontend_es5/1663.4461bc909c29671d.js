"use strict";(self.webpackChunkhacs_frontend=self.webpackChunkhacs_frontend||[]).push([["1663"],{69181:function(e,i,t){t.a(e,(async function(e,i){try{var a=t(73577),s=(t(19083),t(71695),t(19423),t(40251),t(61006),t(39527),t(92181),t(99790),t(13334),t(36993),t(47021),t(57243)),n=t(50778),r=t(35359),d=t(27486),l=t(11297),o=t(79575),c=t(59848),u=t(71656),h=t(92374),v=t(4557),p=t(88233),m=t(69484),k=(t(59897),t(74064),t(10508),e([m]));m=(k.then?(await k)():k)[0];let y,f,_,b,g=e=>e;const C="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z",x=e=>(0,s.dy)(y||(y=g`<ha-list-item graphic="icon" class="${0}"> ${0} ${0} </ha-list-item>`),(0,r.$)({"add-new":e.area_id===$}),e.icon?(0,s.dy)(f||(f=g`<ha-icon slot="graphic" .icon="${0}"></ha-icon>`),e.icon):(0,s.dy)(_||(_=g`<ha-svg-icon slot="graphic" .path="${0}"></ha-svg-icon>`),C),e.name),$="___ADD_NEW___",A="___NO_ITEMS___",B="___ADD_NEW_SUGGESTION___";(0,a.Z)([(0,n.Mo)("ha-area-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-areas"})],key:"excludeAreas",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"field",decorators:[(0,n.SB)()],key:"_opened",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-combo-box",!0)],key:"comboBox",value:void 0},{kind:"field",key:"_suggestion",value:void 0},{kind:"field",key:"_init",value(){return!1}},{kind:"method",key:"open",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.open())}},{kind:"method",key:"focus",value:async function(){var e;await this.updateComplete,await(null===(e=this.comboBox)||void 0===e?void 0:e.focus())}},{kind:"field",key:"_getAreas",value(){return(0,d.Z)(((e,i,t,a,s,n,r,d,l,c)=>{let u,v,p={};(a||s||n||r||d)&&(p=(0,h.R6)(t),u=i,v=t.filter((e=>e.area_id)),a&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>a.includes((0,o.M)(e.entity_id))))})),v=v.filter((e=>a.includes((0,o.M)(e.entity_id))))),s&&(u=u.filter((e=>{const i=p[e.id];return!i||!i.length||t.every((e=>!s.includes((0,o.M)(e.entity_id))))})),v=v.filter((e=>!s.includes((0,o.M)(e.entity_id))))),n&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&(i.attributes.device_class&&n.includes(i.attributes.device_class))}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return i.attributes.device_class&&n.includes(i.attributes.device_class)}))),r&&(u=u.filter((e=>r(e)))),d&&(u=u.filter((e=>{const i=p[e.id];return!(!i||!i.length)&&p[e.id].some((e=>{const i=this.hass.states[e.entity_id];return!!i&&d(i)}))})),v=v.filter((e=>{const i=this.hass.states[e.entity_id];return!!i&&d(i)}))));let m,k=e;return u&&(m=u.filter((e=>e.area_id)).map((e=>e.area_id))),v&&(m=(null!=m?m:[]).concat(v.filter((e=>e.area_id)).map((e=>e.area_id)))),m&&(k=k.filter((e=>m.includes(e.area_id)))),c&&(k=k.filter((e=>!c.includes(e.area_id)))),k.length||(k=[{area_id:A,floor_id:null,name:this.hass.localize("ui.components.area-picker.no_areas"),picture:null,icon:null,aliases:[],labels:[],created_at:0,modified_at:0}]),l?k:[...k,{area_id:$,floor_id:null,name:this.hass.localize("ui.components.area-picker.add_new"),picture:null,icon:"mdi:plus",aliases:[],labels:[],created_at:0,modified_at:0}]}))}},{kind:"method",key:"updated",value:function(e){if(!this._init&&this.hass||this._init&&e.has("_opened")&&this._opened){this._init=!0;const e=this._getAreas(Object.values(this.hass.areas),Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas).map((e=>Object.assign(Object.assign({},e),{},{strings:[e.area_id,...e.aliases,e.name]})));this.comboBox.items=e,this.comboBox.filteredItems=e}}},{kind:"method",key:"render",value:function(){var e;return(0,s.dy)(b||(b=g` <ha-combo-box .hass="${0}" .helper="${0}" item-value-path="area_id" item-id-path="area_id" item-label-path="name" .value="${0}" .disabled="${0}" .required="${0}" .label="${0}" .placeholder="${0}" .renderer="${0}" @filter-changed="${0}" @opened-changed="${0}" @value-changed="${0}"> </ha-combo-box> `),this.hass,this.helper,this._value,this.disabled,this.required,void 0===this.label&&this.hass?this.hass.localize("ui.components.area-picker.area"):this.label,this.placeholder?null===(e=this.hass.areas[this.placeholder])||void 0===e?void 0:e.name:void 0,x,this._filterChanged,this._openedChanged,this._areaChanged)}},{kind:"method",key:"_filterChanged",value:function(e){var i;const t=e.target,a=e.detail.value;if(!a)return void(this.comboBox.filteredItems=this.comboBox.items);const s=(0,c.q)(a,(null===(i=t.items)||void 0===i?void 0:i.filter((e=>![A,$].includes(e.label_id))))||[]);0===s.length?this.noAdd?(this._suggestion=a,this.comboBox.filteredItems=[{area_id:B,floor_id:null,name:this.hass.localize("ui.components.area-picker.add_new_sugestion",{name:this._suggestion}),icon:"mdi:plus",picture:null,labels:[],aliases:[],created_at:0,modified_at:0}]):this.comboBox.filteredItems=[{area_id:A,floor_id:null,name:this.hass.localize("ui.components.area-picker.no_match"),icon:null,picture:null,labels:[],aliases:[],created_at:0,modified_at:0}]:this.comboBox.filteredItems=s}},{kind:"get",key:"_value",value:function(){return this.value||""}},{kind:"method",key:"_openedChanged",value:function(e){this._opened=e.detail.value}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();let i=e.detail.value;if(i===A)return i="",void this.comboBox.setInputValue("");[B,$].includes(i)?(e.target.value=this._value,this.hass.loadFragmentTranslation("config"),(0,p.E)(this,{suggestedName:i===B?this._suggestion:"",createEntry:async e=>{try{const i=await(0,u.Lo)(this.hass,e),t=[...Object.values(this.hass.areas),i];this.comboBox.filteredItems=this._getAreas(t,Object.values(this.hass.devices),Object.values(this.hass.entities),this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.noAdd,this.excludeAreas),await this.updateComplete,await this.comboBox.updateComplete,this._setValue(i.area_id)}catch(i){(0,v.Ys)(this,{title:this.hass.localize("ui.components.area-picker.failed_create_area"),text:i.message})}}}),this._suggestion=void 0,this.comboBox.setInputValue("")):i!==this._value&&this._setValue(i)}},{kind:"method",key:"_setValue",value:function(e){this.value=e,setTimeout((()=>{(0,l.B)(this,"value-changed",{value:e}),(0,l.B)(this,"change")}),0)}}]}}),s.oi);i()}catch(y){i(y)}}))},2701:function(e,i,t){t.a(e,(async function(e,i){try{var a=t(73577),s=(t(19083),t(71695),t(40251),t(61006),t(39527),t(99790),t(13334),t(47021),t(57243)),n=t(50778),r=t(11297),d=t(44573),l=t(69181),o=e([l]);l=(o.then?(await o)():o)[0];let c,u,h,v=e=>e;(0,a.Z)([(0,n.Mo)("ha-areas-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-add"})],key:"noAdd",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"deviceFilter",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"entityFilter",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"picked-area-label"})],key:"pickedAreaLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"pick-area-label"})],key:"pickAreaLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value(){return!1}},{kind:"method",key:"render",value:function(){if(!this.hass)return s.Ld;const e=this._currentAreas;return(0,s.dy)(c||(c=v` ${0} <div> <ha-area-picker .noAdd="${0}" .hass="${0}" .label="${0}" .helper="${0}" .includeDomains="${0}" .excludeDomains="${0}" .includeDeviceClasses="${0}" .deviceFilter="${0}" .entityFilter="${0}" .disabled="${0}" .placeholder="${0}" .required="${0}" @value-changed="${0}" .excludeAreas="${0}"></ha-area-picker> </div> `),e.map((e=>(0,s.dy)(u||(u=v` <div> <ha-area-picker .curValue="${0}" .noAdd="${0}" .hass="${0}" .value="${0}" .label="${0}" .includeDomains="${0}" .excludeDomains="${0}" .includeDeviceClasses="${0}" .deviceFilter="${0}" .entityFilter="${0}" .disabled="${0}" @value-changed="${0}"></ha-area-picker> </div> `),e,this.noAdd,this.hass,e,this.pickedAreaLabel,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.disabled,this._areaChanged))),this.noAdd,this.hass,this.pickAreaLabel,this.helper,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter,this.entityFilter,this.disabled,this.placeholder,this.required&&!e.length,this._addArea,e)}},{kind:"get",key:"_currentAreas",value:function(){return this.value||[]}},{kind:"method",key:"_updateAreas",value:async function(e){this.value=e,(0,r.B)(this,"value-changed",{value:e})}},{kind:"method",key:"_areaChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;if(t===i)return;const a=this._currentAreas;t&&!a.includes(t)?this._updateAreas(a.map((e=>e===i?t:e))):this._updateAreas(a.filter((e=>e!==i)))}},{kind:"method",key:"_addArea",value:function(e){e.stopPropagation();const i=e.detail.value;if(!i)return;e.currentTarget.value="";const t=this._currentAreas;t.includes(i)||this._updateAreas([...t,i])}},{kind:"field",static:!0,key:"styles",value(){return(0,s.iv)(h||(h=v`div{margin-top:8px}`))}}]}}),(0,d.f)(s.oi));i()}catch(c){i(c)}}))},74064:function(e,i,t){var a=t(73577),s=t(72621),n=(t(71695),t(47021),t(65703)),r=t(46289),d=t(57243),l=t(50778);let o,c,u,h=e=>e;(0,a.Z)([(0,l.Mo)("ha-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,s.Z)(t,"renderRipple",this,3)([])}},{kind:"get",static:!0,key:"styles",value:function(){return[r.W,(0,d.iv)(o||(o=h`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-inline-start:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px));padding-inline-end:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)!important}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)!important}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center;flex-shrink:0}:host([graphic=icon]:not([twoline])) .mdc-deprecated-list-item__graphic{margin-inline-end:var(--mdc-list-item-graphic-margin,20px)!important}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`)),"rtl"===document.dir?(0,d.iv)(c||(c=h`span.material-icons:first-of-type,span.material-icons:last-of-type{direction:rtl!important;--direction:rtl}`)):(0,d.iv)(u||(u=h``))]}}]}}),n.K)},5491:function(e,i,t){t.a(e,(async function(e,a){try{t.r(i),t.d(i,{HaAreaSelector:function(){return b}});var s=t(73577),n=(t(71695),t(39527),t(36993),t(47021),t(57243)),r=t(50778),d=t(27486),l=t(24785),o=t(92374),c=t(11297),u=t(82659),h=t(87055),v=t(45634),p=t(69181),m=t(2701),k=e([p,m]);[p,m]=k.then?(await k)():k;let y,f,_=e=>e,b=(0,s.Z)([(0,r.Mo)("ha-selector-area")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"required",value(){return!0}},{kind:"field",decorators:[(0,r.SB)()],key:"_entitySources",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_configEntries",value:void 0},{kind:"field",key:"_deviceIntegrationLookup",value(){return(0,d.Z)(o.HP)}},{kind:"method",key:"_hasIntegration",value:function(e){var i,t;return(null===(i=e.area)||void 0===i?void 0:i.entity)&&(0,l.r)(e.area.entity).some((e=>e.integration))||(null===(t=e.area)||void 0===t?void 0:t.device)&&(0,l.r)(e.area.device).some((e=>e.integration))}},{kind:"method",key:"willUpdate",value:function(e){var i,t;e.has("selector")&&void 0!==this.value&&(null!==(i=this.selector.area)&&void 0!==i&&i.multiple&&!Array.isArray(this.value)?(this.value=[this.value],(0,c.B)(this,"value-changed",{value:this.value})):null!==(t=this.selector.area)&&void 0!==t&&t.multiple||!Array.isArray(this.value)||(this.value=this.value[0],(0,c.B)(this,"value-changed",{value:this.value})))}},{kind:"method",key:"updated",value:function(e){e.has("selector")&&this._hasIntegration(this.selector)&&!this._entitySources&&(0,u.m)(this.hass).then((e=>{this._entitySources=e})),!this._configEntries&&this._hasIntegration(this.selector)&&(this._configEntries=[],(0,h.pB)(this.hass).then((e=>{this._configEntries=e})))}},{kind:"method",key:"render",value:function(){var e,i,t,a,s;return this._hasIntegration(this.selector)&&!this._entitySources?n.Ld:null!==(e=this.selector.area)&&void 0!==e&&e.multiple?(0,n.dy)(f||(f=_` <ha-areas-picker .hass="${0}" .value="${0}" .helper="${0}" .pickAreaLabel="${0}" no-add .deviceFilter="${0}" .entityFilter="${0}" .disabled="${0}" .required="${0}"></ha-areas-picker> `),this.hass,this.value,this.helper,this.label,null!==(i=this.selector.area)&&void 0!==i&&i.device?this._filterDevices:void 0,null!==(t=this.selector.area)&&void 0!==t&&t.entity?this._filterEntities:void 0,this.disabled,this.required):(0,n.dy)(y||(y=_` <ha-area-picker .hass="${0}" .value="${0}" .label="${0}" .helper="${0}" no-add .deviceFilter="${0}" .entityFilter="${0}" .disabled="${0}" .required="${0}"></ha-area-picker> `),this.hass,this.value,this.label,this.helper,null!==(a=this.selector.area)&&void 0!==a&&a.device?this._filterDevices:void 0,null!==(s=this.selector.area)&&void 0!==s&&s.entity?this._filterEntities:void 0,this.disabled,this.required)}},{kind:"field",key:"_filterEntities",value(){return e=>{var i;return null===(i=this.selector.area)||void 0===i||!i.entity||(0,l.r)(this.selector.area.entity).some((i=>(0,v.lV)(i,e,this._entitySources)))}}},{kind:"field",key:"_filterDevices",value(){return e=>{var i;if(null===(i=this.selector.area)||void 0===i||!i.device)return!0;const t=this._entitySources?this._deviceIntegrationLookup(this._entitySources,Object.values(this.hass.entities),Object.values(this.hass.devices),this._configEntries):void 0;return(0,l.r)(this.selector.area.device).some((i=>(0,v.lE)(i,e,t)))}}}]}}),n.oi);a()}catch(y){a(y)}}))},71656:function(e,i,t){t.d(i,{IO:function(){return n},Lo:function(){return s},a:function(){return r}});t(71695),t(92745),t(19423),t(47021);var a=t(32770);t(86912);const s=(e,i)=>e.callWS(Object.assign({type:"config/area_registry/create"},i)),n=(e,i,t)=>e.callWS(Object.assign({type:"config/area_registry/update",area_id:i},t)),r=(e,i)=>(t,s)=>{const n=i?i.indexOf(t):-1,r=i?i.indexOf(s):-1;if(-1===n&&-1===r){var d,l,o,c;const i=null!==(d=null==e||null===(l=e[t])||void 0===l?void 0:l.name)&&void 0!==d?d:t,n=null!==(o=null==e||null===(c=e[s])||void 0===c?void 0:c.name)&&void 0!==o?o:s;return(0,a.$)(i,n)}return-1===n?1:-1===r?-1:n-r}},82659:function(e,i,t){t.d(i,{m:()=>n});t("71695"),t("40251"),t("47021");const a=async(e,i,t,s,n,...r)=>{const d=n,l=d[e],o=l=>s&&s(n,l.result)!==l.cacheKey?(d[e]=void 0,a(e,i,t,s,n,...r)):l.result;if(l)return l instanceof Promise?l.then(o):o(l);const c=t(n,...r);return d[e]=c,c.then((t=>{d[e]={result:t,cacheKey:null==s?void 0:s(n,t)},setTimeout((()=>{d[e]=void 0}),i)}),(()=>{d[e]=void 0})),c},s=e=>e.callWS({type:"entity/source"}),n=e=>a("_entitySources",3e4,s,(e=>Object.keys(e.states).length),e)},86912:function(e,i,t){t(61893),t(32770),t(56587)},44573:function(e,i,t){t.d(i,{f:function(){return r}});var a=t(73577),s=t(72621),n=(t(19083),t(71695),t(40251),t(61006),t(39527),t(36993),t(47021),t(50778));const r=e=>(0,a.Z)(null,(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)(t,"connectedCallback",this,3)([]),this._checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,s.Z)(t,"disconnectedCallback",this,3)([]),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,s.Z)(t,"updated",this,3)([e]),e.has("hass"))this._checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const i of e.keys())if(this.hassSubscribeRequiredHostProps.includes(i))return void this._checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"_checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},88233:function(e,i,t){t.d(i,{E:function(){return n}});t(71695),t(40251),t(47021);var a=t(11297);const s=()=>Promise.all([t.e("1552"),t.e("8006"),t.e("2311"),t.e("5220"),t.e("9009"),t.e("680"),t.e("6216")]).then(t.bind(t,40600)),n=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-area-registry-detail",dialogImport:s,dialogParams:i})}}}]);
//# sourceMappingURL=1663.4461bc909c29671d.js.map