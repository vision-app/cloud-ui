"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?021b58a8468c9b717d6a95fb96a74d2f") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?021b58a8468c9b717d6a95fb96a74d2f#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?021b58a8468c9b717d6a95fb96a74d2f") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?021b58a8468c9b717d6a95fb96a74d2f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?021b58a8468c9b717d6a95fb96a74d2f") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?021b58a8468c9b717d6a95fb96a74d2f#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?021b58a8468c9b717d6a95fb96a74d2f") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?021b58a8468c9b717d6a95fb96a74d2f#vusion-icon-font") format("svg");\n}'},webpackJsonp([37],{499:function(t,s,a){var n="ICON-FONT-FILE-STYLE";function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},540:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("复合滑块 ComboSlider")]),a("div",{staticClass:"u-example"},[a("u-combo-slider")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-combo-slider")]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-combo-slider")]),t._v(">")]),t._v("\n")])]),a("div",{staticClass:"u-example"},[a("u-combo-slider",{attrs:{step:10,unit:"GB",tip:"步长为10GB"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-combo-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":step")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"10"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("unit")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"GB"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("tip")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"步长为10GB"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-combo-slider")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("禁用")]),a("div",{staticClass:"u-example"},[a("u-combo-slider",{attrs:{step:10,unit:"GB",tip:"步长为10GB",disabled:"",value:40}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-combo-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":step")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"10"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("unit")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"GB"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("tip")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"步长为10GB"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"40"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-combo-slider")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("最大/最小值")]),a("div",{staticClass:"u-example"},[a("u-combo-slider",{attrs:{step:10,unit:"GB",tip:"步长为10GB",min:10,max:90,value:40}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-combo-slider")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":step")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"10"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("unit")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"GB"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("tip")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"步长为10GB"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"10"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"90"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"40"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-combo-slider")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("value.sync, v-model")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0")])]),a("td",[t._v("滑块的值")])]),a("tr",[a("td",[t._v("min")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0")])]),a("td",[t._v("最小值")])]),a("tr",[a("td",[t._v("max")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0")])]),a("td",[t._v("最大值")])]),a("tr",[a("td",[t._v("step")]),a("td",[t._v("Number")]),a("td",[a("code",{pre:!0},[t._v("0")])]),a("td",[t._v("间隔。"),a("code",{pre:!0},[t._v("0")]),t._v("表示连续")])]),a("tr",[a("td",[t._v("unit")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("单位")])]),a("tr",[a("td",[t._v("tip")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("提示")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@input")]),a("p",[t._v("滑块的值改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("Number")]),a("td",[t._v("滑块的值")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("滑块的值改变后触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Number")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("Number")]),a("td",[t._v("旧的值")])])])])])},staticRenderFns:[]},e=a(0)(null,n,!1,null,null,null);s.default=e.exports}});