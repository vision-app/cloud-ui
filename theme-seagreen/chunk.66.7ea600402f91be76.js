"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'},webpackJsonp([66],{505:function(s,a,t){var n="ICON-FONT-FILE-STYLE";function e(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function l(s){var a=document.createElement("style"),t=document.getElementsByTagName("head")[0];a.innerHTML=e(s),a.id=n,a.type="text/css",t?t.appendChild(a):window.addEventListener("load",function(){t.appendChild(a)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},518:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("徽章 Badge")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("div",{staticClass:"u-example"},[t("p",[s._v("消息 "),t("u-badge",{attrs:{value:3}})],1),t("p",[s._v("消息 "),t("u-badge",{attrs:{value:"new"}})],1)]),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("消息 "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("消息 "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"new"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("右上角")]),t("div",{staticClass:"u-example"},[t("u-badge",{attrs:{value:3,corner:""}},[t("u-button",[s._v("评论")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("corner")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("评论"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("最大值")]),t("div",{staticClass:"u-example"},[t("u-badge",{attrs:{value:120,max:99,corner:""}},[t("u-button",[s._v("评论")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"120"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"99"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("corner")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("评论"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(">")]),s._v("\n")])]),t("h3",[s._v("小圆点")]),t("div",{staticClass:"u-example"},[t("p",[s._v("消息 "),t("u-badge",{attrs:{value:3,dot:""}})],1),t("p",[t("u-badge",{attrs:{value:3,corner:"",dot:""}},[t("u-button",[s._v("评论")])],1)],1)]),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("消息 "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dot")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("corner")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("dot")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("评论"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-badge")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n")])]),t("h2",[s._v("API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("value")]),t("td",[s._v("Number, String")]),t("td"),t("td",[s._v("显示的值")])]),t("tr",[t("td",[s._v("max")]),t("td",[s._v("Number")]),t("td"),t("td",[s._v("最大值，超过最大值会显示为"),t("code",{pre:!0},[s._v("max+")]),s._v("的形式，要求"),t("code",{pre:!0},[s._v("value")]),s._v("是 "),t("code",{pre:!0},[s._v("Number")]),s._v("类型。")])]),t("tr",[t("td",[s._v("corner")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否插入到右上角")])]),t("tr",[t("td",[s._v("dot")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否显示为小圆点")])])])]),t("h3",[s._v("Slots")]),t("h4",[s._v("(default)")]),t("p",[s._v("插入需要附加徽章的元素。")])])},staticRenderFns:[]},e=t(0)(null,n,!1,null,null,null);a.default=e.exports}});