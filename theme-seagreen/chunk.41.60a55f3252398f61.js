"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?a2407565c6e0adf600a5d3caf8be16a1") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?a2407565c6e0adf600a5d3caf8be16a1#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?a2407565c6e0adf600a5d3caf8be16a1") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?a2407565c6e0adf600a5d3caf8be16a1#vusion-icon-font") format("svg");\n}'},webpackJsonp([41],{505:function(t,e,a){var l="ICON-FONT-FILE-STYLE";function s(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function n(t){var e=document.createElement("style"),a=document.getElementsByTagName("head")[0];e.innerHTML=s(t),e.id=l,e.type="text/css",a?a.appendChild(e):window.addEventListener("load",function(){a.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},553:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={data:function(){return{value:void 0}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-linear-layout",{attrs:{direction:"vertical"}},[a("u-cascade-capsules",{attrs:{value:t.value,converter:"join-number",categories:[{label:"CPU",key:"cpu"},{label:"内存",key:"memory"},{label:"系统盘",key:"storage"}],data:[{text:"1核",value:1,children:[{text:"1GB",value:1,children:[{text:"20GB",value:20}]},{text:"2GB",value:2,children:[{text:"20GB",value:20}]}]},{text:"2核",value:2,children:[{text:"2GB",value:2,children:[{text:"20GB",value:20}]},{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]}]},{text:"4核",value:4,children:[{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]},{text:"16GB",value:16,children:[{text:"20GB",value:20}]}]}]},on:{"update:value":function(e){t.value=e}}}),a("div",[t._v("选择的值为："+t._s(t.value))])],1)},staticRenderFns:[]},n={components:{Cb7fd45:a(0)(l,s,!1,null,null,null).exports}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("u-article",[a("h1",[t._v("级联胶囊 CascadeCapsules")]),a("h3",[t._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-cascade-capsules",{attrs:{categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"理学",children:[{text:"物理学",value:"物理学",children:[{text:"理论物理",value:"理论物理"},{text:"凝聚态物理",value:"凝聚态物理"},{text:"材料物理",value:"材料物理"}]},{text:"数学",value:"数学",children:[{text:"基础数学",value:"基础数学"},{text:"计算数学",value:"计算数学"},{text:"应用数学",value:"应用数学"}]},{text:"化学",value:"化学"}]},{text:"工学",value:"工学",children:[{text:"计算机科学与技术",value:"计算机科学与技术",children:[{text:"计算机系统结构",value:"计算机系统结构"},{text:"计算机软件与理论",value:"计算机软件与理论",disabled:!0},{text:"计算机应用技术",value:"计算机应用技术"}]},{text:"软件工程",value:"软件工程",disabled:!0},{text:"机械工程",value:"机械工程",children:[{text:"机械制造及其自动化",value:"机械制造及其自动化"},{text:"机械电子工程",value:"机械电子工程"},{text:"机械设计及理论",value:"机械设计及理论",disabled:!0},{text:"车辆工程",value:"车辆工程",disabled:!0}]}]}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: '学科门类' },\n    { label: '一级学科' },\n    { label: '二级学科' },\n]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '理学', value: '理学', children: [\n        { text: '物理学', value: '物理学', children: [\n            { text: '理论物理', value: '理论物理' },\n            { text: '凝聚态物理', value: '凝聚态物理' },\n            { text: '材料物理', value: '材料物理' },\n        ]},\n        { text: '数学', value: '数学', children: [\n            { text: '基础数学', value: '基础数学' },\n            { text: '计算数学', value: '计算数学' },\n            { text: '应用数学', value: '应用数学' },\n        ]},\n        { text: '化学', value: '化学' },\n    ]},\n    { text: '工学', value: '工学', children: [\n        { text: '计算机科学与技术', value: '计算机科学与技术', children: [\n            { text: '计算机系统结构', value: '计算机系统结构' },\n            { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },\n            { text: '计算机应用技术', value: '计算机应用技术' },\n        ]},\n        { text: '软件工程', value: '软件工程', disabled: true },\n        { text: '机械工程', value: '机械工程', children: [\n            { text: '机械制造及其自动化', value: '机械制造及其自动化' },\n            { text: '机械电子工程', value: '机械电子工程' },\n            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },\n            { text: '车辆工程', value: '车辆工程', disabled: true },\n        ]},\n    ]},\n]\"")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("值转换器")]),a("div",{staticClass:"u-example"},[a("Cb7fd45")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":value.sync")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"join-number"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { label: 'CPU', key: 'cpu' },\n        { label: '内存', key: 'memory' },\n        { label: '系统盘', key: 'storage' },\n    ]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n        { text: '1核', value: 1, children: [\n            { text: '1GB', value: 1, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '2GB', value: 2, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n        { text: '2核', value: 2, children: [\n            { text: '2GB', value: 2, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '4GB', value: 4, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '8GB', value: 8, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n        { text: '4核', value: 4, children: [\n            { text: '4GB', value: 4, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '8GB', value: 8, children: [\n                { text: '20GB', value: 20 },\n            ] },\n            { text: '16GB', value: 16, children: [\n                { text: '20GB', value: 20 },\n            ] },\n        ] },\n    ]\"")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("选择的值为：{{ value }}"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("undefined")]),t._v(",\n        };\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("自动选择")]),a("p",[t._v("此功能默认开启，父级切换时会跟据当前级别的"),a("code",{pre:!0},[t._v("value")]),t._v("自动选择，如果没有与"),a("code",{pre:!0},[t._v("value")]),t._v("相匹配的项，会自动选择第一个显示且非禁用的项。")]),a("p",[t._v("可以将"),a("code",{pre:!0},[t._v("auto-select")]),t._v("设置为"),a("code",{pre:!0},[t._v("false")]),t._v("，关闭此功能。")]),a("div",{staticClass:"u-example"},[a("u-cascade-capsules",{attrs:{converter:"join-number","auto-select":!1,categories:[{label:"CPU",key:"cpu"},{label:"内存",key:"memory"},{label:"系统盘",key:"storage"}],data:[{text:"1核",value:1,children:[{text:"1GB",value:1,children:[{text:"20GB",value:20}]},{text:"2GB",value:2,children:[{text:"20GB",value:20}]}]},{text:"2核",value:2,children:[{text:"2GB",value:2,children:[{text:"20GB",value:20}]},{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]}]},{text:"4核",value:4,children:[{text:"4GB",value:4,children:[{text:"20GB",value:20}]},{text:"8GB",value:8,children:[{text:"20GB",value:20}]},{text:"16GB",value:16,children:[{text:"20GB",value:20}]}]}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("converter")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"join-number"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":auto-select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: 'CPU', key: 'cpu' },\n    { label: '内存', key: 'memory' },\n    { label: '系统盘', key: 'storage' },\n]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '1核', value: 1, children: [\n        { text: '1GB', value: 1, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '2GB', value: 2, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n    { text: '2核', value: 2, children: [\n        { text: '2GB', value: 2, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '4GB', value: 4, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '8GB', value: 8, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n    { text: '4核', value: 4, children: [\n        { text: '4GB', value: 4, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '8GB', value: 8, children: [\n            { text: '20GB', value: 20 },\n        ] },\n        { text: '16GB', value: 16, children: [\n            { text: '20GB', value: 20 },\n        ] },\n    ] },\n]\"")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("可取消")]),a("div",{staticClass:"u-example"},[a("u-cascade-capsules",{attrs:{"auto-select":!1,cancelable:"",categories:[{label:"学科门类"},{label:"一级学科"},{label:"二级学科"}],data:[{text:"理学",value:"理学",children:[{text:"物理学",value:"物理学",children:[{text:"理论物理",value:"理论物理"},{text:"凝聚态物理",value:"凝聚态物理"},{text:"材料物理",value:"材料物理"}]},{text:"数学",value:"数学",children:[{text:"基础数学",value:"基础数学"},{text:"计算数学",value:"计算数学"},{text:"应用数学",value:"应用数学"}]},{text:"化学",value:"化学"}]},{text:"工学",value:"工学",children:[{text:"计算机科学与技术",value:"计算机科学与技术",children:[{text:"计算机系统结构",value:"计算机系统结构"},{text:"计算机软件与理论",value:"计算机软件与理论",disabled:!0},{text:"计算机应用技术",value:"计算机应用技术"}]},{text:"软件工程",value:"软件工程",disabled:!0},{text:"机械工程",value:"机械工程",children:[{text:"机械制造及其自动化",value:"机械制造及其自动化"},{text:"机械电子工程",value:"机械电子工程"},{text:"机械设计及理论",value:"机械设计及理论",disabled:!0},{text:"车辆工程",value:"车辆工程",disabled:!0}]}]}]}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":auto-select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("cancelable")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":categories")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { label: '学科门类' },\n    { label: '一级学科' },\n    { label: '二级学科' },\n]\"")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v("\"[\n    { text: '理学', value: '理学', children: [\n        { text: '物理学', value: '物理学', children: [\n            { text: '理论物理', value: '理论物理' },\n            { text: '凝聚态物理', value: '凝聚态物理' },\n            { text: '材料物理', value: '材料物理' },\n        ]},\n        { text: '数学', value: '数学', children: [\n            { text: '基础数学', value: '基础数学' },\n            { text: '计算数学', value: '计算数学' },\n            { text: '应用数学', value: '应用数学' },\n        ]},\n        { text: '化学', value: '化学' },\n    ]},\n    { text: '工学', value: '工学', children: [\n        { text: '计算机科学与技术', value: '计算机科学与技术', children: [\n            { text: '计算机系统结构', value: '计算机系统结构' },\n            { text: '计算机软件与理论', value: '计算机软件与理论', disabled: true },\n            { text: '计算机应用技术', value: '计算机应用技术' },\n        ]},\n        { text: '软件工程', value: '软件工程', disabled: true },\n        { text: '机械工程', value: '机械工程', children: [\n            { text: '机械制造及其自动化', value: '机械制造及其自动化' },\n            { text: '机械电子工程', value: '机械电子工程' },\n            { text: '机械设计及理论', value: '机械设计及理论', disabled: true },\n            { text: '车辆工程', value: '车辆工程', disabled: true },\n        ]},\n    ]},\n]\"")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-cascade-capsules")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("data")]),a("td",[t._v("Array<{ text, value }>")]),a("td"),a("td",[t._v("数据列表")])]),a("tr",[a("td",[t._v("value.sync, v-model")]),a("td",[t._v("Any")]),a("td"),a("td",[t._v("当前选择的值")])]),a("tr",[a("td",[t._v("categories")]),a("td",[t._v("Array<{ label, key }>")]),a("td"),a("td",[t._v("多级分类")])]),a("tr",[a("td",[t._v("autoSelect")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("true")])]),a("td")]),a("tr",[a("td",[t._v("converter")]),a("td",[t._v("String, Object")]),a("td",[a("code",{pre:!0},[t._v("'join'")])]),a("td",[t._v("value 与 values 的转换器。可选值："),a("code",{pre:!0},[t._v("'join'")]),t._v("表示将 values 数组 join 之后变成 value，"),a("code",{pre:!0},[t._v("'join-number'")]),t._v("与"),a("code",{pre:!0},[t._v("join")]),t._v("类似，只是会考虑它为数字的情况，"),a("code",{pre:!0},[t._v("'last-value'")]),t._v("表示以最后一项的值作为 value。也可以传入一个包含 { get, set } 的一个对象")])]),a("tr",[a("td",[t._v("field")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("'text'")])]),a("td",[t._v("显示文本字段")])]),a("tr",[a("td",[t._v("cancelable")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否可以取消选择")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@input")]),a("p",[t._v("选择某一项时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event")]),a("td",[t._v("Any")]),a("td",[t._v("选择项的值")])])])]),a("h4",[t._v("@select")]),a("p",[t._v("选择某一项时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.level")]),a("td",[t._v("Number")]),a("td",[t._v("选择的层级")])]),a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.values")]),a("td",[t._v("Array")]),a("td",[t._v("改变后每项值的数组")])]),a("tr",[a("td",[t._v("$event.item")]),a("td",[t._v("Object")]),a("td",[t._v("选择项相关对象")])]),a("tr",[a("td",[t._v("$event.itemVM")]),a("td",[t._v("ListViewItem")]),a("td",[t._v("选择项子组件")])])])]),a("h4",[t._v("@change")]),a("p",[t._v("选择值改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("改变后的值")])]),a("tr",[a("td",[t._v("$event.oldValue")]),a("td",[t._v("Any")]),a("td",[t._v("旧的值")])]),a("tr",[a("td",[t._v("$event.values")]),a("td",[t._v("Array")]),a("td",[t._v("改变后每项值的数组")])]),a("tr",[a("td",[t._v("$event.oldValues")]),a("td",[t._v("Array")]),a("td",[t._v("旧的每项值的数组")])])])])])},staticRenderFns:[]},r=a(0)(n,v,!1,null,null,null);e.default=r.exports}});