(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{376:function(t,e,n){"use strict";n.r(e);n(42);var l={props:{name:{type:String,required:!0},step:{type:String,default:"1"}},emits:["update-continuous-field"],methods:{updateField:function(t){this.$emit("update-continuous-field",this.name,t)}}},o=n(92),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{"data-cy":"continuous-field-label"}},[t._v(t._s(t.name))]),t._v(" "),e("b-form-input",{staticClass:"numberinput form-control",attrs:{"data-cy":"".concat(t.name,"-continuous-field-input"),type:"number",step:t.step,min:"0"},on:{input:t.updateField}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);