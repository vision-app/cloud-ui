"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?55dd515d070fb9f950aaa0b51df8a511") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?55dd515d070fb9f950aaa0b51df8a511#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?55dd515d070fb9f950aaa0b51df8a511") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?55dd515d070fb9f950aaa0b51df8a511#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?55dd515d070fb9f950aaa0b51df8a511") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?55dd515d070fb9f950aaa0b51df8a511#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?55dd515d070fb9f950aaa0b51df8a511") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?55dd515d070fb9f950aaa0b51df8a511#vusion-icon-font") format("svg");\n}'},webpackJsonp([15],{479:function(t,s,a){function i(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function n(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=i(t),s.id=h,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var h="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},528:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-popover",{attrs:{trigger:"click",content:"内容",placement:"bottom","style-object":this.styleObject}},[s("u-button",[this._v("click 激活")])],1)},staticRenderFns:[]},n={components:{C0b0136:a(0)({data:function(){return{styleObject:{padding:0}}}},i,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("气泡提示 Popover")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("h4",[this._v("声明式")]),s("div",{staticClass:"u-example"},[s("C0b0136")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"click"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"内容"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"bottom"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":style-object")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"styleObject"')]),this._v(">")]),this._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("click 激活"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),s("span",{attrs:{class:"hljs-attr"}},[this._v("styleObject")]),this._v(": {\n                "),s("span",{attrs:{class:"hljs-attr"}},[this._v("padding")]),this._v(": "),s("span",{attrs:{class:"hljs-number"}},[this._v("0")]),this._v(",\n            }\n        }\n    }\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),s("div",{staticClass:"u-example"},[s("u-popover",{attrs:{trigger:"hover",content:"内容",placement:"top-start"}},[s("u-button",[this._v("hover 激活")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"hover"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("content")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"内容"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"top-start"')]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("hover 激活"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(">")]),this._v("\n")])]),s("div",{staticClass:"u-example"},[s("u-popover",{attrs:{trigger:"click",message:"内容",placement:"top-start",confirm:""}},[s("u-button",[this._v("click 激活")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"click"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("message")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"内容"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"top-start"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("confirm")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("click 激活"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-popover")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("Popover API")]),s("h3",[this._v("Attrs/Props")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Attr/Prop")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("trigger")]),s("td",[this._v("String")]),s("td",[s("code",{pre:!0},[this._v("click")])]),s("td",[this._v("触发方式,可填click,click")])]),s("tr",[s("td",[this._v("placement")]),s("td",[this._v("String")]),s("td",[s("code",{pre:!0},[this._v("bottom")])]),s("td",[this._v("和popper组件的属性一样")])]),s("tr",[s("td",[this._v("confirm")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("确认提示样式")])]),s("tr",[s("td",[this._v("confirmOk")]),s("td",[this._v("String")]),s("td",[s("code",{pre:!0},[this._v("确定")])]),s("td",[this._v("确定按钮文本")])]),s("tr",[s("td",[this._v("confirmCancel")]),s("td",[this._v("String")]),s("td",[s("code",{pre:!0},[this._v("取消")])]),s("td",[this._v("取消按钮文本")])]),s("tr",[s("td",[this._v("message")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("配合confirm属性使用，提示文本")])]),s("tr",[s("td",[this._v("title")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("默认提示标题")])]),s("tr",[s("td",[this._v("content")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("默认提示文本")])])])]),s("h3",[this._v("Slots")]),s("h4",[this._v("(default)")]),s("p",[this._v("在插槽中插入reference元素")]),s("h4",[this._v("(confirm)")]),s("p",[this._v("在插槽中插入confirm自定义内容")]),s("h4",[this._v("(title)")]),s("p",[this._v("在插槽中插入自定义标题内容")]),s("h4",[this._v("(content)")]),s("p",[this._v("在插槽中插入自定义内容")])])},staticRenderFns:[]},e=a(0)(n,h,!1,null,null,null);s.default=e.exports}});