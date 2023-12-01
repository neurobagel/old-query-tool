(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{388:function(t,e,o){var content=o(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(82).default)("c3a1fe90",content,!0,{sourceMap:!1})},389:function(t,e,o){"use strict";o(388)},390:function(t,e,o){var n=o(81)((function(i){return i[1]}));n.push([t.i,".card-checkbox{padding-right:0}.card-content{padding-left:0}.card-modality{font-size:1em}.card-text{font-size:1.25em}.card-title{font-size:1.75em;max-width:100%}.card-title,.expanded{white-space:normal}.expander{color:#470a68;cursor:pointer;font-size:15px!important;font-style:italic}",""]),n.locals={},t.exports=n},391:function(t,e,o){"use strict";o.r(e);o(43);var n={props:{min:{type:String,default:"0"},name:{type:String,required:!0},step:{type:String,default:"1"}},emits:["update-continuous-field"],methods:{updateField:function(t){this.$emit("update-continuous-field",this.name,t)}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{"data-cy":"continuous-field-label"}},[t._v(t._s(t.name))]),t._v(" "),e("b-form-input",{staticClass:"numberinput form-control",attrs:{"data-cy":"".concat(t.name,"-continuous-field-input"),type:"number",step:t.step,min:t.min},on:{input:t.updateField}})],1)}),[],!1,null,null,null);e.default=component.exports},392:function(t,e,o){"use strict";o.r(e);o(43),o(116);var n={props:{name:{type:String,required:!0},defaultSelected:{type:[String,Array],default:null},options:{type:Array,default:function(){return[]}},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update-categorical-field"],data:function(){return{selected:this.defaultSelected}},computed:{sortedOptions:function(){return this.options.sort((function(a,b){return a.toLowerCase().localeCompare(b.toLowerCase())}))}},methods:{updateField:function(){this.$emit("update-categorical-field",this.name,this.selected)}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("b-row",{staticClass:"row"},[e("b-form-group",{staticClass:"col"},[e("label",{staticClass:"form-label",attrs:{"data-cy":"categorical-field-label"}},[t._v(t._s(t.name))])]),t._v(" "),t._t("control")],2),t._v(" "),e("v-select",{attrs:{"data-cy":"".concat(t.name,"-select"),options:t.sortedOptions,multiple:t.multiple,disabled:t.disabled},on:{input:t.updateField},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,o){"use strict";o.r(e);o(34),o(28),o(43),o(207),o(116),o(10),o(8);var n={props:{nodeName:{type:String,required:!0},datasetUuid:{type:String,required:!0},datasetName:{type:String,required:!0},datasetTotalSubjects:{type:Number,required:!0},numMatchingSubjects:{type:Number,default:null},imageModals:{type:Array,default:null},isChecked:{type:Boolean,default:!1}},emits:["update-downloads"],data:function(){return{titleExpanded:!1,modalities:{"http://purl.org/nidash/nidm#ArterialSpinLabeling":{name:"ASL",style:"background-color: rgb(69, 77, 87); color: white;"},"http://purl.org/nidash/nidm#DiffusionWeighted":{name:"DWI",style:"background-color: rgb(205, 92, 92); color: white;"},"http://purl.org/nidash/nidm#EEG":{name:"EEG",style:"background-color: rgb(216, 191, 216); color: white;"},"http://purl.org/nidash/nidm#FlowWeighted":{name:"Flow",style:"background-color: rgb(70, 130, 180); color: white;"},"http://purl.org/nidash/nidm#T1Weighted":{name:"T1",style:"background-color: rgb(189, 183, 107);"},"http://purl.org/nidash/nidm#T2Weighted":{name:"T2",style:"background-color: rgb(143, 188, 143); color: white;"}}}},computed:{sortedFilteredModalities:function(){return this.imageModals.filter((function(t){return null!==t})).sort()}},methods:{updateDownloads:function(t){this.$emit("update-downloads",this.datasetUuid,t.target.checked)},expandText:function(){this.titleExpanded=!this.titleExpanded}}},l=(o(389),o(80)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("b-list-group-item",[e("b-card",[e("b-card-body",[e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("b-row",{staticClass:"d-flex justify-content-center"},[e("b-col",{staticClass:"d-flex align-items-center card-checkbox",attrs:{cols:"1"}},[e("input",{ref:"checkbox",staticClass:"form-check-input dataset-checkbox",attrs:{type:"checkbox",value:"","data-cy":"card-".concat(t.datasetUuid,"-checkbox")},domProps:{checked:t.isChecked},on:{change:t.updateDownloads}})]),t._v(" "),e("b-col",{staticClass:"card-content",attrs:{cols:"11"}},[e("b-row",[e("h5",{staticClass:"card-title",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-dataset")}},[t._v("\n                  "+t._s(t.titleExpanded?t.datasetName:t.datasetName.slice(0,60))+"\n                  "),t.datasetName.length>60?e("span",{staticClass:"expander",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-expander")},on:{click:t.expandText}},[t._v(t._s(t.titleExpanded?"...less":"...more"))]):t._e()])]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("p",{staticClass:"card-text",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-subjects")}},[t._v("\n                    "+t._s("".concat(t.numMatchingSubjects," subjects /\n                  ").concat(t.datasetTotalSubjects," total subjects"))+"\n                  ")])])],1)],1)],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-row",[e("b-button-toolbar",{staticClass:"d-flex flex-column align-items-end"},[e("span",{staticClass:"text-right mb-2",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-node-name")}},[t._v(t._s("from ".concat(t.nodeName)))]),t._v(" "),e("b-button-group",{staticClass:"float-right"},t._l(t.sortedFilteredModalities,(function(o){return e("b-button",{key:o,staticClass:"btn card-modality",style:t.modalities[o].style,attrs:{type:"button","data-cy":"card-".concat(t.datasetUuid,"-modality-").concat(t.modalities[o].name)}},[t._v("\n                  "+t._s(t.modalities[o].name)+"\n                ")])})),1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,o){"use strict";o.r(e);var n={props:{identifier:{type:String,default:"participant-level"},downloadsIsEmpty:{type:Boolean,default:!0}},emits:["download-results"]},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:t.downloadsIsEmpty?"Select at least one dataset for download":"",expression:"downloadsIsEmpty ? 'Select at least one dataset for download' : ''",modifiers:{hover:!0,top:!0}}],attrs:{"data-cy":"download-"+t.identifier+"-results-button-tooltip"}},[e("b-button",{staticClass:"nb-button",attrs:{disabled:t.downloadsIsEmpty,"data-cy":"download-"+t.identifier+"-results-button"},on:{click:function(e){return t.$emit("download-results",t.identifier)}}},[e("b-icon",{attrs:{icon:"download","font-scale":"1"}}),t._v("\n    "+t._s("Download "+t.identifier+" results")+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=component.exports},395:function(t,e,o){"use strict";o.r(e);o(15),o(28),o(34);var n=o(52),l=(o(117),o(286),o(207),o(8),o(12),{props:{categoricalOptions:{type:Object,required:!0},isFederationApi:{type:Boolean,default:!0},availableNodes:{type:Array,default:function(){return[]}},selectedNodes:{type:Array,default:function(){return[]}}},emits:["update-response","select-nodes"],data:function(){return{minAge:null,maxAge:null,sex:null,diagnosis:null,is_control:!1,min_num_sessions:null,assessment:null,modality:null,isFetching:!1}},computed:{apiQueryURL:function(){var t=this.$config.apiQueryURL;return t.endsWith("/")?"".concat(t,"query/?"):"".concat(t,"/query/?")}},mounted:function(){Object.keys(this.categoricalOptions.Diagnosis).length<=1&&this.displayToast("Failed to retrieve diagnosis options"),Object.keys(this.categoricalOptions["Assessment tool"]).length<=1&&this.displayToast("Failed to retrieve assessment tool options")},methods:{updateField:function(t,input){switch(t){case"Min Age":this.minAge=input;break;case"Max Age":this.maxAge=input;break;case"Sex":this.sex=this.categoricalOptions[t][input];break;case"Diagnosis":this.diagnosis=this.categoricalOptions[t][input];break;case"Minimum number of sessions":this.min_num_sessions=input;break;case"Assessment tool":this.assessment=this.categoricalOptions[t][input];break;case"Imaging modality":this.modality=this.categoricalOptions[t][input]}},displayToast:function(t){this.$bvToast.toast(t,{appendToast:!0,autoHideDelay:"5000",noCloseButton:!0,solid:!0,title:"Error",variant:"danger"})},validateQueryForm:function(){this.minAge&&this.maxAge&&Number(this.minAge)>Number(this.maxAge)?this.displayToast("The value of maximum age field must be greater than or equal to the value of minimum age field"):this.submitQuery()},submitQuery:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isFetching=!0,o=t.apiQueryURL,t.isFederationApi&&t.selectedNodes.length>0&&t.selectedNodes.forEach((function(t){"All"!==t.NodeName&&(o+="&node_url=".concat(t.ApiURL))})),t.minAge&&(o+="min_age=".concat(t.minAge)),t.maxAge&&(o+="&max_age=".concat(t.maxAge)),t.sex&&(o+="&sex=".concat(t.sex)),t.diagnosis&&!t.is_control&&(o+="&diagnosis=".concat(t.diagnosis)),t.is_control&&(o+="&is_control=".concat(t.is_control)),t.min_num_sessions&&(o+="&min_num_sessions=".concat(t.min_num_sessions)),t.assessment&&(o+="&assessment=".concat(t.assessment)),t.modality&&(o+="&image_modal=".concat(t.modality)),e.prev=11,e.next=14,t.$axios.get(o);case 14:n=e.sent,t.$emit("update-response",n.data,null),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),t.$emit("update-response",null,"Oops, something went wrong");case 21:t.isFetching=!1;case 22:case"end":return e.stop()}}),e,null,[[11,18]])})))()}}}),r=o(80),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("b-col",{attrs:{cols:"12",md:"4",xl:"2"}},[e("b-row",[e("h5",[t._v("Query fields")])]),t._v(" "),e("b-row",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.validateQueryForm.apply(null,arguments)}}},[e("b-form-row",{staticClass:"row"},[t.isFederationApi?e("div",[e("label",{staticClass:"form-label"},[t._v("\n            Neurobagel Graph\n          ")]),t._v(" "),e("v-select",{attrs:{value:t.selectedNodes,"data-cy":"node-field",options:t.availableNodes,multiple:"",label:"NodeName"},on:{input:function(e){return t.$emit("selectNodes",e)}}})],1):t._e(),t._v(" "),e("b-form-group",{staticClass:"col-md-6"},[e("continuous-field",{attrs:{name:"Min Age","data-cy":"min-age-field",step:"any"},on:{"update-continuous-field":t.updateField}})],1),t._v(" "),e("b-form-group",{staticClass:"col-md-6"},[e("continuous-field",{attrs:{name:"Max Age","data-cy":"max-age-field",step:"any"},on:{"update-continuous-field":t.updateField}})],1)],1),t._v(" "),e("categorical-field",{attrs:{name:"Sex","data-cy":"sex-field","default-selected":Object.keys(t.categoricalOptions.Sex)[0],options:Object.keys(t.categoricalOptions.Sex)},on:{"update-categorical-field":t.updateField}}),t._v(" "),e("categorical-field",{attrs:{name:"Diagnosis","data-cy":"diagnosis-field","default-selected":"All",options:Object.keys(t.categoricalOptions.Diagnosis),disabled:t.is_control},on:{"update-categorical-field":t.updateField},scopedSlots:t._u([{key:"control",fn:function(){return[e("b-form-group",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.is_control,expression:"is_control"}],staticClass:"form-check-input",attrs:{"data-cy":"healthy-control-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.is_control)?t._i(t.is_control,null)>-1:t.is_control},on:{change:function(e){var o=t.is_control,n=e.target,l=!!n.checked;if(Array.isArray(o)){var r=t._i(o,null);n.checked?r<0&&(t.is_control=o.concat([null])):r>-1&&(t.is_control=o.slice(0,r).concat(o.slice(r+1)))}else t.is_control=l}}}),t._v(" "),e("label",{staticClass:"form-label"},[t._v("Healthy control")])])]},proxy:!0}])}),t._v(" "),e("continuous-field",{attrs:{min:"1",name:"Minimum number of sessions","data-cy":"min-num-sessions-field",step:"1"},on:{"update-continuous-field":t.updateField}}),t._v(" "),e("categorical-field",{attrs:{name:"Assessment tool","data-cy":"assessment-tool-field","default-selected":"All",options:Object.keys(t.categoricalOptions["Assessment tool"])},on:{"update-categorical-field":t.updateField}}),t._v(" "),e("categorical-field",{attrs:{name:"Imaging modality","data-cy":"modality-field","default-selected":Object.keys(t.categoricalOptions["Imaging modality"])[0],options:Object.keys(t.categoricalOptions["Imaging modality"])},on:{"update-categorical-field":t.updateField}}),t._v(" "),e("b-button",{staticClass:"nb-button",attrs:{type:"submit","data-cy":"submit-query"}},[t.isFetching?e("b-spinner",{attrs:{small:""}}):t._e(),t._v("\n        Submit Query\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContinuousField:o(391).default,CategoricalField:o(392).default})},396:function(t,e,o){"use strict";o.r(e);o(285),o(28),o(34),o(97),o(139),o(8),o(12),o(10),o(32),o(25),o(35);var n={props:{results:{type:Array,default:null},error:{type:String,default:null}},data:function(){return{selectAll:!1,downloads:[],code:"docker run -t -v $(pwd):/data neurobagel/dataget:latest /data/dataset-level-results.tsv /data/participant-level-results.tsv /data/output"}},computed:{displayResults:function(){return!Object.is(this.results,null)&&0!==this.results.length}},watch:{results:function(){this.selectAll=!1,this.downloads=[]}},methods:{summarizeStats:function(){var t=0,e=0;return this.results.forEach((function(o){t+=1,e+=o.num_matching_subjects})),"Summary stats: ".concat(t," datasets, ").concat(e," subjects")},updateDownloadsSelectAll:function(){var t=this;this.selectAll?this.results.forEach((function(e){t.downloads.includes(e.dataset_uuid)||t.downloads.push(e.dataset_uuid)})):this.downloads=[]},updateDownloads:function(t,e){e?this.downloads.push(t):this.downloads=this.downloads.filter((function(e){return e!==t}))},generateTSVString:function(t){var e=this,o=[],n=this.results.filter((function(t){return e.downloads.includes(t.dataset_uuid)}));if("participant-level"===t){var l=["DatasetID","SubjectID","Age","Sex","Diagnosis","Assessment","SessionID","SessionPath","NumSessions","Modality"].join("\t");o.push(l),n.forEach((function(t){t.records_protected?o.push([t.dataset_uuid,"protected","protected","protected","protected","protected","protected","protected","protected","protected"].join("\t")):t.subject_data.forEach((function(e){var n,l,r;o.push([t.dataset_uuid,e.sub_id,e.age,e.sex,null===(n=e.diagnosis)||void 0===n?void 0:n.join(", "),null===(l=e.assessment)||void 0===l?void 0:l.join(", "),e.session_id,e.session_file_path,e.num_sessions,null===(r=e.image_modal)||void 0===r?void 0:r.join(", ")].join("\t"))}))}))}else{var r=["DatasetID","DatasetName","PortalURI","NumMatchingSubjects","AvailableImageModalities"].join("\t");o.push(r),n.forEach((function(t){var e;o.push([t.dataset_uuid,t.dataset_name.replace("\n"," "),t.dataset_portal_uri,t.num_matching_subjects,null===(e=t.image_modals)||void 0===e?void 0:e.join(", ")].join("\t"))}))}return o.join("\n")},downloadResults:function(t){var element=document.createElement("a"),e=encodeURIComponent(this.generateTSVString(t));element.setAttribute("href","data:text/tab-separated-values;charset=utf-8,".concat(e)),element.setAttribute("download","".concat(t,"-results.tsv")),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element)}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("b-col",{attrs:{cols:"12",md:"8",xl:"10"}},[e("b-row",[e("h5",[t._v("Results")])]),t._v(" "),t.displayResults?t._e():e("b-row",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"d-flex align-items-center"},[Object.is(t.error,null)?Object.is(t.results,null)?e("h5",{staticStyle:{color:"gray"},attrs:{"data-cy":"default-view"}},[t._v("\n        Click 'Submit Query' for results\n      ")]):0===t.results.length?e("h5",{staticStyle:{color:"gray"},attrs:{"data-cy":"no-results-view"}},[t._v("\n        No results\n      ")]):t._e():e("h5",{staticStyle:{color:"gray"},attrs:{"data-cy":"error-view"}},[t._v("\n        "+t._s(t.error)+"\n      ")])])]),t._v(" "),t.displayResults?e("b-row",{attrs:{id:"query-controls"}},[e("b-col",{attrs:{cols:"7"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"","data-cy":"select-all"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,"")>-1:t.selectAll},on:{change:[function(e){var o=t.selectAll,n=e.target,l=!!n.checked;if(Array.isArray(o)){var r=t._i(o,"");n.checked?r<0&&(t.selectAll=o.concat([""])):r>-1&&(t.selectAll=o.slice(0,r).concat(o.slice(r+1)))}else t.selectAll=l},t.updateDownloadsSelectAll]}}),t._v(" "),e("label",{staticClass:"form-label",attrs:{for:"dataset-checkall"}},[t._v("Select all datasets")])]),t._v(" "),e("b-col",{attrs:{cols:"5"}},[e("div",{attrs:{id:"summary-stats"}},[e("p",{attrs:{"data-cy":"summary-stats"}},[t._v("\n          "+t._s(t.summarizeStats())+"\n        ")])])])],1):t._e(),t._v(" "),t.displayResults?e("b-row",{staticClass:"d-flex justify-content-center",attrs:{id:"card-listbox"}},[e("b-list-group",{attrs:{id:"results-list-group"}},t._l(t.results,(function(o){return e("result-card",{key:o.dataset_uuid,attrs:{"node-name":o.node_name,"dataset-uuid":o.dataset_uuid,"dataset-name":o.dataset_name,"dataset-total-subjects":o.dataset_total_subjects,"num-matching-subjects":o.num_matching_subjects,"image-modals":o.image_modals,"is-checked":t.selectAll||t.downloads.includes(o.dataset_uuid),"data-cy":o.dataset_uuid},on:{"update-downloads":t.updateDownloads}})})),1)],1):t._e(),t._v(" "),t.displayResults?e("b-row",{staticStyle:{"margin-top":"1em"}},[e("b-col",{attrs:{cols:"5"}},[e("div",{staticClass:"d-flex justify-content-start"},[e("b-button",{staticClass:"nb-button",attrs:{"data-cy":"example-usage-button"},on:{click:function(e){var o;null===(o=t.$modal)||void 0===o||o.show("example-usage-modal")}}},[t._v("\n          How to get the data\n        ")]),t._v(" "),e("modal",{attrs:{name:"example-usage-modal",height:400,width:650,adaptive:!0,resizable:!0,reset:!0,"data-cy":"example-usage-modal"}},[e("div",{staticStyle:{padding:"1em"}},[e("h4",[t._v("Example usage")]),t._v(" "),e("p",[t._v("Please follow the steps below")]),t._v(" "),e("ol",[e("li",[t._v("Select at least one dataset")]),t._v(" "),e("li",[t._v("Download the participant-level and dataset-level results files")]),t._v(" "),e("li",[t._v("Change directory to the location of the downloaded files")]),t._v(" "),e("li",[t._v("Copy and run the following command:")])]),t._v(" "),e("code",{staticClass:"code"},[t._v(t._s(t.code))]),t._v(" "),e("p",[t._v("\n              The downloaded data will be saved in a directory called\n              "),e("code",[t._v("output")]),t._v(" in the current directory.\n              Note that the output directory will be created\n              if it does not exist already.\n            ")]),t._v(" "),e("span",[t._v("⚠️ The command for automatically getting the data currently only\n              applies to datasets available through datalad.")])])])],1)]),t._v(" "),e("b-col",{attrs:{cols:"7"}},[e("div",{staticClass:"d-flex justify-content-end download-buttons-div"},[e("download-results-button",{attrs:{identifier:"participant-level","downloads-is-empty":0===t.downloads.length,"data-cy":"download-participant-level-results"},on:{"download-results":t.downloadResults}}),t._v(" "),e("download-results-button",{attrs:{identifier:"dataset-level","downloads-is-empty":0===t.downloads.length,"data-cy":"download-dataset-level-results"},on:{"download-results":t.downloadResults}})],1)])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResultCard:o(393).default,DownloadResultsButton:o(394).default})},397:function(t,e,o){"use strict";o.r(e);o(15),o(13),o(16),o(12),o(17);var n=o(39),l=o(3),r=o(52);o(117),o(8),o(30),o(97),o(139),o(10);function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){Object(l.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m={data:function(){return{availableNodes:[],selectedNodes:[],results:null,error:null,categoricalOptions:{Sex:{All:null,male:"snomed:248153007",female:"snomed:248152002",other:"snomed:32570681000036106"},Diagnosis:{},"Assessment tool":{},"Imaging modality":{All:null,"Arterial spin labeling":"nidm:ArterialSpinLabeling","Diffusion weighted":"nidm:DiffusionWeighted","Flow weighted":"nidm:FlowWeighted","T1 weighted":"nidm:T1Weighted","T2 weighted":"nidm:T2Weighted"}}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n,r,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat(t.$config.apiQueryURL,"attributes/nb:Diagnosis"));case 2:return o=e.sent,(n=o.data["nb:Diagnosis"].reduce((function(t,e){return c(c({},t),{},Object(l.a)({},e.Label,e.TermURL))}),{})).All=null,t.categoricalOptions.Diagnosis=n,e.next=8,t.$axios.get("".concat(t.$config.apiQueryURL,"attributes/nb:Assessment"));case 8:if(r=e.sent,(d=r.data["nb:Assessment"].reduce((function(t,e){return c(c({},t),{},Object(l.a)({},e.Label,e.TermURL))}),{})).All=null,t.categoricalOptions["Assessment tool"]=d,!t.isFederationApi){e.next=18;break}return e.next=15,t.$axios.get("".concat(t.$config.apiQueryURL,"nodes/"));case 15:m=e.sent,t.availableNodes=m.data,t.availableNodes.push({NodeName:"All",ApiURL:void 0});case 18:case"end":return e.stop()}}),e)})))()},computed:{isFederationApi:function(){return void 0===this.$config.isFederationAPI||this.$config.isFederationAPI}},watch:{selectedNodes:function(t){t.length>0?this.$router.push({path:this.$route.path,query:c(c({},this.$route.query),{},{node:t.map((function(t){return t.NodeName}))})}):0===t.length&&this.selectTheAllNode()}},mounted:function(){var t=this,e=this.$route.query.node;if(void 0!==e){var o=this.availableNodes.map((function(t){return t.NodeName}));"string"==typeof e?"All"===e?this.selectTheAllNode():this.selectedNodes=o.includes(e)?[{NodeName:e,ApiURL:this.availableNodes[o.indexOf(e)].ApiURL}]:[]:"object"===Object(n.a)(e)&&(this.selectedNodes=e.filter((function(t){return o.includes(t)})).map((function(e){return{NodeName:e,ApiURL:t.availableNodes[o.indexOf(e)].ApiURL}})))}0===this.selectedNodes.length&&this.selectTheAllNode()},methods:{updateResponse:function(t,e){this.results=t,this.error=e},selectNodes:function(t){this.selectedNodes=t},selectTheAllNode:function(){this.selectedNodes=[{NodeName:"All",ApiURL:void 0}]}}},f=o(80),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"mx-auto"},[e("query-form",{attrs:{"categorical-options":t.categoricalOptions,"is-federation-api":t.isFederationApi,"selected-nodes":t.selectedNodes,"available-nodes":t.availableNodes},on:{"update-response":t.updateResponse,selectNodes:t.selectNodes}}),t._v(" "),e("results-container",{attrs:{results:t.results,error:t.error}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{QueryForm:o(395).default,ResultsContainer:o(396).default})}}]);