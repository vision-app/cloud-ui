"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?6511cf3cb3126d196be0157a5243a340") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?6511cf3cb3126d196be0157a5243a340#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?6511cf3cb3126d196be0157a5243a340") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?6511cf3cb3126d196be0157a5243a340#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?6511cf3cb3126d196be0157a5243a340") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?6511cf3cb3126d196be0157a5243a340#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?6511cf3cb3126d196be0157a5243a340") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?6511cf3cb3126d196be0157a5243a340#vusion-icon-font") format("svg");\n}'},webpackJsonp([40],{472:function(t,s,a){var n="ICON-FONT-FILE-STYLE";function r(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function v(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=r(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(v(),window.HAS_CREATE_FONT_STYLE=!0)}},481:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("按钮 Button")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-button",[t._v("设 置")])],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("设 置"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("禁用")]),a("div",{staticClass:"u-example"},[a("u-button",{attrs:{disabled:""}},[t._v("设 置")])],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("设 置"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("颜色扩展")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-button",{attrs:{color:"primary"}},[t._v("立即创建")]),a("u-button",{attrs:{color:"primary",disabled:""}},[t._v("立即创建")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("立即创建"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("立即创建"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("大小扩展")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-button",{attrs:{size:"small",disabled:""}},[t._v("保存")]),a("u-button",{attrs:{disabled:""}},[t._v("创建服务")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("保存"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("创建服务"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("正方形")]),a("div",{staticClass:"u-example"},[a("u-button",{attrs:{square:"",icon:"refresh"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("square")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"refresh"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("图标")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-button",{attrs:{color:"primary",icon:"create"}},[t._v("创建实例")]),a("u-button",{attrs:{color:"primary",icon:"loading"}},[t._v("立即创建")]),a("u-button",{attrs:{color:"primary",icon:"loading",disabled:""}},[t._v("立即创建")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"create"')]),t._v(">")]),t._v("创建实例"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"loading"')]),t._v(">")]),t._v("立即创建"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"loading"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("立即创建"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("链接")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-button",{attrs:{href:"https://vusion.github.io",target:"_blank"}},[t._v("href")]),a("u-button",{attrs:{to:"/proto-ui/u-link"}},[t._v("to")]),a("u-button",{attrs:{href:"https://vusion.github.io",disabled:""}},[t._v("disabled")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"https://vusion.github.io"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("target")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"_blank"')]),t._v(">")]),t._v("href"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"/proto-ui/u-link"')]),t._v(">")]),t._v("to"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"https://vusion.github.io"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("disabled"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-button")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("href")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("链接地址")])]),a("tr",[a("td",[t._v("target")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("（原生属性）")])]),a("tr",[a("td",[t._v("to")]),a("td",[t._v("String,  Location")]),a("td"),a("td",[t._v("需要vue-router，与"),a("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),a("code",{pre:!0},[t._v("to")]),t._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),a("tr",[a("td",[t._v("replace")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("需要vue-router，与"),a("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),a("code",{pre:!0},[t._v("replace")]),t._v("属性相同。如果为"),a("code",{pre:!0},[t._v("true")]),t._v("，当点击时，会调用"),a("code",{pre:!0},[t._v("router.replace()")]),t._v("而不是"),a("code",{pre:!0},[t._v("router.push()")]),t._v("，于是导航后不会留下"),a("code",{pre:!0},[t._v("history")]),t._v("记录。")])]),a("tr",[a("td",[t._v("append")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("需要vue-router，与"),a("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),a("code",{pre:!0},[t._v("append")]),t._v("属性相同。如果为"),a("code",{pre:!0},[t._v("true")]),t._v("，则在当前路径后追加"),a("code",{pre:!0},[t._v("to")]),t._v("的路径。")])]),a("tr",[a("td",[t._v("color")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("颜色扩展。可选值："),a("code",{pre:!0},[t._v("'primary'")]),t._v("或不填")])]),a("tr",[a("td",[t._v("size")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("大小扩展。可选值："),a("code",{pre:!0},[t._v("'small'")]),t._v("或不填")])]),a("tr",[a("td",[t._v("square")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否显示为正方形")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用。禁用后不会响应"),a("code",{pre:!0},[t._v("click")]),t._v("事件。")])])])]),a("h3",[t._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Slot")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("(default)")]),a("td",[t._v("插入文本或HTML")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("$listeners")]),a("p",[t._v("监听所有"),a("code",{pre:!0},[t._v("<a>")]),t._v("元素的事件。")]),a("h4",[t._v("@before-navigate")]),a("p",[t._v("使用router相关属性切换路由前触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.to")]),a("td",[t._v("String,  Location")]),a("td",[a("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.replace")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.append")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("append")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止切换流程")])])])]),a("h4",[t._v("@navigate")]),a("p",[t._v("使用router相关属性切换路由时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.to")]),a("td",[t._v("String,  Location")]),a("td",[a("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.replace")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),a("tr",[a("td",[t._v("$event.append")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("append")]),t._v("属性的值")])])])])])},staticRenderFns:[]},r=a(0)(null,n,!1,null,null,null);s.default=r.exports}});