"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?f8ce79e9ca2a473e5c0ea77d8d75eb78") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?f8ce79e9ca2a473e5c0ea77d8d75eb78#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?f8ce79e9ca2a473e5c0ea77d8d75eb78") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?f8ce79e9ca2a473e5c0ea77d8d75eb78#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?f8ce79e9ca2a473e5c0ea77d8d75eb78") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?f8ce79e9ca2a473e5c0ea77d8d75eb78#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?f8ce79e9ca2a473e5c0ea77d8d75eb78") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?f8ce79e9ca2a473e5c0ea77d8d75eb78#vusion-icon-font") format("svg");\n}'},webpackJsonp([25],{469:function(s,t,a){var n="ICON-FONT-FILE-STYLE";function l(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function v(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=l(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(v(),window.HAS_CREATE_FONT_STYLE=!0)}},485:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("线性布局 LinearLayout")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("排列方向")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-linear-progress",{attrs:{percent:25}}),a("u-linear-progress",{attrs:{percent:50}}),a("u-linear-progress",{attrs:{percent:75}})],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"25"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":percent")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"75"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-progress")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("间隙")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-linear-layout",{attrs:{gap:"none"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{gap:"small"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{gap:"normal"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{gap:"large"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("gap")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"none"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("gap")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("gap")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"normal"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("gap")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("水平分布方式")]),a("p",[s._v("普通的分布方式是用"),a("code",{pre:!0},[s._v("inline-block")]),s._v("与"),a("code",{pre:!0},[s._v("text-align")]),s._v("两个特性实现的，只支持水平方向。")]),a("p",[s._v("如果想使用更灵活的分布方式，请使用下面的Flex模式，并确保您的浏览器支持该功能。")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-linear-layout",{attrs:{justify:"start"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{justify:"center"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{justify:"end"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"start"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("Flex模式")]),a("h4",[s._v("主轴分布方式")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-linear-layout",{attrs:{type:"flex",justify:"start"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{type:"flex",justify:"center"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{type:"flex",justify:"end"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{type:"flex",justify:"space-between"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1),a("u-linear-layout",{attrs:{type:"flex",justify:"space-around"}},[a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")]),a("u-button",[s._v("Button")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"start"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"space-between"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"space-around"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("交叉轴对齐方式")]),a("div",{staticClass:"u-example"},[a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-linear-layout",{attrs:{type:"flex",alignment:"start"}},[a("u-block",[s._v("Button")]),a("u-block",{attrs:{size:"large"}},[s._v("Button")]),a("u-block",{attrs:{size:"huge"}},[s._v("Button")])],1),a("u-linear-layout",{attrs:{type:"flex",alignment:"center"}},[a("u-block",[s._v("Button")]),a("u-block",{attrs:{size:"large"}},[s._v("Button")]),a("u-block",{attrs:{size:"huge"}},[s._v("Button")])],1),a("u-linear-layout",{attrs:{type:"flex",alignment:"end"}},[a("u-block",[s._v("Button")]),a("u-block",{attrs:{size:"large"}},[s._v("Button")]),a("u-block",{attrs:{size:"huge"}},[s._v("Button")])],1),a("u-linear-layout",{attrs:{type:"flex",alignment:"baseline"}},[a("u-block",[s._v("Button")]),a("u-block",{attrs:{size:"large"}},[s._v("Button")]),a("u-block",{attrs:{size:"huge"}},[s._v("Button")])],1),a("u-linear-layout",{attrs:{type:"flex",alignment:"stretch"}},[a("u-block",[s._v("Button")]),a("u-block",{attrs:{size:"large"}},[s._v("Button")]),a("u-block",{attrs:{size:"huge"}},[s._v("Button")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("direction")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alignment")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"start"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alignment")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alignment")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alignment")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"baseline"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"flex"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("alignment")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"stretch"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-block")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("direction")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'horizontal'")])]),a("td",[s._v("排列方向，'horizontal'或'vertical'")])]),a("tr",[a("td",[s._v("gap")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'normal'")])]),a("td",[s._v("间隙大小。可选值：'none', 'small', 'normal'或'large'")])]),a("tr",[a("td",[s._v("type")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("布局模式，可选值：'flex'")])]),a("tr",[a("td",[s._v("justify")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'start'")])]),a("td",[s._v("普通模式下可选值：'start', 'center', 'end'。flex布局模式下还支持：'space-between', 'space-around'")])]),a("tr",[a("td",[s._v("alignment")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'stretch'")])]),a("td",[s._v("flex布局模式的交叉轴对齐方式，可选值：'start', 'center', 'end', 'baseline', 'stretch'")])])])]),a("h3",[s._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("(default)")]),a("td")])])])])},staticRenderFns:[]},l=a(0)(null,n,!1,null,null,null);t.default=l.exports}});