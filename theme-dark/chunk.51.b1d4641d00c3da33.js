webpackJsonp([51],{750:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var s=this.$createElement;return(this._self._c||s)("u-bar-chart",{attrs:{border:"",legend:"",title:this.title,"x-axis":this.xaxis,"y-axis":this.yaxis,series:this.series,data:this.data}})},staticRenderFns:[]},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-bar-chart",{attrs:{border:"",legend:"",stack:s.stack,title:s.title,"x-axis":s.xaxis,"y-axis":s.yaxis,series:s.series,data:s.data},scopedSlots:s._u([{key:"tooltip",fn:function(t){return a("div",{},s._l(s.series,function(r){return a("div",[s._v(s._s(r.name||r.key)+" : "+s._s(t.row[r.key])+" ")])}))}}])})],1)},staticRenderFns:[]},l={data:function(){return{title:"6月访问量",xaxis:{key:"time",count:4},yaxis:{min:0},series:[{key:"number",name:"访问量"}],data:[{time:"2018-06-01",number:150},{time:"2018-06-02",number:300},{time:"2018-06-03",number:28},{time:"2018-06-04",number:200},{time:"2018-06-05",number:74},{time:"2018-06-06",number:532},{time:"2018-06-07",number:420},{time:"2018-06-08",number:532},{time:"2018-06-09",number:420},{time:"2018-06-10",number:532},{time:"2018-06-11",number:420},{time:"2018-06-12",number:532},{time:"2018-06-13",number:420},{time:"2018-06-14",number:200},{time:"2018-06-15",number:74},{time:"2018-06-16",number:532},{time:"2018-06-17",number:420},{time:"2018-06-18",number:532},{time:"2018-06-19",number:420},{time:"2018-06-20",number:420},{time:"2018-06-21",number:420},{time:"2018-06-22",number:420},{time:"2018-06-23",number:420},{time:"2018-06-24",number:200},{time:"2018-06-25",number:74},{time:"2018-06-26",number:532},{time:"2018-06-27",number:420},{time:"2018-06-28",number:532},{time:"2018-06-29",number:420}]}},methods:{format:function(s){console.log(s)}}},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-bar-chart",{attrs:{border:"",legend:"",title:s.title,"x-axis":s.xaxis,"y-axis":s.yaxis,series:s.series,data:s.data},scopedSlots:s._u([{key:"tooltip",fn:function(t){return a("div",{},[s._v("\n\t\t\t"+s._s(t.sery.name)+" : "+s._s(t.row[t.sery.key])+"\n\t\t")])}}])})],1)},staticRenderFns:[]},_={components:{"c-3a558d90":a(0)({data:function(){return{title:"每星期访问量",xaxis:{key:"week"},yaxis:{min:0},series:[{key:"number",name:"访问量"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}}},r,!1,null,null,null).exports,"c-45971320":a(0)({data:function(){return{title:"每星期访问量",xaxis:{key:"week"},yaxis:{min:0},stack:"stack",series:[{key:"rds"},{key:"ncr"},{key:"nce"}],data:[{week:"星期一",rds:150,ncr:200,nce:50},{week:"星期二",rds:300,ncr:340,nce:20},{week:"星期三",rds:28,ncr:56,nce:28},{week:"星期四",rds:200,ncr:78,nce:40},{week:"星期五",rds:74,ncr:100,nce:74},{week:"星期六",rds:532,ncr:200,nce:32},{week:"星期日",rds:420,ncr:260,nce:20}]}}},n,!1,null,null,null).exports,"c-7ec2605e":a(0)(l,v,!1,null,null,null).exports}},e={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("柱状图 BarChart")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("u-example",[a("div",[a("u-bar-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0},series:[{key:"number",name:"访问量"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-bar-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"每星期访问量"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"{ key: 'week' }\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{ min: 0 }"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{key: 'number', name: '访问量' }]\"")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-bar-chart")]),s._v(">")]),s._v("\n")])])])]),a("h4",[s._v("命令式")]),a("u-example",[a("div",[a("c-3a558d90")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-bar-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"xaxis"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"yaxis"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"series"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-bar-chart")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n\tdata() {\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'每星期访问量'")]),s._v(",\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("xaxis")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'week'")]),s._v(" },\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("yaxis")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" },\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("series")]),s._v(": [{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'number'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'访问量'")]),s._v(" }],\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期一'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期二'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期三'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("28")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期四'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期五'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("74")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期六'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期日'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\n\t\t\t],\n\t\t}\n\t}\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h4",[s._v("堆叠数据")]),a("u-example",[a("div",[a("c-45971320")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-bar-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":stack")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"stack"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"xaxis"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"yaxis"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"series"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(">")]),s._v("\n\t\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scope"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tooltip"')]),s._v(">")]),s._v("\n\t\t\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"sery in series"')]),s._v(">")]),s._v("{{ sery.name || sery.key}} : {{ scope.row[sery.key]}} "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\t\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-bar-chart")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n\tdata() {\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'每星期访问量'")]),s._v(",\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("xaxis")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'week'")]),s._v(" },\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("yaxis")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" },\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("stack")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'stack'")]),s._v(",\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("series")]),s._v(": [{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'rds'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'ncr'")]),s._v(" }, { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'nce'")]),s._v(" }],\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期一'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rds")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ncr")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("nce")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("50")]),s._v(" },\n\t            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期二'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rds")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ncr")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("340")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("nce")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" },\n\t            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期三'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rds")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("28")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ncr")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("56")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("nce")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("28")]),s._v(" },\n\t            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期四'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rds")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ncr")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("78")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("nce")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" },\n\t            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期五'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rds")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("74")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ncr")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("nce")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("74")]),s._v(" },\n\t            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期六'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rds")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ncr")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("nce")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("32")]),s._v(" },\n\t            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("week")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'星期日'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rds")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ncr")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("260")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("nce")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(" },\n\t\t\t],\n\t\t}\n\t}\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h4",[s._v("x轴间隔显示")]),a("u-example",[a("div",[a("c-7ec2605e")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-bar-chart")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("border")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"title"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":x-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"xaxis"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":y-axis")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"yaxis"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":series")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"series"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(">")]),s._v("\n\t\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot-scope")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"scope"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"tooltip"')]),s._v(">")]),s._v("\n\t\t\t{{ scope.sery.name}} : {{ scope.row[scope.sery.key]}}\n\t\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\t"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-bar-chart")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n\tdata() {\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'6月访问量'")]),s._v(",\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("xaxis")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'time'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("count")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("4")]),s._v(" },\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("yaxis")]),s._v(": { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" },\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("series")]),s._v(": [{"),a("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'number'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'访问量'")]),s._v(" }],\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-01'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("150")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-02'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("300")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-03'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("28")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-04'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-05'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("74")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-06'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-07'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-08'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-09'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-10'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-11'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-12'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-13'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-14'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-15'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("74")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-16'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-17'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-18'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-19'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-20'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-21'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-22'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-23'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-24'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-25'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("74")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-26'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-27'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-28'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("532")]),s._v(" },\n\t\t\t\t{ "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'2018-06-29'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("number")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("420")]),s._v(" },\n\t\t\t],\n\t\t}\n\t},\n\t"),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n\t\tformat(value) {\n\t\t\t"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value);\n\t\t},\n\t},\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h2",[s._v("API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("title")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("图表的标题")])]),a("tr",[a("td",[s._v("caption")]),a("td",[s._v("String")]),a("td"),a("td",[s._v("图表的描述")])]),a("tr",[a("td",[s._v("data")]),a("td",[s._v("Array")]),a("td"),a("td",[s._v("图表需要显示的数据")])]),a("tr",[a("td",[s._v("xAxis")]),a("td",[s._v("Object")]),a("td"),a("td",[s._v("绘制X轴需要传入的数据，属性key的值为data数组中对象的某个属性，依据此值来绘制X轴的刻度尺, count属性用来在数据较多的情况下让x轴间隔显示")])]),a("tr",[a("td",[s._v("yAxis")]),a("td",[s._v("Object")]),a("td"),a("td",[s._v("绘制Y轴需要传入的数据，属性min，max表示Y轴的最大值和最小值，count表示Y轴最小值和最大值之间分成几段，默认值为8")])]),a("tr",[a("td",[s._v("series")]),a("td",[s._v("Array")]),a("td"),a("td",[s._v("传入绘制每条柱状数据的key值，key值对应着data数组中对象的属性")])]),a("tr",[a("td",[s._v("border")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("是否有表框")])]),a("tr",[a("td",[s._v("legend")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("X轴下方是否显示每条线段对应的标签")])]),a("tr",[a("td",[s._v("width")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("100%")])]),a("td",[s._v("图表的宽度")])]),a("tr",[a("td",[s._v("height")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("480px")])]),a("td",[s._v("图表的高度")])]),a("tr",[a("td",[s._v("stack")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("线段是否采用堆叠方式，这种方式下series中的对象属性key等于data中标识不同部分的key字段")])]),a("tr",[a("td",[s._v("titleAlign")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("center")])]),a("td",[s._v("图表标题的对齐方式，默认是居中，值有:left,center,right")])]),a("tr",[a("td",[s._v("loading")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("true表示正在加载中，false表示加载完成")])])])]),a("h3",[s._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("tooltip")]),a("td",[s._v("自定义tooltip内容")])])])]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("titleTemplate")]),a("td",[s._v("自定义标题内容")])])])]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("captionTemplate")]),a("td",[s._v("自定义caption内容")])])])])],1)},staticRenderFns:[]},c=a(0)(_,e,!1,null,null,null);t.default=c.exports}});