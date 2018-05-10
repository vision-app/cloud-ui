"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([6],{514:function(a,t,s){var l="ICON-FONT-FILE-STYLE";function e(a){return(a||window.ICON_FONT_STYLE).styleContent||""}function n(a){var t=document.createElement("style"),s=document.getElementsByTagName("head")[0];t.innerHTML=e(a),t.id=l,t.type="text/css",s?s.appendChild(t):window.addEventListener("load",function(){s.appendChild(t)})}a.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},548:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("u-article",[s("h1",[a._v("多行输入 Textarea")]),s("h2",[a._v("Examples")]),s("h3",[a._v("基本形式")]),s("p",[a._v("大部分属性与"),s("code",{pre:!0},[a._v("<textarea>")]),a._v("元素一致。")]),s("div",{staticClass:"u-example"},[s("u-textarea",{attrs:{placeholder:"Details",autofocus:""}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("placeholder")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"Details"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("autofocus")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("只读与禁用")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-textarea",{attrs:{value:"只读",readonly:""}}),s("u-textarea",{attrs:{value:"禁用",disabled:""}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"只读"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"禁用"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("disabled")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("大小扩展")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",{attrs:{direction:"vertical"}},[s("u-linear-layout",[s("u-textarea",{attrs:{size:"normal",value:"normal",readonly:""}}),s("u-textarea",{attrs:{size:"normal large",value:"normal large",readonly:""}})],1),s("u-linear-layout",[s("u-textarea",{attrs:{size:"medium",value:"medium",readonly:""}})],1),s("u-linear-layout",[s("u-textarea",{attrs:{size:"large",value:"large",readonly:""}})],1),s("u-linear-layout",[s("u-textarea",{attrs:{size:"huge",value:"huge",readonly:""}})],1),s("u-linear-layout",[s("u-textarea",{attrs:{size:"huge full",value:"huge full",readonly:""}})],1)],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("direction")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"vertical"')]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("size")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"normal"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"normal"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("size")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"normal large"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"normal large"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("size")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"medium"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"medium"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("size")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"large"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"large"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("size")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"huge"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"huge"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("size")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"huge full"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"huge full"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-textarea")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n")])]),s("h2",[a._v("API")]),s("h3",[a._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Prop/Attr")]),s("th",[a._v("Type")]),s("th",[a._v("Default")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("value")]),s("td",[a._v("String")]),s("td"),s("td",[a._v("输入框的值")])]),s("tr",[s("td",[a._v("placeholder")]),s("td",[a._v("String")]),s("td"),s("td",[a._v("原生属性")])]),s("tr",[s("td",[a._v("minlength")]),s("td",[a._v("Number")]),s("td"),s("td",[a._v("原生属性")])]),s("tr",[s("td",[a._v("maxlength")]),s("td",[a._v("Number")]),s("td"),s("td",[a._v("原生属性")])]),s("tr",[s("td",[a._v("autofocus")]),s("td",[a._v("Boolean")]),s("td"),s("td",[a._v("原生属性")])]),s("tr",[s("td",[a._v("readonly")]),s("td",[a._v("Boolean")]),s("td"),s("td",[a._v("原生属性")])]),s("tr",[s("td",[a._v("disabled")]),s("td",[a._v("Boolean")]),s("td"),s("td",[a._v("原生属性")])]),s("tr",[s("td",[a._v("size")]),s("td",[a._v("String")]),s("td",[s("code",{pre:!0},[a._v("'normal'")])]),s("td",[a._v("大小扩展，支持一个值："),s("code",{pre:!0},[a._v("'normal'")]),a._v(", "),s("code",{pre:!0},[a._v("'large'")]),a._v(", "),s("code",{pre:!0},[a._v("'huge'")]),a._v(", "),s("code",{pre:!0},[a._v("'full'")]),a._v("，或两个值的组合，前者表示高度，后者表示宽度，类似CSS的padding书写格式")])])])]),s("h3",[a._v("Events")]),s("h4",[a._v("@input")]),s("p",[a._v("输入时触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event")]),s("td",[a._v("String")]),s("td",[a._v("输入框的值")])])])]),s("h4",[a._v("@change")]),s("p",[a._v("值变化时触发（与原生事件不同）")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event.value")]),s("td",[a._v("String")]),s("td",[a._v("改变后的值")])]),s("tr",[s("td",[a._v("$event.oldValue")]),s("td",[a._v("String")]),s("td",[a._v("旧的值")])])])]),s("h4",[a._v("@focus")]),s("p",[a._v("获得焦点时触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event")]),s("td",[a._v("String")]),s("td",[a._v("原生事件对象")])])])]),s("h4",[a._v("@blur")]),s("p",[a._v("失去焦点时触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event")]),s("td",[a._v("String")]),s("td",[a._v("原生事件对象")])])])])])},staticRenderFns:[]},e=s(0)(null,l,!1,null,null,null);t.default=e.exports}});