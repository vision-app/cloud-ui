"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'},webpackJsonp([35],{502:function(t,a,s){var e="ICON-FONT-FILE-STYLE";function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function r(t){var a=document.createElement("style"),s=document.getElementsByTagName("head")[0];a.innerHTML=n(t),a.id=e,a.type="text/css",s?s.appendChild(a):window.addEventListener("load",function(){s.appendChild(a)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},555:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={data:function(){return{date:"2017-12-01 20:12:12"}},methods:{change:function(t){console.log(t)},select:function(t){console.log(t)}}},n={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("u-date-time-picker",{attrs:{date:t.date},on:{change:function(a){t.change(a.date)},select:function(a){t.select(a)}}})},staticRenderFns:[]},r={components:{C9e01c0:s(0)(e,n,!1,null,null,null).exports}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("u-article",[s("h1",[t._v("日期时间选择 DateTimePicker")]),s("h2",[t._v("示例")]),s("h3",[t._v("基本形式")]),s("h4",[t._v("声明式")]),s("h3",[t._v("基本 有初始值")]),s("div",{staticClass:"u-example"},[s("u-date-time-picker",{attrs:{date:"2018-08-08",autofocus:""}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("autofocus")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("基本 无初始值")]),s("div",{staticClass:"u-example"},[s("u-date-time-picker")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("禁用")]),s("div",{staticClass:"u-example"},[s("u-date-time-picker",{attrs:{date:"2018-08-08",disabled:"disabled"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"disabled"')]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("只读")]),s("div",{staticClass:"u-example"},[s("u-date-time-picker",{attrs:{date:"2018-08-08",readonly:"readonly"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"2018-08-08"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"readonly"')]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("最大值 最小值")]),s("div",{staticClass:"u-example"},[s("u-date-time-picker",{attrs:{date:"2017-05-12 8:00:00","min-date":"2017-01-10 07:00:00","max-date":"2017-12-12 07:00:00"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"2017-05-12 8:00:00"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("min-date")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"2017-01-10 07:00:00"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("max-date")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"2017-12-12 07:00:00"')]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n")])]),s("h3",[t._v("方法change")]),s("div",{staticClass:"u-example"},[s("C9e01c0")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":date")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"date"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("@change")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"change($event.date)"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("@select")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"select($event)"')]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-date-time-picker")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{attrs:{class:"javascript"}},[t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n\tdata() {\n\t\t"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n\t\t\t"),s("span",{attrs:{class:"hljs-attr"}},[t._v("date")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'2017-12-01 20:12:12'")]),t._v(",\n\t\t};\n\t},\n    "),s("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        change(time) {\n            "),s("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(time);\n        },\n        select(date) {\n            "),s("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(date);\n        }\n    },\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),s("h2",[t._v("DateTimePicker API")]),s("h3",[t._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop/Attr")]),s("th",[t._v("Type")]),s("th",[t._v("Default")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("date")]),s("td",[t._v("String, Number, Date")]),s("td"),s("td",[t._v("显示的日期值")])]),s("tr",[s("td",[t._v("minDate")]),s("td",[t._v("String, Number, Date")]),s("td"),s("td",[t._v("最小日期值")])]),s("tr",[s("td",[t._v("maxDate")]),s("td",[t._v("SString, Number, Date")]),s("td"),s("td",[t._v("最大日期值")])]),s("tr",[s("td",[t._v("placeholder")]),s("td",[t._v("String")]),s("td",[s("code",{pre:!0},[t._v("请选择时间")])]),s("td",[t._v("默认提示语")])]),s("tr",[s("td",[t._v("autofocus")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否默认处于focus状态")])]),s("tr",[s("td",[t._v("disabled")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否禁用")])]),s("tr",[s("td",[t._v("readonly")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否只读")])]),s("tr",[s("td",[t._v("yearDiff")]),s("td",[t._v("String, Number")]),s("td",[s("code",{pre:!0},[t._v("3")])]),s("td",[t._v("最小可选年份值为当前年减去此值")])]),s("tr",[s("td",[t._v("yearAdd")]),s("td",[t._v("String, Number")]),s("td",[s("code",{pre:!0},[t._v("1")])]),s("td",[t._v("最大可选年份值为当前年加上此值")])])])]),s("h3",[t._v("Events")]),s("h4",[t._v("@select")]),s("p",[t._v("日期值发生变化触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.date")]),s("td",[t._v("NUmber")]),s("td",[t._v("选择项的值，默认返回时间戳")])])])]),s("h4",[t._v("@change")]),s("p",[t._v("选择新时间触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.date")]),s("td",[t._v("NUmber")]),s("td",[t._v("选择项的值，默认返回时间戳")])])])])])},staticRenderFns:[]},v=s(0)(r,l,!1,null,null,null);a.default=v.exports}});