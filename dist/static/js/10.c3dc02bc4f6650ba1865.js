webpackJsonp([10],{EVfD:function(e,t){},"Yf++":function(e,t,r){"use strict";t.a=function(e){return n.a.post("/homework/newhomework",{name:e.name,courseId:e.courseId,startTime:e.startTime,endTime:e.endTime,questions:e.questions})},t.c=function(e){return n.a.get("/homework/homework",{params:{courseId:e}})},t.d=function(e){return n.a.get("/homework/getbyid",{params:{homeworkId:e}})},t.e=function(e){return n.a.post("/homework/submit",{homeworkId:e.homeworkId,grade:e.grade})},t.b=function(e){return n.a.get("homework/status",{params:{homeworkId:e}})};var n=r("cKc3")},a7WE:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),a=r.n(n),s=r("exGp"),o=r.n(s),u=r("Yf++"),i={data:function(){return{homework:{name:""},form:{questions:[]},disable:!1,status:"未完成"}},mounted:function(){var e=this;return o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getStatus();case 2:return t.next=4,e.getHomeWork();case 4:case"end":return t.stop()}},t,e)}))()},methods:{getHomeWork:function(){var e=this;return o()(a.a.mark(function t(){var r,n,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.d)(e.$route.params.homeworkid);case 2:for(r=t.sent,e.homework=r.data.data,e.disable=new Date(e.homework.endTime).getTime()<(new Date).getTime()||"未完成"!=e.status,n=0;n<e.homework.questions.length;n++)s=e.homework.questions[n],e.form.questions.push({options:s.options.split("/"),myanswer:"",answer:s.answer,id:s.id,value:s.value});case 6:case"end":return t.stop()}},t,e)}))()},finishHomework:function(){var e=this;return o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$refs.form.validate(function(){var t=o()(a.a.mark(function t(r){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=8;break}return n=e.getGrade(),t.next=4,Object(u.e)({homeworkId:e.$route.params.homeworkid,grade:n});case 4:t.sent.data.success&&(e.$message({type:"success",message:"提交成功"}),e.$router.push({name:"homework"})),t.next=9;break;case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t,e)}))()},getGrade:function(){for(var e=0,t=0;t<this.form.questions.length;t++)this.form.questions[t].answer===this.form.questions[t].myanswer&&e++;return e},getStatus:function(){var e=this;return o()(a.a.mark(function t(){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.b)(e.$route.params.homeworkid);case 2:r=t.sent,e.status=r.data.data.status;case 4:case"end":return t.stop()}},t,e)}))()}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",[r("h3",[e._v(e._s(e.homework.name))])]),e._v(" "),r("main",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[e._l(e.form.questions,function(t,n){return r("el-form-item",{key:t.id,attrs:{label:"问题"+(n+1),prop:"questions."+n+".myanswer",rules:{required:!0,message:"答案不能为空",trigger:"blur"}}},[r("p",[r("span",[e._v(e._s(t.value))])]),e._v(" "),r("el-radio-group",{attrs:{disabled:e.disable},model:{value:t.myanswer,callback:function(r){e.$set(t,"myanswer",r)},expression:"question.myanswer"}},[r("el-radio",{attrs:{label:0}},[e._v("A: "+e._s(t.options[0]))]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("B: "+e._s(t.options[1]))]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("C: "+e._s(t.options[2]))]),e._v(" "),r("el-radio",{attrs:{label:3}},[e._v("D: "+e._s(t.options[3]))])],1)],1)}),e._v(" "),r("el-form-item",[r("el-button",{attrs:{disabled:e.disable,type:"primary"},on:{click:e.finishHomework}},[e._v("提交")])],1)],2)],1)])},staticRenderFns:[]};var c=r("VU/8")(i,m,!1,function(e){r("EVfD")},"data-v-422b774b",null);t.default=c.exports}});
//# sourceMappingURL=10.c3dc02bc4f6650ba1865.js.map