"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([24],{520:function(s,a,t){var n="ICON-FONT-FILE-STYLE";function e(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function r(s){var a=document.createElement("style"),t=document.getElementsByTagName("head")[0];a.innerHTML=e(s),a.id=n,a.type="text/css",t?t.appendChild(a):window.addEventListener("load",function(){t.appendChild(a)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},586:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("线型进度条 LinearProgress")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-linear-progress",{attrs:{percent:36}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("高度扩展")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-linear-layout",[t("u-linear-progress",{attrs:{percent:36,size:"small"}},[s._v("small")])],1),t("u-linear-layout",[t("u-linear-progress",{attrs:{percent:36,size:"normal"}},[s._v("normal")])],1),t("u-linear-layout",[t("u-linear-progress",{attrs:{percent:36,size:"large"}},[s._v("large")])],1),t("u-linear-layout",[t("u-linear-progress",{attrs:{percent:36,size:"huge"}},[s._v("huge")])],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(">")]),s._v("small"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal"')]),s._v(">")]),s._v("normal"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("large"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(">")]),s._v("huge"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),t("h2",[s._v("API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("percent")]),t("td",[s._v("Number")]),t("td",[t("code",{pre:!0},[s._v("0")])]),t("td",[s._v("百分比")])]),t("tr",[t("td",[s._v("size")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'normal'")])]),t("td",[s._v("高度扩展，值有"),t("code",{pre:!0},[s._v("'small'")]),s._v(", "),t("code",{pre:!0},[s._v("'normal'")]),s._v(", "),t("code",{pre:!0},[s._v("'large'")]),s._v(", "),t("code",{pre:!0},[s._v("'huge'")]),s._v("四个值")])])])]),t("h3",[s._v("Slots")]),t("h4",[s._v("(default)")]),t("p",[s._v("插入文本或HTML。")])])},staticRenderFns:[]},e=t(0)(null,n,!1,null,null,null);a.default=e.exports}});