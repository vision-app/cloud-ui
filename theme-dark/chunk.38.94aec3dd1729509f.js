"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'},webpackJsonp([38],{502:function(t,s,a){var n="ICON-FONT-FILE-STYLE";function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function l(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},540:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={data:function(){return{value:"#EE867D",options:[{value:"#EE867D"},{value:"#805DCF"},{value:"#40CCCA"},{value:"#FFCA12"},{value:"#30A8DC"},{value:"#E1AEF6"},{value:"#D2D2D2"}]}},methods:{select:function(t){console.log(t),this.value=t}}},e={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-color-select",{attrs:{options:t.options,value:t.value},on:{select:function(s){t.select(s.value)}}})},staticRenderFns:[]},l={components:{Cb3eea4:a(0)(n,e,!1,null,null,null).exports}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("颜色选择扩展 SelectColor")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("h3",[t._v("方法")]),a("div",{staticClass:"u-example"},[a("Cb3eea4")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-color-select")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":options")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"options"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"select($event.value)"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-color-select")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#EE867D'")]),t._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": [\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#EE867D'")]),t._v(",\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'#805DCF'")]),t._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'#40CCCA'")]),t._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'#FFCA12'")]),t._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'#30A8DC'")]),t._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'#E1AEF6'")]),t._v("\n                },\n                {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(":"),a("span",{attrs:{class:"hljs-string"}},[t._v("'#D2D2D2'")]),t._v("\n                },\n            ],\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        select(value) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(value);\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".value = value;\n        }\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("width")]),a("td",[t._v("String/Number")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("输入框长度")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@select")]),a("p",[t._v("选中列表项时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.selected")]),a("td",[t._v("Object")]),a("td",[t._v("选中后的列表对象")])]),a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("String")]),a("td",[t._v("选中后的列表对象的值")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("开关状态改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.selected")]),a("td",[t._v("Object")]),a("td",[t._v("改变后的列表对象")])]),a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("String")]),a("td",[t._v("改变后的列表对象的值")])])])])])},staticRenderFns:[]},r=a(0)(l,v,!1,null,null,null);s.default=r.exports}});