"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?021b58a8468c9b717d6a95fb96a74d2f") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?021b58a8468c9b717d6a95fb96a74d2f#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?021b58a8468c9b717d6a95fb96a74d2f") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?021b58a8468c9b717d6a95fb96a74d2f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?021b58a8468c9b717d6a95fb96a74d2f") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?021b58a8468c9b717d6a95fb96a74d2f#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?021b58a8468c9b717d6a95fb96a74d2f") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?021b58a8468c9b717d6a95fb96a74d2f#vusion-icon-font") format("svg");\n}'},webpackJsonp([67],{499:function(e,t,n){var o="ICON-FONT-FILE-STYLE";function d(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function f(e){var t=document.createElement("style"),n=document.getElementsByTagName("head")[0];t.innerHTML=d(e),t.id=o,t.type="text/css",n?n.appendChild(t):window.addEventListener("load",function(){n.appendChild(t)})}e.exports=function(){window.HAS_CREATE_FONT_STYLE||(f(),window.HAS_CREATE_FONT_STYLE=!0)}},507:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("u-article",[n("h1",[e._v("基础 Base")]),n("h3",[e._v("统一样式")]),n("p",[e._v("原型组件库以 "),n("u-link",{attrs:{href:"http://necolas.github.io/normalize.css"}},[e._v("normalize.css")]),e._v(" 为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。")],1),n("p",[e._v("类似 "),n("u-link",{attrs:{href:"https://getbootstrap.com"}},[e._v("Bootstrap")]),e._v("，将"),n("code",{pre:!0},[e._v("box-sizing: border-box")]),e._v("应用到所有元素，于是元素的宽高便不会受到"),n("code",{pre:!0},[e._v("padding")]),e._v("的影响。")],1),n("p",[e._v("使用 Vue 的"),n("code",{pre:!0},[e._v("preserveWhitespace: false")]),e._v("，将所有元素之间空格清除，这样在"),n("code",{pre:!0},[e._v("inline-block")]),e._v("的元素之间不会有空隙。")]),n("h3",[e._v("黑名单")]),n("p",[e._v("为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单："),n("code",{pre:!0},[e._v("<a>")]),e._v("、"),n("code",{pre:!0},[e._v("<dl>")]),e._v("、"),n("code",{pre:!0},[e._v("<dt>")]),e._v("、"),n("code",{pre:!0},[e._v("<dd>")]),e._v("、"),n("code",{pre:!0},[e._v("<ul>")]),e._v("、"),n("code",{pre:!0},[e._v("<ol>")]),e._v("、"),n("code",{pre:!0},[e._v("<li>")]),e._v("。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。")])])},staticRenderFns:[]},d=n(0)(null,o,!1,null,null,null);t.default=d.exports}});