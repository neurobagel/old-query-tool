(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,6],{378:function(t,e,l){"use strict";l.r(e);l(28),l(43),l(205);var o={props:{datasetName:{type:String,required:!0},numMatchingSubjects:{type:Number,default:null},imageModals:{type:Array,default:null},selectAll:{type:Boolean,default:!1}},emits:["update-downloads"],data:function(){return{modalities:{"http://purl.org/nidash/nidm#T1Weighted":{name:"T1",style:"background-color: rgb(189, 183, 107);"},"http://purl.org/nidash/nidm#T2Weighted":{name:"T2",style:"background-color: rgb(143, 188, 143); color: white;"},"http://purl.org/nidash/nidm#DiffusionWeighted":{name:"DWI",style:"background-color: rgb(205, 92, 92); color: white;"},"http://purl.org/nidash/nidm#FlowWeighted":{name:"Flow",style:"background-color: rgb(70, 130, 180); color: white;"},"http://purl.org/nidash/nidm#EEG":{name:"EEG",style:"background-color: rgb(216, 191, 216); color: white;"}}}},methods:{updateDownloads:function(){this.$emit("update-downloads",this.datasetName,this.$refs.checkbox.checked)}}},n=l(92),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("b-list-group-item",[e("b-card",[e("b-card-body",[e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("b-row",{staticClass:"d-flex justify-content-center"},[e("b-col",{staticClass:"d-flex align-items-center card-checkbox",attrs:{cols:"1"}},[e("input",{ref:"checkbox",staticClass:"form-check-input dataset-checkbox",attrs:{type:"checkbox",value:"","data-cy":"card-".concat(t.datasetName,"-checkbox")},domProps:{checked:t.selectAll},on:{change:t.updateDownloads}})]),t._v(" "),e("b-col",{staticClass:"card-content",attrs:{cols:"11"}},[e("b-row",[e("h5",{staticClass:"card-title",attrs:{"data-cy":"card-".concat(t.datasetName,"-dataset")}},[t._v("\n                  "+t._s(t.datasetName)+"\n                ")])]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("p",{staticClass:"card-text",attrs:{"data-cy":"card-".concat(t.datasetName,"-subjects")}},[t._v("\n                    "+t._s("".concat(t.numMatchingSubjects," subjects"))+"\n                  ")])])],1)],1)],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-row",[e("b-button-toolbar",{staticClass:"d-flex justify-content-end"},t._l(t.imageModals,(function(l){return e("b-button-group",{key:l,staticClass:"mr-2"},[e("b-button",{staticClass:"btn card-modality",style:t.modalities[l].style,attrs:{type:"button","data-cy":"card-".concat(t.datasetName,"-").concat(t.modalities[l].name)}},[t._v("\n                  "+t._s(t.modalities[l].name)+"\n                ")])],1)})),1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},379:function(t,e,l){"use strict";l.r(e);l(282),l(8),l(12),l(10),l(93),l(139),l(31);var o={props:{results:{type:Array,default:function(){return[]}},downloads:{type:Array,default:function(){return[]}}},computed:{displayDownloadResultsButton:function(){return!Object.is(this.results,null)&&0!==this.results.length}},methods:{generateCSVString:function(){var t=this,e=[["dataset","number of matching subjects","subject file paths"]];return this.results.filter((function(e){return t.downloads.includes(e.dataset_name)})).forEach((function(t){t.subject_file_paths.forEach((function(path){e.push([t.dataset_name,t.num_matching_subjects,path].join(","))}))})),e.join("\n")},downloadResults:function(){var element=document.createElement("a");element.setAttribute("href","data:text/csv;charset=utf-8,\n      ".concat(encodeURIComponent(this.generateCSVString()))),element.setAttribute("download","results.csv"),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element)}}},n=l(92),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return t.displayDownloadResultsButton?e("b-col",{staticClass:"d-flex flex-row-reverse",staticStyle:{"margin-top":"1em"}},[e("b-row",{staticClass:"mr-auto"},[e("b-button",{attrs:{id:"download-results-button",disabled:0===t.downloads.length,"data-cy":"download-results-button"},on:{click:t.downloadResults}},[e("b-icon",{attrs:{icon:"download","font-scale":"1"}}),t._v("\n      Download Results\n    ")],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,l){"use strict";l.r(e);l(282),l(28),l(34),l(8),l(12),l(93),l(139),l(10);var o={props:{results:{type:Array,default:null},error:{type:String,default:null}},data:function(){return{selectAll:!1,downloads:[]}},computed:{displayResults:function(){return!Object.is(this.results,null)&&0!==this.results.length}},methods:{summarizeStats:function(){var t=0,e=0;return this.results.forEach((function(l){t+=1,e+=l.num_matching_subjects})),"Summary stats: ".concat(t," datasets, ").concat(e," subjects")},UpdateDownloadsSelectAll:function(){var t=this;this.selectAll?this.results.forEach((function(e){t.downloads.includes(e.dataset_name)||t.downloads.push(e.dataset_name)})):this.downloads=[]},updateDownloads:function(t,e){e?this.downloads.push(t):this.downloads=this.downloads.filter((function(e){return e!==t}))}}},n=l(92),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("b-col",{attrs:{cols:"10"}},[e("b-row",[e("h2",[t._v("Results")])]),t._v(" "),t.displayResults?t._e():e("b-row",{staticClass:"d-flex justify-content-center"},[e("div",{staticClass:"d-flex align-items-center"},[Object.is(t.error,null)?Object.is(t.results,null)?e("h3",{staticStyle:{color:"gray"},attrs:{"data-cy":"default-view"}},[t._v("\n        Click 'Query Metadata' for results\n      ")]):0===t.results.length?e("h3",{staticStyle:{color:"gray"},attrs:{"data-cy":"no-results-view"}},[t._v("\n        No results\n      ")]):t._e():e("h3",{staticStyle:{color:"gray"},attrs:{"data-cy":"error-view"}},[t._v("\n        "+t._s(t.error)+"\n      ")])])]),t._v(" "),t.displayResults?e("b-row",{attrs:{id:"query-controls"}},[e("b-col",{attrs:{cols:"7"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"","data-cy":"select-all"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,"")>-1:t.selectAll},on:{change:[function(e){var l=t.selectAll,o=e.target,n=!!o.checked;if(Array.isArray(l)){var c=t._i(l,"");o.checked?c<0&&(t.selectAll=l.concat([""])):c>-1&&(t.selectAll=l.slice(0,c).concat(l.slice(c+1)))}else t.selectAll=n},t.UpdateDownloadsSelectAll]}}),t._v(" "),e("label",{staticClass:"form-label",attrs:{for:"dataset-checkall"}},[t._v("Select all datasets")])]),t._v(" "),e("b-col",{attrs:{cols:"5"}},[e("div",{attrs:{id:"summary-stats"}},[e("p",{attrs:{"data-cy":"summary-stats"}},[t._v("\n          "+t._s(t.summarizeStats())+"\n        ")])])])],1):t._e(),t._v(" "),t.displayResults?e("b-row",{staticClass:"d-flex justify-content-center",attrs:{id:"card-listbox"}},[e("b-list-group",{attrs:{id:"results-list-group"}},t._l(t.results,(function(l){return e("result-card",{key:l.id,attrs:{"dataset-name":l.dataset_name,"num-matching-subjects":l.num_matching_subjects,"image-modals":l.image_modals,"select-all":t.selectAll,"data-cy":l.dataset_name},on:{"update-downloads":t.updateDownloads}})})),1)],1):t._e(),t._v(" "),e("download-results-button",{attrs:{results:t.results,downloads:t.downloads,"data-cy":"download-results"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResultCard:l(378).default,DownloadResultsButton:l(379).default})}}]);