/*! For license information please see 6461.bca93d72a70623d4.js.LICENSE.txt */
export const ids=["6461"];export const modules={76418:function(e,t,i){var n=i(44249),o=i(92444),r=i(76688),a=i(57243),l=i(50778);(0,n.Z)([(0,l.Mo)("ha-checkbox")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[r.W,a.iv`:host{--mdc-theme-secondary:var(--primary-color)}`]}]}}),o.A)},90918:function(e,t,i){i.r(t),i.d(t,{HaFormBoolean:()=>f});var n=i("44249"),o=i("9065"),r=i("50778"),a=i("4918"),l=i("6394");let d=class extends a.a{};d.styles=[l.W],d=(0,o.gn)([(0,r.Mo)("mwc-formfield")],d);var s=i("57243"),c=i("11297");i("76418");let f=(0,n.Z)([(0,r.Mo)("ha-form-boolean")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"schema",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"data",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,r.IO)("ha-checkbox",!0)],key:"_input",value:void 0},{kind:"method",key:"focus",value:function(){this._input&&this._input.focus()}},{kind:"method",key:"render",value:function(){return s.dy` <mwc-formfield .label="${this.label}"> <ha-checkbox .checked="${this.data}" .disabled="${this.disabled}" @change="${this._valueChanged}"></ha-checkbox> <span slot="label"> <p class="primary">${this.label}</p> ${this.helper?s.dy`<p class="secondary">${this.helper}</p>`:s.Ld} </span> </mwc-formfield> `}},{kind:"method",key:"_valueChanged",value:function(e){(0,c.B)(this,"value-changed",{value:e.target.checked})}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`ha-formfield{display:flex;min-height:56px;align-items:center;--mdc-typography-body2-font-size:1em}p{margin:0}.secondary{direction:var(--direction);padding-top:4px;box-sizing:border-box;color:var(--secondary-text-color);font-size:.875rem;font-weight:var(--mdc-typography-body2-font-weight,400)}`}}]}}),s.oi)},88618:function(e,t,i){i.d(t,{Wg:function(){return s},qN:function(){return l.q}});var n,o,r=i(9065),a=i(50778),l=i(11911);const d=null!==(o=null===(n=window.ShadyDOM)||void 0===n?void 0:n.inUse)&&void 0!==o&&o;class s extends l.H{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=e=>{this.disabled||this.setFormData(e.formData)}}findFormElement(){if(!this.shadowRoot||d)return null;const e=this.getRootNode().querySelectorAll("form");for(const t of Array.from(e))if(t.contains(this))return t;return null}connectedCallback(){var e;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(e=this.containingForm)||void 0===e||e.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.containingForm)||void 0===e||e.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(e=>{this.dispatchEvent(new Event("change",e))}))}}s.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,r.gn)([(0,a.Cb)({type:Boolean})],s.prototype,"disabled",void 0)},4918:function(e,t,i){i.d(t,{a:()=>h});var n=i("9065"),o=i("80573"),r={ROOT:"mdc-form-field"},a={LABEL_SELECTOR:".mdc-form-field > label"};const l=function(e){function t(i){var o=e.call(this,(0,n.pi)((0,n.pi)({},t.defaultAdapter),i))||this;return o.click=function(){o.handleClick()},o}return(0,n.ZT)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return r},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(o.K);var d=i("11911"),s=i("88618"),c=i("78611"),f=i("57243"),m=i("50778"),p=i("35359");class h extends d.H{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=l}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof s.Wg){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof s.Wg){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return f.dy` <div class="mdc-form-field ${(0,p.$)(e)}"> <slot></slot> <label class="mdc-label" @click="${this._labelClick}">${this.label}</label> </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}(0,n.gn)([(0,m.Cb)({type:Boolean})],h.prototype,"alignEnd",void 0),(0,n.gn)([(0,m.Cb)({type:Boolean})],h.prototype,"spaceBetween",void 0),(0,n.gn)([(0,m.Cb)({type:Boolean})],h.prototype,"nowrap",void 0),(0,n.gn)([(0,m.Cb)({type:String}),(0,c.P)((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],h.prototype,"label",void 0),(0,n.gn)([(0,m.IO)(".mdc-form-field")],h.prototype,"mdcRoot",void 0),(0,n.gn)([(0,m.vZ)("",!0,"*")],h.prototype,"slottedInputs",void 0),(0,n.gn)([(0,m.IO)("label")],h.prototype,"labelEl",void 0)},6394:function(e,t,i){i.d(t,{W:function(){return n}});const n=i(57243).iv`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{margin-left:auto;margin-right:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{margin-left:0;margin-right:auto}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}.mdc-form-field--space-between>label[dir=rtl],[dir=rtl] .mdc-form-field--space-between>label{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch[dir=rtl]),[dir=rtl] ::slotted(mwc-switch){margin-left:10px}`}};
//# sourceMappingURL=6461.bca93d72a70623d4.js.map