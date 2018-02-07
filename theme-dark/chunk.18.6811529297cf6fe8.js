"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?f8ce79e9ca2a473e5c0ea77d8d75eb78") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?f8ce79e9ca2a473e5c0ea77d8d75eb78#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?f8ce79e9ca2a473e5c0ea77d8d75eb78") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?f8ce79e9ca2a473e5c0ea77d8d75eb78#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?f8ce79e9ca2a473e5c0ea77d8d75eb78") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?f8ce79e9ca2a473e5c0ea77d8d75eb78#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?f8ce79e9ca2a473e5c0ea77d8d75eb78") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?f8ce79e9ca2a473e5c0ea77d8d75eb78#vusion-icon-font") format("svg");\n}'},webpackJsonp([18],{469:function(s,a,t){var n="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function e(s){var a=document.createElement("style"),t=document.getElementsByTagName("head")[0];a.innerHTML=l(s),a.id=n,a.type="text/css",t?t.appendChild(a):window.addEventListener("load",function(){t.appendChild(a)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},495:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={data:function(){return{value:12,readonly:!1}},methods:{change:function(s){console.log(s.value)}}},l={render:function(){var s=this.$createElement;return(this._self._c||s)("u-number-input",{attrs:{value:this.value,readonly:this.readonly},on:{change:this.change}})},staticRenderFns:[]},e={components:{Ca5646b:t(0)(n,l,!1,null,null,null).exports}},r={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("数字输入 NumberInput")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("h4",[s._v("声明式")]),t("h3",[s._v("基本")]),t("div",{staticClass:"u-example"},[t("u-number-input")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("format属性")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{format:"00",value:"5"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("format")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"00"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("autofocus")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",autofocus:"autofocus"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("autofocus")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"autofocus"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("只读")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",readonly:"readonly"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"readonly"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("最大值 最小值")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",min:"5",max:"20"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("指定宽高")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",width:"150",height:"40"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"150"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"40"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("禁用")]),t("div",{staticClass:"u-example"},[t("u-number-input",{attrs:{value:"12",disabled:"disabled"}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"disabled"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("获取改变后的值change方法")]),t("div",{staticClass:"u-example"},[t("Ca5646b")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"change"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":readonly")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"readonly"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-number-input")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n\tdata() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("12")]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        change(value) {\n           "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value.value);\n        },\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])},staticRenderFns:[]},v=t(0)(e,r,!1,null,null,null);a.default=v.exports}});