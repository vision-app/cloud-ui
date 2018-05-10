"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([69],{520:function(e,o,d){var n="ICON-FONT-FILE-STYLE";function t(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function r(e){var o=document.createElement("style"),d=document.getElementsByTagName("head")[0];o.innerHTML=t(e),o.id=n,o.type="text/css",d?d.appendChild(o):window.addEventListener("load",function(){d.appendChild(o)})}e.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},531:function(e,o,d){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={render:function(){var e=this,o=e.$createElement,d=e._self._c||o;return d("u-article",[d("h1",[e._v("基础 Base")]),d("h3",[e._v("设计原则")]),d("p",[e._v("Vusion 的组件库与传统的纯 CSS 组件库所不同，它更加重视样式、模板与逻辑三者之间的关系，因此推荐尽可能地将样式封装入基础组件，而不是用一个简单的"),d("code",{pre:!0},[e._v("class")]),e._v("来代替。")]),d("p",[e._v("每个独立的组件是没有默认的"),d("code",{pre:!0},[e._v("margin")]),e._v("的，因为它们在实际场景中的情形是不确定的。组件之间的布局推荐使用"),d("code",{pre:!0},[e._v("<u-linear-layout>")]),e._v("与"),d("code",{pre:!0},[e._v("<u-grid-layout>")]),e._v("来控制。")]),d("h3",[e._v("统一样式")]),d("p",[e._v("原型组件库以 "),d("u-link",{attrs:{href:"http://necolas.github.io/normalize.css"}},[e._v("normalize.css")]),e._v(" 为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。")],1),d("p",[e._v("类似 "),d("u-link",{attrs:{href:"https://getbootstrap.com"}},[e._v("Bootstrap")]),e._v("，将"),d("code",{pre:!0},[e._v("box-sizing: border-box")]),e._v("应用到所有元素，于是元素的宽高便不会受到"),d("code",{pre:!0},[e._v("padding")]),e._v("的影响。")],1),d("p",[e._v("使用 Vue 的"),d("code",{pre:!0},[e._v("preserveWhitespace: false")]),e._v("，将所有元素之间空格清除，这样在"),d("code",{pre:!0},[e._v("inline-block")]),e._v("的元素之间不会有空隙。")]),d("h3",[e._v("黑名单")]),d("p",[e._v("为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单："),d("code",{pre:!0},[e._v("<a>")]),e._v("、"),d("code",{pre:!0},[e._v("<dl>")]),e._v("、"),d("code",{pre:!0},[e._v("<dt>")]),e._v("、"),d("code",{pre:!0},[e._v("<dd>")]),e._v("、"),d("code",{pre:!0},[e._v("<ul>")]),e._v("、"),d("code",{pre:!0},[e._v("<ol>")]),e._v("、"),d("code",{pre:!0},[e._v("<li>")]),e._v("。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。")]),d("h3",[e._v("样式扩展")]),d("p",[e._v("Proto UI 中组件的颜色只扩展了"),d("code",{pre:!0},[e._v("default")]),e._v(", "),d("code",{pre:!0},[e._v("primary")]),e._v("和"),d("code",{pre:!0},[e._v("error")]),e._v("，推荐按照这些词汇继续进行扩展："),d("code",{pre:!0},[e._v("default")]),e._v(", "),d("code",{pre:!0},[e._v("primary")]),e._v(", "),d("code",{pre:!0},[e._v("info")]),e._v(", "),d("code",{pre:!0},[e._v("success")]),e._v(", "),d("code",{pre:!0},[e._v("warning")]),e._v(", "),d("code",{pre:!0},[e._v("error")]),e._v(", "),d("code",{pre:!0},[e._v("disabled")]),e._v(", ...")]),d("p",[e._v("Proto UI 中组件的尺寸只扩展了"),d("code",{pre:!0},[e._v("small")]),e._v(", "),d("code",{pre:!0},[e._v("base")]),e._v("和"),d("code",{pre:!0},[e._v("large")]),e._v("。推荐按照这些词汇继续进行扩展："),d("code",{pre:!0},[e._v("mini")]),e._v(", "),d("code",{pre:!0},[e._v("small")]),e._v(", "),d("code",{pre:!0},[e._v("base")]),e._v(", "),d("code",{pre:!0},[e._v("large")]),e._v(", "),d("code",{pre:!0},[e._v("huge")]),e._v(", ...")])])},staticRenderFns:[]},t=d(0)(null,n,!1,null,null,null);o.default=t.exports}});