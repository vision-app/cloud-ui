"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?376f08b7d8870a5c8b0ae929acbdd021") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?376f08b7d8870a5c8b0ae929acbdd021#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?376f08b7d8870a5c8b0ae929acbdd021") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?376f08b7d8870a5c8b0ae929acbdd021#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?376f08b7d8870a5c8b0ae929acbdd021") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?376f08b7d8870a5c8b0ae929acbdd021#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?376f08b7d8870a5c8b0ae929acbdd021") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?376f08b7d8870a5c8b0ae929acbdd021#vusion-icon-font") format("svg");\n}'},webpackJsonp([28],{466:function(a,t,s){var n="ICON-FONT-FILE-STYLE";function l(a){return(a||window.ICON_FONT_STYLE).styleContent||""}function e(a){var t=document.createElement("style"),s=document.getElementsByTagName("head")[0];t.innerHTML=l(a),t.id=n,t.type="text/css",s?s.appendChild(t):window.addEventListener("load",function(){s.appendChild(t)})}a.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},478:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("u-article",[s("h1",[a._v("标签 Label")]),s("h2",[a._v("示例")]),s("h3",[a._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-label",[a._v("Label")]),s("u-label",{attrs:{color:"primary"}},[a._v("Primary")]),s("u-label",{attrs:{color:"success"}},[a._v("Success")]),s("u-label",{attrs:{color:"warning"}},[a._v("Warning")]),s("u-label",{attrs:{color:"error"}},[a._v("Error")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("Label"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("color")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"primary"')]),a._v(">")]),a._v("Primary"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("color")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"success"')]),a._v(">")]),a._v("Success"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("color")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"warning"')]),a._v(">")]),a._v("Warning"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("color")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"error"')]),a._v(">")]),a._v("Error"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-label")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n")])]),s("h2",[a._v("API")]),s("h3",[a._v("Slots")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Slot")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("(default)")]),s("td",[a._v("在插槽中插入文本或HTML")])])])])])},staticRenderFns:[]},l=s(0)(null,n,!1,null,null,null);t.default=l.exports}});