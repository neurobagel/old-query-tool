(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{381:function(t,e,o){"use strict";o.r(e);o(28),o(43),o(205);var c={props:{datasetUuid:{type:String,required:!0},datasetName:{type:String,required:!0},numMatchingSubjects:{type:Number,default:null},imageModals:{type:Array,default:null},isChecked:{type:Boolean,default:!1}},emits:["update-downloads"],data:function(){return{modalities:{"http://purl.org/nidash/nidm#ArterialSpinLabeling":{name:"ASL",style:"background-color: rgb(69, 77, 87); color: white;"},"http://purl.org/nidash/nidm#DiffusionWeighted":{name:"DWI",style:"background-color: rgb(205, 92, 92); color: white;"},"http://purl.org/nidash/nidm#EEG":{name:"EEG",style:"background-color: rgb(216, 191, 216); color: white;"},"http://purl.org/nidash/nidm#FlowWeighted":{name:"Flow",style:"background-color: rgb(70, 130, 180); color: white;"},"http://purl.org/nidash/nidm#T1Weighted":{name:"T1",style:"background-color: rgb(189, 183, 107);"},"http://purl.org/nidash/nidm#T2Weighted":{name:"T2",style:"background-color: rgb(143, 188, 143); color: white;"}}}},methods:{updateDownloads:function(t){this.$emit("update-downloads",this.datasetUuid,t.target.checked)}}},n=o(79),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("b-list-group-item",[e("b-card",[e("b-card-body",[e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("b-row",{staticClass:"d-flex justify-content-center"},[e("b-col",{staticClass:"d-flex align-items-center card-checkbox",attrs:{cols:"1"}},[e("input",{ref:"checkbox",staticClass:"form-check-input dataset-checkbox",attrs:{type:"checkbox",value:"","data-cy":"card-".concat(t.datasetUuid,"-checkbox")},domProps:{checked:t.isChecked},on:{change:t.updateDownloads}})]),t._v(" "),e("b-col",{staticClass:"card-content",attrs:{cols:"11"}},[e("b-row",[e("h5",{staticClass:"card-title",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-dataset")}},[t._v("\n                  "+t._s(t.datasetName)+"\n                ")])]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("p",{staticClass:"card-text",attrs:{"data-cy":"card-".concat(t.datasetUuid,"-subjects")}},[t._v("\n                    "+t._s("".concat(t.numMatchingSubjects," subjects"))+"\n                  ")])])],1)],1)],1)],1),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-row",[e("b-button-toolbar",{staticClass:"d-flex justify-content-end"},t._l(t.imageModals,(function(o){return e("b-button-group",{key:o,staticClass:"mr-2"},[e("b-button",{staticClass:"btn card-modality",style:t.modalities[o].style,attrs:{type:"button","data-cy":"card-".concat(t.datasetUuid,"-").concat(t.modalities[o].name)}},[t._v("\n                  "+t._s(t.modalities[o].name)+"\n                ")])],1)})),1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);