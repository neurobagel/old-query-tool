(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{388:function(t,e,o){var content=o(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(82).default)("efdd24a6",content,!0,{sourceMap:!1})},389:function(t,e,o){"use strict";o(388)},390:function(t,e,o){var c=o(81)((function(i){return i[1]}));c.push([t.i,".card-checkbox{padding-right:0}.card-content{padding-left:0}.card-modality{font-size:1em}.card-text{font-size:1.25em}.card-title{font-size:1.75em;max-width:100%}.card-title,.expanded{white-space:normal}.expander{color:#470a68;cursor:pointer;font-size:15px!important;font-style:italic}",""]),c.locals={},t.exports=c},393:function(t,e,o){"use strict";o.r(e);o(34),o(28),o(43),o(207),o(116);var c={props:{nodeName:{type:String,required:!0},datasetUuid:{type:String,required:!0},datasetName:{type:String,required:!0},datasetTotalSubjects:{type:Number,required:!0},numMatchingSubjects:{type:Number,default:null},imageModals:{type:Array,default:null},isChecked:{type:Boolean,default:!1}},emits:["update-downloads"],data:function(){return{titleExpanded:!1,modalities:{"http://purl.org/nidash/nidm#ArterialSpinLabeling":{name:"ASL",style:"background-color: rgb(69, 77, 87); color: white;"},"http://purl.org/nidash/nidm#DiffusionWeighted":{name:"DWI",style:"background-color: rgb(205, 92, 92); color: white;"},"http://purl.org/nidash/nidm#EEG":{name:"EEG",style:"background-color: rgb(216, 191, 216); color: white;"},"http://purl.org/nidash/nidm#FlowWeighted":{name:"Flow",style:"background-color: rgb(70, 130, 180); color: white;"},"http://purl.org/nidash/nidm#T1Weighted":{name:"T1",style:"background-color: rgb(189, 183, 107);"},"http://purl.org/nidash/nidm#T2Weighted":{name:"T2",style:"background-color: rgb(143, 188, 143); color: white;"}}}},computed:{sortedModalities:function(){var t=this.imageModals;return t.sort()}},methods:{updateDownloads:function(t){this.$emit("update-downloads",this.datasetUuid,t.target.checked)},expandText:function(){this.titleExpanded=!this.titleExpanded}}},d=(o(389),o(80)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("b-list-group-item",[e("b-card",[e("b-card-body",[e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("b-row",{staticClass:"d-flex justify-content-center"},[e("b-col",{staticClass:"d-flex align-items-center card-checkbox",attrs:{cols:"1"}},[e("input",{ref:"checkbox",staticClass:"form-check-input dataset-checkbox",attrs:{type:"checkbox",value:"","data-cy":"card-".concat(t.datasetUuid,"-checkbox")},domProps:{checked:t.isChecked},on:{change:t.updateDownloads}})]),t._v(" "),e("b-col",{staticClass:"card-content",attrs:{cols:"11"}},[e("b-row",[e("h5",{staticClass:"card-title",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-dataset")}},[t._v("\n                  "+t._s(t.titleExpanded?t.datasetName:t.datasetName.slice(0,60))+"\n                  "),t.datasetName.length>60?e("span",{staticClass:"expander",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-expander")},on:{click:t.expandText}},[t._v(t._s(t.titleExpanded?"...less":"...more"))]):t._e()])]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("p",{staticClass:"card-text",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-subjects")}},[t._v("\n                    "+t._s("".concat(t.numMatchingSubjects," subjects /\n                  ").concat(t.datasetTotalSubjects," total subjects"))+"\n                  ")])])],1)],1)],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-row",[e("b-button-toolbar",{staticClass:"d-flex flex-column align-items-end"},[e("span",{staticClass:"text-right mb-2",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-node-name")}},[t._v(t._s("from ".concat(t.nodeName)))]),t._v(" "),e("b-button-group",{staticClass:"float-right"},t._l(t.sortedModalities,(function(o){return e("b-button",{key:o,staticClass:"btn card-modality",style:t.modalities[o].style,attrs:{type:"button","data-cy":"card-".concat(t.datasetUuid,"-modality-").concat(t.modalities[o].name)}},[t._v("\n                  "+t._s(t.modalities[o].name)+"\n                ")])})),1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);