webpackJsonp([4],{"9bBU":function(e,t,r){r("mClu");var n=r("FeBl").Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},C4MV:function(e,t,r){e.exports={default:r("9bBU"),__esModule:!0}},CWjW:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),s=r.n(n),a=r("exGp"),u=r.n(a),c=r("bOdI"),i=r.n(c),o=r("lrRS"),d=r("oAV5"),v={data:function(){var e;return{course:(e={name:"",description:"",id:""},i()(e,"name",""),i()(e,"teacher",""),i()(e,"time",""),e),isSubscribe:!1}},methods:{getCourseInfo:function(){var e=this;return u()(s.a.mark(function t(){var r,n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.d)(e.$route.params.id);case 2:r=t.sent,n=r.data.data,a=Object(d.a)(n.startDay,n.endDay),e.course=n,e.course.time=a;case 7:case"end":return t.stop()}},t,e)}))()},jumpToStudy:function(){var e=this;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setStudentSubs();case 2:e.$router.push({name:"study",params:{id:e.course.id}});case 3:case"end":return t.stop()}},t,e)}))()},getStudentSubs:function(){var e=this;return u()(s.a.mark(function t(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.f)();case 2:r=t.sent,e.isSubscribe=r.data.data.courseIds.includes(e.$route.params.id);case 4:case"end":return t.stop()}},t,e)}))()},setStudentSubs:function(){var e=this;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.l)(e.$route.params.id);case 2:case"end":return t.stop()}},t,e)}))()},handleUnSubs:function(){var e=this;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.j)(e.course.id);case 2:return t.next=4,e.getStudentSubs();case 4:case"end":return t.stop()}},t,e)}))()},checkIsTeacher:function(){"teacher"===this.$store.state.account.role&&this.$router.push({name:"study",params:{id:this.course.id}})}},created:function(){},mounted:function(){var e=this;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getStudentSubs();case 2:return t.next=4,e.getCourseInfo();case 4:e.checkIsTeacher();case 5:case"end":return t.stop()}},t,e)}))()}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mainarea"},[r("header",{staticClass:"ct"},[r("h1",[e._v(e._s(e.course.name))]),e._v(" "),r("div",[e.isSubscribe?r("el-button",{attrs:{type:"primary"},on:{click:e.handleUnSubs}},[r("span",[e._v("UnSubscribe")])]):e._e(),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.jumpToStudy}},[e.isSubscribe?r("div",[r("span",[e._v("Learn")])]):r("span",[e._v("Subscribe")])])],1)]),e._v(" "),r("div",{staticClass:"box"},[r("div",{staticClass:"left"},[r("div",{staticClass:"courseImg",style:{backgroundImage:"url("+e.course.imageUrl+")"}}),e._v(" "),r("h2",[e._v("Description")]),e._v(" "),r("div",[r("span",{staticStyle:{"font-size":"20px"}},[e._v(e._s(e.course.description))])])]),e._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"righttop"},[r("span",[e._v(e._s(e.course.id))]),e._v(" "),r("span",[e._v(e._s(e.course.name))]),e._v(" "),r("span",[e._v("Online")])]),e._v(" "),r("div",{staticClass:"rightcenter"},[r("div",[r("span",{staticStyle:{"font-size":"1.2rem"}},[e._v("teacher:"+e._s(e.course.teacher))])]),e._v(" "),r("el-divider"),e._v(" "),r("div",[r("span",{staticStyle:{"font-size":"1.2rem"}},[e._v("Time: "+e._s(e.course.time))])])],1)])])])},staticRenderFns:[]};var p=r("VU/8")(v,f,!1,function(e){r("VhhQ")},"data-v-1ac3ab62",null);t.default=p.exports},VhhQ:function(e,t){},bOdI:function(e,t,r){"use strict";t.__esModule=!0;var n,s=r("C4MV"),a=(n=s)&&n.__esModule?n:{default:n};t.default=function(e,t,r){return t in e?(0,a.default)(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},mClu:function(e,t,r){var n=r("kM2E");n(n.S+n.F*!r("+E39"),"Object",{defineProperty:r("evD5").f})}});
//# sourceMappingURL=4.6f21647166ca0f1ddc82.js.map