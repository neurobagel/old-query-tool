(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{382:function(e,t,n){"use strict";n.r(t);n(43);var o={props:{min:{type:String,default:"0"},name:{type:String,required:!0},step:{type:String,default:"1"}},emits:["update-continuous-field"],methods:{updateField:function(e){this.$emit("update-continuous-field",this.name,e)}}},l=n(79),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{"data-cy":"continuous-field-label"}},[e._v(e._s(e.name))]),e._v(" "),t("b-form-input",{staticClass:"numberinput form-control",attrs:{"data-cy":"".concat(e.name,"-continuous-field-input"),type:"number",step:e.step,min:e.min},on:{input:e.updateField}})],1)}),[],!1,null,null,null);t.default=component.exports},383:function(e,t,n){"use strict";n.r(t);n(43);var o={props:{name:{type:String,required:!0},defaultSelected:{type:String,default:null},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1}},emits:["update-categorical-field"],data:function(){return{selected:this.defaultSelected}},methods:{updateField:function(){this.$emit("update-categorical-field",this.name,this.selected)}}},l=n(79),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-3"},[t("b-row",{staticClass:"row"},[t("b-form-group",{staticClass:"col"},[t("label",{staticClass:"form-label",attrs:{"data-cy":"categorical-field-label"}},[e._v(e._s(e.name))])]),e._v(" "),e._t("control")],2),e._v(" "),t("v-select",{attrs:{"data-cy":"".concat(e.name,"-select"),options:e.options,disabled:e.disabled},on:{input:e.updateField},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)}),[],!1,null,null,null);t.default=component.exports},386:function(e,t,n){"use strict";n.r(t);n(15),n(28),n(34);var o=n(52),l=(n(116),n(205),{props:{categoricalOptions:{type:Object,required:!0}},emits:["update-response"],data:function(){return{minAge:null,maxAge:null,sex:null,diagnosis:null,is_control:!1,min_num_sessions:null,assessment:null,modality:null,isFetching:!1}},methods:{updateField:function(e,input){switch(e){case"Min Age":this.minAge=input;break;case"Max Age":this.maxAge=input;break;case"Sex":this.sex=this.categoricalOptions[e][input];break;case"Diagnosis":this.diagnosis=this.categoricalOptions[e][input];break;case"Minimum number of sessions":this.min_num_sessions=input;break;case"Assessment tool":this.assessment=this.categoricalOptions[e][input];break;case"Imaging modality":this.modality=this.categoricalOptions[e][input]}},displayToast:function(e){this.$bvToast.toast(e,{appendToast:!0,autoHideDelay:"5000",noCloseButton:!0,solid:!0,title:"Error",variant:"danger"})},validateQueryForm:function(){this.minAge&&this.maxAge&&Number(this.minAge)>Number(this.maxAge)?this.displayToast("The value of maximum age field must be greater than or equal to the value of minimum age field"):this.submitQuery()},submitQuery:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isFetching=!0,n="".concat(e.$config.apiQueryURL,"query/?"),e.minAge&&(n+="min_age=".concat(e.minAge)),e.maxAge&&(n+="&max_age=".concat(e.maxAge)),e.sex&&(n+="&sex=".concat(e.sex)),e.diagnosis&&!e.is_control&&(n+="&diagnosis=".concat(e.diagnosis)),e.is_control&&(n+="&is_control=".concat(e.is_control)),e.min_num_sessions&&(n+="&min_num_sessions=".concat(e.min_num_sessions)),e.assessment&&(n+="&assessment=".concat(e.assessment)),e.modality&&(n+="&image_modal=".concat(e.modality)),t.prev=10,t.next=13,e.$axios.get(n);case 13:o=t.sent,e.$emit("update-response",o.data,null),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(10),e.$emit("update-response",null,"Oops, something went wrong");case 20:e.isFetching=!1;case 21:case"end":return t.stop()}}),t,null,[[10,17]])})))()}}}),c=n(79),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("b-col",{attrs:{cols:"12",md:"4",xl:"2"}},[t("b-row",[t("h5",[e._v("Query fields")])]),e._v(" "),t("b-row",[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.validateQueryForm.apply(null,arguments)}}},[t("b-form-row",{staticClass:"row"},[t("b-form-group",{staticClass:"col-md-6"},[t("continuous-field",{attrs:{name:"Min Age","data-cy":"min-age-field",step:"any"},on:{"update-continuous-field":e.updateField}})],1),e._v(" "),t("b-form-group",{staticClass:"col-md-6"},[t("continuous-field",{attrs:{name:"Max Age","data-cy":"max-age-field",step:"any"},on:{"update-continuous-field":e.updateField}})],1)],1),e._v(" "),t("categorical-field",{attrs:{name:"Sex","data-cy":"sex-field","default-selected":Object.keys(e.categoricalOptions.Sex)[0],options:Object.keys(e.categoricalOptions.Sex)},on:{"update-categorical-field":e.updateField}}),e._v(" "),t("categorical-field",{attrs:{name:"Diagnosis","data-cy":"diagnosis-field","default-selected":Object.keys(e.categoricalOptions.Diagnosis)[0],options:Object.keys(e.categoricalOptions.Diagnosis),disabled:e.is_control},on:{"update-categorical-field":e.updateField},scopedSlots:e._u([{key:"control",fn:function(){return[t("b-form-group",{staticClass:"col-md-7"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.is_control,expression:"is_control"}],staticClass:"form-check-input",attrs:{"data-cy":"healthy-control-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.is_control)?e._i(e.is_control,null)>-1:e.is_control},on:{change:function(t){var n=e.is_control,o=t.target,l=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&(e.is_control=n.concat([null])):c>-1&&(e.is_control=n.slice(0,c).concat(n.slice(c+1)))}else e.is_control=l}}}),e._v(" "),t("label",{staticClass:"form-label"},[e._v("Healthy control")])])]},proxy:!0}])}),e._v(" "),t("continuous-field",{attrs:{min:"1",name:"Minimum number of sessions","data-cy":"min-num-sessions-field",step:"1"},on:{"update-continuous-field":e.updateField}}),e._v(" "),t("categorical-field",{attrs:{name:"Assessment tool","data-cy":"assessment-tool-field","default-selected":Object.keys(e.categoricalOptions["Assessment tool"])[0],options:Object.keys(e.categoricalOptions["Assessment tool"])},on:{"update-categorical-field":e.updateField}}),e._v(" "),t("categorical-field",{attrs:{name:"Imaging modality","data-cy":"modality-field","default-selected":Object.keys(e.categoricalOptions["Imaging modality"])[0],options:Object.keys(e.categoricalOptions["Imaging modality"])},on:{"update-categorical-field":e.updateField}}),e._v(" "),t("b-button",{staticClass:"nb-button",attrs:{type:"submit","data-cy":"submit-query"}},[e.isFetching?t("b-spinner",{attrs:{small:""}}):e._e(),e._v("\n        Submit Query\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContinuousField:n(382).default,CategoricalField:n(383).default})}}]);