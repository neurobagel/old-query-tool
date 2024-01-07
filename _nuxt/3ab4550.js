(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{395:function(e,t,o){"use strict";o.r(t);o(38);var n={props:{min:{type:String,default:"0"},name:{type:String,required:!0},step:{type:String,default:"1"}},emits:["update-continuous-field"],methods:{updateField:function(e){this.$emit("update-continuous-field",this.name,e)}}},l=o(79),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-3"},[t("label",{staticClass:"form-label",attrs:{"data-cy":"continuous-field-label"}},[e._v(e._s(e.name))]),e._v(" "),t("b-form-input",{staticClass:"numberinput form-control",attrs:{"data-cy":"".concat(e.name,"-continuous-field-input"),type:"number",step:e.step,min:e.min},on:{input:e.updateField}})],1)}),[],!1,null,null,null);t.default=component.exports},396:function(e,t,o){"use strict";o.r(t);o(38),o(116);var n={props:{name:{type:String,required:!0},defaultSelected:{type:[String,Array],default:null},options:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update-categorical-field"],data:function(){return{selected:this.defaultSelected}},computed:{sortedOptions:function(){return this.options.sort((function(a,b){return a.toLowerCase().localeCompare(b.toLowerCase())}))}},methods:{updateField:function(){this.$emit("update-categorical-field",this.name,this.selected)}}},l=o(79),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-3"},[t("b-row",{staticClass:"row"},[t("b-form-group",{staticClass:"col"},[t("label",{staticClass:"form-label",attrs:{"data-cy":"categorical-field-label"}},[e._v(e._s(e.name))])]),e._v(" "),e._t("control")],2),e._v(" "),t("v-select",{attrs:{"data-cy":"".concat(e.name,"-select"),options:e.sortedOptions,multiple:e.multiple,disabled:e.disabled},on:{input:e.updateField},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)}),[],!1,null,null,null);t.default=component.exports},400:function(e,t,o){"use strict";o.r(t);o(15),o(28),o(33);var n=o(51),l=(o(118),o(289),o(209),o(8),o(12),o(47),o(66),o(69),o(290),{props:{categoricalOptions:{type:Object,required:!0},isFederationApi:{type:Boolean,default:!0},availableNodes:{type:Array,default:function(){return[]}},selectedNodes:{type:Array,default:function(){return[]}}},emits:["update-response","select-nodes"],data:function(){return{minAge:null,maxAge:null,sex:null,diagnosis:null,is_control:!1,min_num_sessions:null,assessment:null,modality:null,isFetching:!1}},computed:{apiQueryURL:function(){var e=this.$config.apiQueryURL;return e.endsWith("/")?"".concat(e,"query/?"):"".concat(e,"/query/?")}},methods:{updateField:function(e,input){switch(e){case"Min Age":this.minAge=input;break;case"Max Age":this.maxAge=input;break;case"Sex":this.sex=this.categoricalOptions[e][input];break;case"Diagnosis":this.diagnosis=this.categoricalOptions[e][input];break;case"Minimum number of sessions":this.min_num_sessions=input;break;case"Assessment tool":this.assessment=this.categoricalOptions[e][input];break;case"Imaging modality":this.modality=this.categoricalOptions[e][input]}},displayToast:function(e){this.$bvToast.toast(e,{appendToast:!0,autoHideDelay:"5000",noCloseButton:!0,solid:!0,title:"Error",variant:"danger"})},validateQueryForm:function(){this.minAge&&this.maxAge&&Number(this.minAge)>Number(this.maxAge)?this.displayToast("The value of maximum age field must be greater than or equal to the value of minimum age field"):this.submitQuery()},constructQueryURL:function(){var e={};this.isFederationApi&&this.selectedNodes.length>0&&this.selectedNodes.forEach((function(t){"All"!==t.NodeName&&(e.node_url=t.ApiURL)})),e.min_age=this.minAge,e.max_age=this.maxAge,e.sex=this.sex,e.diagnosis=this.diagnosis&&!this.is_control?this.diagnosis:null,e.is_control=this.is_control||null,e.min_num_sessions=this.min_num_sessions,e.assessment=this.assessment,e.image_modal=this.modality,Object.keys(e).forEach((function(t){null!==e[t]&&void 0!==e[t]||delete e[t]}));var t=new URLSearchParams(e).toString();return"".concat(this.apiQueryURL).concat(t)},submitQuery:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isFetching=!0,o=e.constructQueryURL(),t.prev=2,t.next=5,e.$axios.get(o);case 5:n=t.sent,e.$emit("update-response",n.data,null),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.$emit("update-response",null,"Oops, something went wrong");case 12:e.isFetching=!1;case 13:case"end":return t.stop()}}),t,null,[[2,9]])})))()}}}),r=o(79),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("b-col",{attrs:{cols:"12",md:"4",xl:"2"}},[t("b-row",[t("h5",[e._v("Query fields")])]),e._v(" "),t("b-row",[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.validateQueryForm.apply(null,arguments)}}},[t("b-form-row",{staticClass:"row"},[e.isFederationApi?t("div",[t("label",{staticClass:"form-label"},[e._v("\n            Neurobagel Graph\n          ")]),e._v(" "),t("v-select",{attrs:{value:e.selectedNodes,"data-cy":"node-field",options:e.availableNodes,multiple:"",label:"NodeName"},on:{input:function(t){return e.$emit("selectNodes",t)}}})],1):e._e(),e._v(" "),t("div",[t("hr")]),e._v(" "),t("b-row",[t("h5",[e._v("Phenotypic fields (at baseline)")])]),e._v(" "),t("b-form-group",{staticClass:"col-md-6"},[t("continuous-field",{attrs:{name:"Min Age","data-cy":"min-age-field",step:"any"},on:{"update-continuous-field":e.updateField}})],1),e._v(" "),t("b-form-group",{staticClass:"col-md-6"},[t("continuous-field",{attrs:{name:"Max Age","data-cy":"max-age-field",step:"any"},on:{"update-continuous-field":e.updateField}})],1)],1),e._v(" "),t("categorical-field",{attrs:{name:"Sex","data-cy":"sex-field","default-selected":Object.keys(e.categoricalOptions.Sex)[0],options:Object.keys(e.categoricalOptions.Sex)},on:{"update-categorical-field":e.updateField}}),e._v(" "),t("categorical-field",{attrs:{name:"Diagnosis","data-cy":"diagnosis-field","default-selected":"All",options:Object.keys(e.categoricalOptions.Diagnosis),disabled:e.is_control},on:{"update-categorical-field":e.updateField},scopedSlots:e._u([{key:"control",fn:function(){return[t("b-form-group",{staticClass:"col-md-7"},[t("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:"Checking the healthy control checkbox             disables the diagnosis field because we do not support queries             for healthy controls with secondary diagnoses",expression:"'Checking the healthy control checkbox \\\n            disables the diagnosis field because we do not support queries \\\n            for healthy controls with secondary diagnoses'",modifiers:{hover:!0,right:!0}}]},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.is_control,expression:"is_control"}],staticClass:"form-check-input",attrs:{id:"healthy-control-checkbox","data-cy":"healthy-control-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(e.is_control)?e._i(e.is_control,null)>-1:e.is_control},on:{change:function(t){var o=e.is_control,n=t.target,l=!!n.checked;if(Array.isArray(o)){var r=e._i(o,null);n.checked?r<0&&(e.is_control=o.concat([null])):r>-1&&(e.is_control=o.slice(0,r).concat(o.slice(r+1)))}else e.is_control=l}}}),e._v(" "),t("label",{staticClass:"form-label",attrs:{for:"healthy-control-checkbox"}},[e._v("Healthy control")])])])]},proxy:!0}])}),e._v(" "),t("continuous-field",{attrs:{min:"1",name:"Minimum number of sessions","data-cy":"min-num-sessions-field",step:"1"},on:{"update-continuous-field":e.updateField}}),e._v(" "),t("categorical-field",{attrs:{name:"Assessment tool","data-cy":"assessment-tool-field","default-selected":"All",options:Object.keys(e.categoricalOptions["Assessment tool"])},on:{"update-categorical-field":e.updateField}}),e._v(" "),t("div",[t("hr")]),e._v(" "),t("b-row",[t("h5",[e._v("Imaging fields")])]),e._v(" "),t("categorical-field",{attrs:{name:"Imaging modality","data-cy":"modality-field","default-selected":Object.keys(e.categoricalOptions["Imaging modality"])[0],options:Object.keys(e.categoricalOptions["Imaging modality"])},on:{"update-categorical-field":e.updateField}}),e._v(" "),t("b-button",{staticClass:"nb-button",attrs:{type:"submit","data-cy":"submit-query"}},[e.isFetching?t("b-spinner",{attrs:{small:""}}):e._e(),e._v("\n        Submit Query\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContinuousField:o(395).default,CategoricalField:o(396).default})}}]);