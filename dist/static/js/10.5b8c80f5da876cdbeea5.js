webpackJsonp([10],{"Yf++":function(e,r,t){"use strict";r.a=function(e){return n.a.post("/homework/newhomework",{name:e.name,courseId:e.courseId,startTime:e.startTime,endTime:e.endTime,questions:e.questions})},r.c=function(e){return n.a.get("/homework/homework",{params:{courseId:e}})},r.d=function(e){return n.a.get("/homework/getbyid",{params:{homeworkId:e}})},r.e=function(e){return n.a.post("/homework/submit",{homeworkId:e.homeworkId,grade:e.grade})},r.b=function(e){return n.a.get("homework/status",{params:{homeworkId:e}})};var n=t("cKc3")},a7WE:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("Xxa5"),o=t.n(n),a=t("exGp"),s=t.n(a),i=t("Yf++"),u={data:function(){return{homework:{name:""},form:{questions:[]},disable:!1}},mounted:function(){var e=this;return s()(o.a.mark(function r(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.getHomeWork();case 2:case"end":return r.stop()}},r,e)}))()},methods:{getHomeWork:function(){var e=this;return s()(o.a.mark(function r(){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(i.d)(e.$route.params.id);case 2:for(t=r.sent,e.homework=t.data.data,e.disable=new Date(e.homework.endTime).getTime()<(new Date).getTime()||"未完成"!==e.$route.params.status,n=0;n<e.homework.questions.length;n++)a=e.homework.questions[n],e.form.questions.push({options:a.options.split("/"),myanswer:"",answer:a.answer,id:a.id,value:a.value});case 6:case"end":return r.stop()}},r,e)}))()},finishHomework:function(){var e=this;return s()(o.a.mark(function r(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e.$refs.form.validate(function(){var r=s()(o.a.mark(function r(t){var n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=8;break}return n=e.getGrade(),r.next=4,Object(i.e)({homeworkId:e.$route.params.homeworkid,grade:n});case 4:r.sent.data.success&&(e.$message({type:"success",message:"提交成功"}),e.$router.push({name:"homework"})),r.next=9;break;case 8:return r.abrupt("return",!1);case 9:case"end":return r.stop()}},r,e)}));return function(e){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}},r,e)}))()},getGrade:function(){for(var e=0,r=0;r<this.form.questions.length;r++)this.form.questions[r].answer===this.form.questions[r].myanswer&&e++;return e}}},m={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("header",[t("h3",[e._v(e._s(e.homework.name))])]),e._v(" "),t("main",[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[e._l(e.form.questions,function(r,n){return t("el-form-item",{key:r.id,attrs:{label:"问题"+(n+1),prop:"questions."+n+".myanswer",rules:{required:!0,message:"答案不能为空",trigger:"blur"}}},[t("p",[t("span",[e._v(e._s(r.value))])]),e._v(" "),t("el-radio-group",{attrs:{disabled:e.disable},model:{value:r.myanswer,callback:function(t){e.$set(r,"myanswer",t)},expression:"question.myanswer"}},[t("el-radio",{attrs:{label:0}},[e._v("A: "+e._s(r.options[0]))]),e._v(" "),t("el-radio",{attrs:{label:1}},[e._v("B: "+e._s(r.options[1]))]),e._v(" "),t("el-radio",{attrs:{label:2}},[e._v("C: "+e._s(r.options[2]))]),e._v(" "),t("el-radio",{attrs:{label:3}},[e._v("D: "+e._s(r.options[3]))])],1)],1)}),e._v(" "),t("el-form-item",[t("el-button",{attrs:{disabled:e.disable,type:"primary"},on:{click:e.finishHomework}},[e._v("提交")])],1)],2)],1)])},staticRenderFns:[]};var c=t("VU/8")(u,m,!1,function(e){t("uOJ0")},"data-v-3acc5444",null);r.default=c.exports},uOJ0:function(e,r){}});
//# sourceMappingURL=10.5b8c80f5da876cdbeea5.js.map