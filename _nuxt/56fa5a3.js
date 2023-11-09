(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3,4,5,6,7],{385:function(t,e,o){"use strict";o.r(e);o(43);var n={props:{min:{type:String,default:"0"},name:{type:String,required:!0},step:{type:String,default:"1"}},emits:["update-continuous-field"],methods:{updateField:function(t){this.$emit("update-continuous-field",this.name,t)}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{"data-cy":"continuous-field-label"}},[t._v(t._s(t.name))]),t._v(" "),e("b-form-input",{staticClass:"numberinput form-control",attrs:{"data-cy":"".concat(t.name,"-continuous-field-input"),type:"number",step:t.step,min:t.min},on:{input:t.updateField}})],1)}),[],!1,null,null,null);e.default=component.exports},386:function(t,e,o){"use strict";o.r(e);o(43);var n={props:{name:{type:String,required:!0},defaultSelected:{type:String,default:null},options:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1}},emits:["update-categorical-field"],data:function(){return{selected:this.defaultSelected}},methods:{updateField:function(){this.$emit("update-categorical-field",this.name,this.selected)}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("b-row",{staticClass:"row"},[e("b-form-group",{staticClass:"col"},[e("label",{staticClass:"form-label",attrs:{"data-cy":"categorical-field-label"}},[t._v(t._s(t.name))])]),t._v(" "),t._t("control")],2),t._v(" "),e("v-select",{attrs:{"data-cy":"".concat(t.name,"-select"),options:t.options,disabled:t.disabled},on:{input:t.updateField},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,o){"use strict";o.r(e);o(28),o(43),o(207),o(116);var n={props:{datasetUuid:{type:String,required:!0},datasetName:{type:String,required:!0},numMatchingSubjects:{type:Number,default:null},imageModals:{type:Array,default:null},isChecked:{type:Boolean,default:!1}},emits:["update-downloads"],data:function(){return{modalities:{"http://purl.org/nidash/nidm#ArterialSpinLabeling":{name:"ASL",style:"background-color: rgb(69, 77, 87); color: white;"},"http://purl.org/nidash/nidm#DiffusionWeighted":{name:"DWI",style:"background-color: rgb(205, 92, 92); color: white;"},"http://purl.org/nidash/nidm#EEG":{name:"EEG",style:"background-color: rgb(216, 191, 216); color: white;"},"http://purl.org/nidash/nidm#FlowWeighted":{name:"Flow",style:"background-color: rgb(70, 130, 180); color: white;"},"http://purl.org/nidash/nidm#T1Weighted":{name:"T1",style:"background-color: rgb(189, 183, 107);"},"http://purl.org/nidash/nidm#T2Weighted":{name:"T2",style:"background-color: rgb(143, 188, 143); color: white;"}}}},computed:{sortedModalities:function(){var t=this.imageModals;return t.sort()}},methods:{updateDownloads:function(t){this.$emit("update-downloads",this.datasetUuid,t.target.checked)}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("b-list-group-item",[e("b-card",[e("b-card-body",[e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("b-row",{staticClass:"d-flex justify-content-center"},[e("b-col",{staticClass:"d-flex align-items-center card-checkbox",attrs:{cols:"1"}},[e("input",{ref:"checkbox",staticClass:"form-check-input dataset-checkbox",attrs:{type:"checkbox",value:"","data-cy":"card-".concat(t.datasetUuid,"-checkbox")},domProps:{checked:t.isChecked},on:{change:t.updateDownloads}})]),t._v(" "),e("b-col",{staticClass:"card-content",attrs:{cols:"11"}},[e("b-row",[e("h5",{staticClass:"card-title",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-dataset")}},[t._v("\n                  "+t._s(t.datasetName)+"\n                ")])]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("p",{staticClass:"card-text",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-subjects")}},[t._v("\n                    "+t._s("".concat(t.numMatchingSubjects," subjects"))+"\n                  ")])])],1)],1)],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-row",[e("b-button-toolbar",{staticClass:"d-flex justify-content-end"},t._l(t.sortedModalities,(function(o){return e("b-button-group",{key:o,staticClass:"mr-2"},[e("b-button",{staticClass:"btn card-modality",style:t.modalities[o].style,attrs:{type:"button","data-cy":"card-".concat(t.datasetUuid,"-").concat(t.modalities[o].name)}},[t._v("\n                  "+t._s(t.modalities[o].name)+"\n                ")])],1)})),1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},388:function(t,e,o){"use strict";o.r(e);var n={props:{identifier:{type:String,default:"participant-level"},downloadsIsEmpty:{type:Boolean,default:!0}},emits:["download-results"]},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:t.downloadsIsEmpty?"Select at least one dataset for download":"",expression:"downloadsIsEmpty ? 'Select at least one dataset for download' : ''",modifiers:{hover:!0,top:!0}}],attrs:{"data-cy":"download-"+t.identifier+"-results-button-tooltip"}},[e("b-button",{staticClass:"nb-button",attrs:{disabled:t.downloadsIsEmpty,"data-cy":"download-"+t.identifier+"-results-button"},on:{click:function(e){return t.$emit("download-results",t.identifier)}}},[e("b-icon",{attrs:{icon:"download","font-scale":"1"}}),t._v("\n    "+t._s("Download "+t.identifier+" results")+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,o){"use strict";o.r(e);o(15),o(28),o(34);var n=o(52),l=(o(117),o(207),{props:{categoricalOptions:{type:Object,required:!0}},emits:["update-response"],data:function(){return{minAge:null,maxAge:null,sex:null,diagnosis:null,is_control:!1,min_num_sessions:null,assessment:null,modality:null,isFetching:!1}},methods:{updateField:function(t,input){switch(t){case"Min Age":this.minAge=input;break;case"Max Age":this.maxAge=input;break;case"Sex":this.sex=this.categoricalOptions[t][input];break;case"Diagnosis":this.diagnosis=this.categoricalOptions[t][input];break;case"Minimum number of sessions":this.min_num_sessions=input;break;case"Assessment tool":this.assessment=this.categoricalOptions[t][input];break;case"Imaging modality":this.modality=this.categoricalOptions[t][input]}},displayToast:function(t){this.$bvToast.toast(t,{appendToast:!0,autoHideDelay:"5000",noCloseButton:!0,solid:!0,title:"Error",variant:"danger"})},validateQueryForm:function(){this.minAge&&this.maxAge&&Number(this.minAge)>Number(this.maxAge)?this.displayToast("The value of maximum age field must be greater than or equal to the value of minimum age field"):this.submitQuery()},submitQuery:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isFetching=!0,o="".concat(t.$config.apiQueryURL,"query/?"),t.minAge&&(o+="min_age=".concat(t.minAge)),t.maxAge&&(o+="&max_age=".concat(t.maxAge)),t.sex&&(o+="&sex=".concat(t.sex)),t.diagnosis&&!t.is_control&&(o+="&diagnosis=".concat(t.diagnosis)),t.is_control&&(o+="&is_control=".concat(t.is_control)),t.min_num_sessions&&(o+="&min_num_sessions=".concat(t.min_num_sessions)),t.assessment&&(o+="&assessment=".concat(t.assessment)),t.modality&&(o+="&image_modal=".concat(t.modality)),e.prev=10,e.next=13,t.$axios.get(o);case 13:n=e.sent,t.$emit("update-response",n.data,null),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),t.$emit("update-response",null,"Oops, something went wrong");case 20:t.isFetching=!1;case 21:case"end":return e.stop()}}),e,null,[[10,17]])})))()}}}),r=o(80),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("b-col",{attrs:{cols:"12",md:"4",xl:"2"}},[e("b-row",[e("h5",[t._v("Query fields")])]),t._v(" "),e("b-row",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.validateQueryForm.apply(null,arguments)}}},[e("b-form-row",{staticClass:"row"},[e("b-form-group",{staticClass:"col-md-6"},[e("continuous-field",{attrs:{name:"Min Age","data-cy":"min-age-field",step:"any"},on:{"update-continuous-field":t.updateField}})],1),t._v(" "),e("b-form-group",{staticClass:"col-md-6"},[e("continuous-field",{attrs:{name:"Max Age","data-cy":"max-age-field",step:"any"},on:{"update-continuous-field":t.updateField}})],1)],1),t._v(" "),e("categorical-field",{attrs:{name:"Sex","data-cy":"sex-field","default-selected":Object.keys(t.categoricalOptions.Sex)[0],options:Object.keys(t.categoricalOptions.Sex)},on:{"update-categorical-field":t.updateField}}),t._v(" "),e("categorical-field",{attrs:{name:"Diagnosis","data-cy":"diagnosis-field","default-selected":Object.keys(t.categoricalOptions.Diagnosis)[0],options:Object.keys(t.categoricalOptions.Diagnosis),disabled:t.is_control},on:{"update-categorical-field":t.updateField},scopedSlots:t._u([{key:"control",fn:function(){return[e("b-form-group",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.is_control,expression:"is_control"}],staticClass:"form-check-input",attrs:{"data-cy":"healthy-control-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.is_control)?t._i(t.is_control,null)>-1:t.is_control},on:{change:function(e){var o=t.is_control,n=e.target,l=!!n.checked;if(Array.isArray(o)){var r=t._i(o,null);n.checked?r<0&&(t.is_control=o.concat([null])):r>-1&&(t.is_control=o.slice(0,r).concat(o.slice(r+1)))}else t.is_control=l}}}),t._v(" "),e("label",{staticClass:"form-label"},[t._v("Healthy control")])])]},proxy:!0}])}),t._v(" "),e("continuous-field",{attrs:{min:"1",name:"Minimum number of sessions","data-cy":"min-num-sessions-field",step:"1"},on:{"update-continuous-field":t.updateField}}),t._v(" "),e("categorical-field",{attrs:{name:"Assessment tool","data-cy":"assessment-tool-field","default-selected":Object.keys(t.categoricalOptions["Assessment tool"])[0],options:Object.keys(t.categoricalOptions["Assessment tool"])},on:{"update-categorical-field":t.updateField}}),t._v(" "),e("categorical-field",{attrs:{name:"Imaging modality","data-cy":"modality-field","default-selected":Object.keys(t.categoricalOptions["Imaging modality"])[0],options:Object.keys(t.categoricalOptions["Imaging modality"])},on:{"update-categorical-field":t.updateField}}),t._v(" "),e("b-button",{staticClass:"nb-button",attrs:{type:"submit","data-cy":"submit-query"}},[t.isFetching?e("b-spinner",{attrs:{small:""}}):t._e(),t._v("\n        Submit Query\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContinuousField:o(385).default,CategoricalField:o(386).default})},390:function(t,e,o){"use strict";o.r(e);o(284),o(28),o(34),o(97),o(139),o(8),o(12),o(10),o(32),o(25),o(35);var n={props:{results:{type:Array,default:null},error:{type:String,default:null}},data:function(){return{selectAll:!1,downloads:[],code:"docker run -t -v $(pwd):/data neurobagel/dataget:latest /data/dataset-level-results.tsv /data/participant-level-results.tsv /data/output"}},computed:{displayResults:function(){return!Object.is(this.results,null)&&0!==this.results.length}},watch:{results:function(){this.selectAll=!1,this.downloads=[]}},methods:{summarizeStats:function(){var t=0,e=0;return this.results.forEach((function(o){t+=1,e+=o.num_matching_subjects})),"Summary stats: ".concat(t," datasets, ").concat(e," subjects")},updateDownloadsSelectAll:function(){var t=this;this.selectAll?this.results.forEach((function(e){t.downloads.includes(e.dataset_uuid)||t.downloads.push(e.dataset_uuid)})):this.downloads=[]},updateDownloads:function(t,e){e?this.downloads.push(t):this.downloads=this.downloads.filter((function(e){return e!==t}))},generateTSVString:function(t){var e=this,o=[],n=this.results.filter((function(t){return e.downloads.includes(t.dataset_uuid)}));if("participant-level"===t){var l=["DatasetID","SubjectID","Age","Sex","Diagnosis","Assessment","SessionID","SessionPath","NumSessions","Modality"].join("\t");o.push(l),n.forEach((function(t){t.records_protected?o.push([t.dataset_uuid,"protected","protected","protected","protected","protected","protected","protected","protected","protected"].join("\t")):t.subject_data.forEach((function(e){var n,l,r;o.push([t.dataset_uuid,e.sub_id,e.age,e.sex,null===(n=e.diagnosis)||void 0===n?void 0:n.join(", "),null===(l=e.assessment)||void 0===l?void 0:l.join(", "),e.session_id,e.session_file_path,e.num_sessions,null===(r=e.image_modal)||void 0===r?void 0:r.join(", ")].join("\t"))}))}))}else{var r=["DatasetID","DatasetName","PortalURI","NumMatchingSubjects","AvailableImageModalities"].join("\t");o.push(r),n.forEach((function(t){var e;o.push([t.dataset_uuid,t.dataset_name.replace("\n"," "),t.dataset_portal_uri,t.num_matching_subjects,null===(e=t.image_modals)||void 0===e?void 0:e.join(", ")].join("\t"))}))}return o.join("\n")},downloadResults:function(t){var element=document.createElement("a"),e=encodeURIComponent(this.generateTSVString(t));element.setAttribute("href","data:text/tab-separated-values;charset=utf-8,".concat(e)),element.setAttribute("download","".concat(t,"-results.tsv")),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element)}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("b-col",{attrs:{cols:"12",md:"8",xl:"10"}},[e("b-row",[e("h5",[t._v("Results")])]),t._v(" "),t.displayResults?t._e():e("b-row",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"d-flex align-items-center"},[Object.is(t.error,null)?Object.is(t.results,null)?e("h5",{staticStyle:{color:"gray"},attrs:{"data-cy":"default-view"}},[t._v("\n        Click 'Submit Query' for results\n      ")]):0===t.results.length?e("h5",{staticStyle:{color:"gray"},attrs:{"data-cy":"no-results-view"}},[t._v("\n        No results\n      ")]):t._e():e("h5",{staticStyle:{color:"gray"},attrs:{"data-cy":"error-view"}},[t._v("\n        "+t._s(t.error)+"\n      ")])])]),t._v(" "),t.displayResults?e("b-row",{attrs:{id:"query-controls"}},[e("b-col",{attrs:{cols:"7"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"","data-cy":"select-all"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,"")>-1:t.selectAll},on:{change:[function(e){var o=t.selectAll,n=e.target,l=!!n.checked;if(Array.isArray(o)){var r=t._i(o,"");n.checked?r<0&&(t.selectAll=o.concat([""])):r>-1&&(t.selectAll=o.slice(0,r).concat(o.slice(r+1)))}else t.selectAll=l},t.updateDownloadsSelectAll]}}),t._v(" "),e("label",{staticClass:"form-label",attrs:{for:"dataset-checkall"}},[t._v("Select all datasets")])]),t._v(" "),e("b-col",{attrs:{cols:"5"}},[e("div",{attrs:{id:"summary-stats"}},[e("p",{attrs:{"data-cy":"summary-stats"}},[t._v("\n          "+t._s(t.summarizeStats())+"\n        ")])])])],1):t._e(),t._v(" "),t.displayResults?e("b-row",{staticClass:"d-flex justify-content-center",attrs:{id:"card-listbox"}},[e("b-list-group",{attrs:{id:"results-list-group"}},t._l(t.results,(function(o){return e("result-card",{key:o.dataset_uuid,attrs:{"dataset-uuid":o.dataset_uuid,"dataset-name":o.dataset_name,"num-matching-subjects":o.num_matching_subjects,"image-modals":o.image_modals,"is-checked":t.selectAll||t.downloads.includes(o.dataset_uuid),"data-cy":o.dataset_uuid},on:{"update-downloads":t.updateDownloads}})})),1)],1):t._e(),t._v(" "),t.displayResults?e("b-row",{staticStyle:{"margin-top":"1em"}},[e("b-col",{attrs:{cols:"5"}},[e("div",{staticClass:"d-flex justify-content-start"},[e("b-button",{staticClass:"nb-button",attrs:{"data-cy":"example-usage-button"},on:{click:function(e){var o;null===(o=t.$modal)||void 0===o||o.show("example-usage-modal")}}},[t._v("\n          How to get the data\n        ")]),t._v(" "),e("modal",{attrs:{name:"example-usage-modal",height:400,width:650,adaptive:!0,resizable:!0,reset:!0,"data-cy":"example-usage-modal"}},[e("div",{staticStyle:{padding:"1em"}},[e("h4",[t._v("Example usage")]),t._v(" "),e("p",[t._v("Please follow the steps below")]),t._v(" "),e("ol",[e("li",[t._v("Select at least one dataset")]),t._v(" "),e("li",[t._v("Download the participant-level and dataset-level results files")]),t._v(" "),e("li",[t._v("Change directory to the location of the downloaded files")]),t._v(" "),e("li",[t._v("Copy and run the following command:")])]),t._v(" "),e("code",{staticClass:"code"},[t._v(t._s(t.code))]),t._v(" "),e("p",[t._v("\n              The downloaded data will be saved in a directory called\n              "),e("code",[t._v("output")]),t._v(" in the current directory.\n              Note that the output directory will be created\n              if it does not exist already.\n            ")]),t._v(" "),e("span",[t._v("⚠️ The command for automatically getting the data currently only\n              applies to datasets available through datalad.")])])])],1)]),t._v(" "),e("b-col",{attrs:{cols:"7"}},[e("div",{staticClass:"d-flex justify-content-end download-buttons-div"},[e("download-results-button",{attrs:{identifier:"participant-level","downloads-is-empty":0===t.downloads.length,"data-cy":"download-participant-level-results"},on:{"download-results":t.downloadResults}}),t._v(" "),e("download-results-button",{attrs:{identifier:"dataset-level","downloads-is-empty":0===t.downloads.length,"data-cy":"download-dataset-level-results"},on:{"download-results":t.downloadResults}})],1)])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResultCard:o(387).default,DownloadResultsButton:o(388).default})},391:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{results:null,error:null,categoricalOptions:{Sex:{All:null,male:"snomed:248153007",female:"snomed:248152002",other:"snomed:32570681000036106"},Diagnosis:{All:null,Aneurysm:"snomed:432119003",Aphasia:"snomed:87486003","Attention deficit hyperactivity disorder":"snomed:406506008","Autism spectrum disorder":"snomed:35919005","Bipolar disorder":"snomed:13746004","Depressive disorder":"snomed:35489007",Dyslexia:"snomed:59770006",Fibromyalgia:"snomed:203082005","Major depressive disorder":"snomed:370143000","Mild depression":"snomed:310495003","Moderate depression":"snomed:310496002","Obsessive-compulsive disorder":"snomed:191736004",Overweight:"snomed:238131007","Parkinson's disease":"snomed:49049000","Progressive supranuclear palsy":"snomed:192976002","Separation anxiety":"snomed:126943008",Schizophrenia:"snomed:58214004","Specific spelling disorder":"snomed:268738002","Traumatic brain injury":"snomed:127295002","Visual impairment":"snomed:397540003"},"Assessment tool":{All:null,"balloon analogue risk task":"cogatlas:trm_4d559bcd67c18","Barratt Impulsiveness Scale":"cogatlas:trm_55a6a8e81b7f4","behavioral approach/inhibition systems":"cogatlas:trm_56a9137d9dce1","big five questionnaire":"cogatlas:trm_523f5c17d7edb","breath-holding":"cogatlas:trm_4c898a680e424","Center for Epidemiologic Studies Depression Scale":"cogatlas:trm_5258346e72223","Comprehensive Test of Phonological Processing":"cogatlas:trm_526027c99b726","Continuous Performance Task":"cogatlas:trm_57c0c34e61fdf",DOSPERT:"cogatlas:trm_5696abecf2569","Edinburgh Handedness Inventory":"cogatlas:tsk_4a57abb949a41","Emotion Regulation Questionnaire":"cogatlas:trm_56bbead1a7ed4","Eriksen flanker task":"cogatlas:tsk_4a57abb949a4f","letter number sequencing":"cogatlas:trm_4c3e0a9576c3b","Kaufman Brief Intelligence Test":"cogatlas:trm_529ce6ecb35f8","Kirby Delay Discounting Task":"cogatlas:trm_56bbee951f161","Mini Mental State Examination":"cogatlas:tsk_4a57abb949bb1","Montreal Cognitive Assessment":"cogatlas:trm_57964b8a66aed","Motor Screening Task":"cogatlas:trm_50f72e93ea9e3","multisource interference task":"cogatlas:trm_4f2419c4a1646","National Adult Reading Test":"cogatlas:trm_5798f5c57048d","n-back task":"cogatlas:tsk_4a57abb949bcd","paired associate learning":"cogatlas:trm_4da88a2a63d97","paired associate recall":"cogatlas:trm_4c8991e6e8597","Peabody Picture Vocabulary Test":"cogatlas:trm_5266bebe14d2e","PEBL Perceptual Vigilance Task":"cogatlas:trm_50b55d8a6da00","Positive and Negative Affect Scale ":"cogatlas:tsk_4a57abb949d09","Rapid Visual Information Processing":"cogatlas:trm_50f8516279419","Raven's Advanced Progressive Matrices":"cogatlas:trm_4f24211a03b07","Reaction Time":"cogatlas:trm_50f84e8ab7af8","Scale for the Assessment of Negative Symptoms":"cogatlas:trm_55a6a36d9c3f9","Scale for the Assessment of Positive Symptoms":"cogatlas:trm_55a6cffbcb5f7","spatial working memory task":"cogatlas:trm_4f2453b806fe1","Stockings of Cambridge Task":"cogatlas:trm_4da890cf99b9e","stop signal task":"cogatlas:tsk_4a57abb949e1a","Stroop task":"cogatlas:tsk_4a57abb949e27","Structured Clinical Interview for Diagnostic and Statistical Manual of Mental Disorders (DSM-IV)":"cogatlas:tsk_4a57abb949e35","theory of mind task":"cogatlas:trm_4c8a8467304e2","Unified Parkinson's Disease Rating Scale":"cogatlas:tsk_4a57abb949ece","UPPS-P Impulsivity Scale":"cogatlas:trm_56a91a92043bc","Wechsler Abbreviated Scale of Intelligence":"cogatlas:trm_4b94affc43245","Wechsler Adult Intelligence Scale - Revised":"cogatlas:tsk_4a57abb949f12","Wechsler Memory Scale Fourth Edition":"cogatlas:trm_4b94b12bf0eb2","Zuckerman Sensation Seeking Scale":"cogatlas:trm_56abebfe9aaa3"},"Imaging modality":{All:null,"Arterial spin labeling":"nidm:ArterialSpinLabeling","Diffusion weighted":"nidm:DiffusionWeighted","Flow weighted":"nidm:FlowWeighted","T1 weighted":"nidm:T1Weighted","T2 weighted":"nidm:T2Weighted"}}}},methods:{updateResponse:function(t,e){this.results=t,this.error=e}}},l=o(80),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"mx-auto"},[e("query-form",{attrs:{"categorical-options":t.categoricalOptions},on:{"update-response":t.updateResponse}}),t._v(" "),e("results-container",{attrs:{results:t.results,error:t.error}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{QueryForm:o(389).default,ResultsContainer:o(390).default})}}]);