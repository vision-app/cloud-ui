"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?a0df0eae1dd45fe98751b4fa20582791") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?a0df0eae1dd45fe98751b4fa20582791#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?a0df0eae1dd45fe98751b4fa20582791") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?a0df0eae1dd45fe98751b4fa20582791#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?a0df0eae1dd45fe98751b4fa20582791") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?a0df0eae1dd45fe98751b4fa20582791#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?a0df0eae1dd45fe98751b4fa20582791") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?a0df0eae1dd45fe98751b4fa20582791#vusion-icon-font") format("svg");\n}'},webpackJsonp([33],{467:function(t,s,a){function i(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function e(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=i(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var n="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},512:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{date:"2014-12-01"}},methods:{change:function(t){console.log(t)},select:function(t){console.log(t)},toggle:function(t){console.log(t.open)}},watch:{date:function(t){console.log(t)}}},e={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-date-picker",{attrs:{time:"morning","year-diff":"1","year-add":"5",date:t.date},on:{"update:date":function(s){t.date=s},change:t.change,select:t.select,toggle:function(s){t.toggle(s)}}},[t._v("Modal")])},staticRenderFns:[]},n={components:{Cd81687:a(0)(i,e,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("日期选择 DatePicker")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("h4",[this._v("声明式")]),s("h3",[this._v("基本")]),s("div",{staticClass:"u-example"},[s("div",[s("u-date-picker",{attrs:{date:"2018-08-08",alignment:"right"}})],1)]),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("date")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"2018-08-08"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("alignment")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"right"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("基本")]),s("div",{staticClass:"u-example"},[s("u-date-picker")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("最大值maxDate 最小值minDate")]),s("div",{staticClass:"u-example"},[s("u-date-picker",{attrs:{date:"2018-08-08","min-date":"2018-08-06","max-date":"2018-08-18"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("date")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"2018-08-08"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("min-date")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"2018-08-06"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("max-date")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"2018-08-18"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("禁用")]),s("div",{staticClass:"u-example"},[s("u-date-picker",{attrs:{disabled:"",date:"2018-08-08","min-date":"2017-08-08","max-date":"2019-08-08"}})],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("date")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"2018-08-08"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("min-date")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"2017-08-08"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("max-date")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"2019-08-08"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("获取改变值方法 change select")]),s("div",{staticClass:"u-example"},[s("Cd81687")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("time")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"morning"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("year-diff")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"1"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("year-add")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"5"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":date.sync")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"date"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("@change")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"change"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("@select")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"select"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("@toggle")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"toggle($event)"')]),this._v(">")]),this._v("Modal"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-date-picker")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n\tdata(){\n\t\t"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n\t\t\t"),s("span",{attrs:{class:"hljs-attr"}},[this._v("date")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'2014-12-01'")]),this._v(",\n\t\t}\n\t},\n    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        change(newVal) {\n            "),s("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(newVal);\n        },\n        select(newVal) {\n        \t"),s("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(newVal);\n        },\n        toggle(event) {\n        \t"),s("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(event.open);\n        }\n    },\n    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("watch")]),this._v(": {\n        date(newValue) {\n            "),s("span",{attrs:{class:"hljs-built_in"}},[this._v("console")]),this._v(".log(newValue);\n        },\n    },\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("DatePicker API")]),s("h3",[this._v("Attrs/Props")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Attr/Prop")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("date")]),s("td",[this._v("String,Number,Date")]),s("td"),s("td",[this._v("初始日期值")])]),s("tr",[s("td",[this._v("minDate")]),s("td",[this._v("String,Number,Date")]),s("td"),s("td",[this._v("最小日期")])]),s("tr",[s("td",[this._v("maxDate")]),s("td",[this._v("String,Number,Date")]),s("td"),s("td",[this._v("最大日期")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否只读")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])]),s("tr",[s("td",[this._v("autofocus")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("文本框默认处于focus")])]),s("tr",[s("td",[this._v("placeholder")]),s("td",[this._v("String")]),s("td",[s("code",{pre:!0},[this._v("请输入")])]),s("td",[this._v("文本框默认提示")])]),s("tr",[s("td",[this._v("alignment")]),s("td",[this._v("String")]),s("td",[s("code",{pre:!0},[this._v("left")])]),s("td",[this._v("日历弹窗对其方式，可选值：left, right")])]),s("tr",[s("td",[this._v("time")]),s("td",[this._v("String, Number")]),s("td",[s("code",{pre:!0},[this._v("start")])]),s("td",[this._v("设置返回的日期的时分秒值，可选值为start,表示时分秒是0:00:00,morning:时分秒为8:00:00,end:表示时分秒为: 23:59:59, 输入整数表示对应的整数时刻，例如输入9代表时分秒为9:00:00,自定义时分秒请输入对应格式的字符串即可")])]),s("tr",[s("td",[this._v("yeadDiff")]),s("td",[this._v("String, Number")]),s("td",[this._v("3")]),s("td",[this._v("当前年份前几年")])]),s("tr",[s("td",[this._v("yearAdd")]),s("td",[this._v("String, Number")]),s("td",[this._v("1")]),s("td",[this._v("当前年份后几年")])])])])])},staticRenderFns:[]},l=a(0)(n,h,!1,null,null,null);s.default=l.exports}});