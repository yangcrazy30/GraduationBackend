webpackHotUpdate(0,{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/study/pages/question/question.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(\"./node_modules/babel-runtime/regenerator/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(\"./node_modules/babel-runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_chatRemain__ = __webpack_require__(\"./src/components/chatRemain.vue\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_chatBox__ = __webpack_require__(\"./src/components/chatBox.vue\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  components: { chatRemain: __WEBPACK_IMPORTED_MODULE_2_components_chatRemain__[\"a\" /* default */], chatBox: __WEBPACK_IMPORTED_MODULE_3_components_chatBox__[\"a\" /* default */] },\n  data: function data() {\n    return {\n      modal: false,\n      userInfos: [{ username: \"ZEO\", id: \"1\" }],\n      currentChat: { username: \"\", id: \"\" },\n      message: \"\",\n      chats: [{\n        id: 1,\n        type: 0,\n        name: \"yzy\",\n        fmtime: \"2020-2-2\",\n        message: \"这是测试信息\"\n      }, {\n        id: 2,\n        type: 1,\n        name: \"yzy\",\n        fmtime: \"2020-2-2\",\n        message: \"这是测试信息\"\n      }]\n    };\n  },\n\n  methods: {\n    handleChat: function handleChat(userInfo) {\n      this.currentChat = userInfo;\n    },\n\n    select: function select(chatbox) {\n      if (chatbox.type == 0) {\n        return {\n          onleft: false,\n          onright: true\n        };\n      } else {\n        return {\n          onleft: true,\n          onright: false\n        };\n      }\n    },\n    sendMessage: function sendMessage() {\n      this.$socket.emit(\"sendmessage\", this.currentChat.id);\n      console.log(\"send\");\n    }\n  },\n  sockets: {\n    receivemessage: function () {\n      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {\n        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function receivemessage() {\n        return _ref.apply(this, arguments);\n      }\n\n      return receivemessage;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL3ZpZXdzL3N0dWR5L3BhZ2VzL3F1ZXN0aW9uL3F1ZXN0aW9uLnZ1ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9xdWVzdGlvbi52dWU/OWMyYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNsZWZ0XCI+XG4gICAgICAgIDxjaGF0UmVtYWluXG4gICAgICAgICAgdi1mb3I9XCJpdGVtIGluIHVzZXJJbmZvc1wiXG4gICAgICAgICAgOmtleT1cIml0ZW0uaWRcIlxuICAgICAgICAgIDp1c2VySW5mbz1cIml0ZW1cIlxuICAgICAgICAgIHYtb246Y2xpY2submF0aXZlPVwiaGFuZGxlQ2hhdChpdGVtKVwiXG4gICAgICAgID48L2NoYXRSZW1haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRoZWFkXCI+XG4gICAgICAgICAgPHNwYW4+e3sgY3VycmVudENoYXQudXNlcm5hbWUgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdGFyZWFcIj5cbiAgICAgICAgICA8Y2hhdEJveFxuICAgICAgICAgICAgdi1mb3I9XCJjaGF0Ym94IGluIGNoYXRzXCJcbiAgICAgICAgICAgIDpOYW1lPVwiY2hhdGJveC5uYW1lXCJcbiAgICAgICAgICAgIDpUaW1lPVwiY2hhdGJveC5mbXRpbWVcIlxuICAgICAgICAgICAgOkNvbnRlbnQ9XCJjaGF0Ym94Lm1lc3NhZ2VcIlxuICAgICAgICAgICAgOmtleT1cImNoYXRib3guaWRcIlxuICAgICAgICAgICAgdi1iaW5kOmNsYXNzPVwic2VsZWN0KGNoYXRib3gpXCJcbiAgICAgICAgICA+PC9jaGF0Qm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRpdGVtXCIgc3R5bGU9XCJmbGV4LWJhc2lzOjc1JVwiPlxuICAgICAgICAgICAgPGVsLWlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGVhc2UgSW5wdXRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgPjwvZWwtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0aXRlbVwiIHN0eWxlPVwiZmxleC1iYXNpczoyNSVcIj5cbiAgICAgICAgICAgIDxlbC1idXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJzZW5kTWVzc2FnZVwiXG4gICAgICAgICAgICAgIDpkaXNhYmxlZD1cImN1cnJlbnRDaGF0LmlkID09PSAnJ1wiXG4gICAgICAgICAgICAgID5TZW5kPC9lbC1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGNoYXRSZW1haW4gZnJvbSBcImNvbXBvbmVudHMvY2hhdFJlbWFpblwiO1xuaW1wb3J0IGNoYXRCb3ggZnJvbSBcImNvbXBvbmVudHMvY2hhdEJveFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IGNoYXRSZW1haW4sIGNoYXRCb3ggfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgdXNlckluZm9zOiBbeyB1c2VybmFtZTogXCJaRU9cIiwgaWQ6IFwiMVwiIH1dLFxuICAgICAgY3VycmVudENoYXQ6IHsgdXNlcm5hbWU6IFwiXCIsIGlkOiBcIlwiIH0sXG4gICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgY2hhdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHR5cGU6IDAsXG4gICAgICAgICAgbmFtZTogXCJ5enlcIixcbiAgICAgICAgICBmbXRpbWU6IFwiMjAyMC0yLTJcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIui/meaYr+a1i+ivleS/oeaBr1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgIG5hbWU6IFwieXp5XCIsXG4gICAgICAgICAgZm10aW1lOiBcIjIwMjAtMi0yXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCLov5nmmK/mtYvor5Xkv6Hmga9cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZUNoYXQodXNlckluZm8pIHtcbiAgICAgIHRoaXMuY3VycmVudENoYXQgPSB1c2VySW5mbztcbiAgICB9LFxuICAgIHNlbGVjdDogZnVuY3Rpb24oY2hhdGJveCkge1xuICAgICAgaWYgKGNoYXRib3gudHlwZSA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgb25sZWZ0OiBmYWxzZSxcbiAgICAgICAgICBvbnJpZ2h0OiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG9ubGVmdDogdHJ1ZSxcbiAgICAgICAgICBvbnJpZ2h0OiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgc2VuZE1lc3NhZ2UoKSB7XG4gICAgICB0aGlzLiRzb2NrZXQuZW1pdChcInNlbmRtZXNzYWdlXCIsIHRoaXMuY3VycmVudENoYXQuaWQpO1xuICAgICAgY29uc29sZS5sb2coXCJzZW5kXCIpO1xuICAgIH1cbiAgfSxcbiAgc29ja2V0czoge1xuICAgIHJlY2VpdmVtZXNzYWdlOiBhc3luYyBmdW5jdGlvbigpIHt9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ib3gge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjcwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmNsZWZ0IHtcbiAgZmxleC1iYXNpczogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNyaWdodCB7XG4gIGZsZXgtYmFzaXM6IDc1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jaGF0aGVhZCB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGF0YXJlYSB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb290IHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmlucHV0aXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub25sZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwJTtcbiAgYmFja2dyb3VuZDogcmdiKDE3MSwgMTU1LCAyMTYpO1xufVxuXG4ub25yaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNzAlO1xuICBiYWNrZ3JvdW5kOiBjb3JuZmxvd2VyYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHF1ZXN0aW9uLnZ1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWJBO0FBc0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXNCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFoREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/study/pages/question/question.vue\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-82ab8d18\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/views/study/pages/question/question.vue":
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(\"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.box[data-v-82ab8d18] {\\n  min-height: calc(100vh - 270px);\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  width: 60%;\\n}\\n.cleft[data-v-82ab8d18] {\\n  -ms-flex-preferred-size: 25%;\\n      flex-basis: 25%;\\n  background-color: white;\\n  overflow: hidden;\\n}\\n.cright[data-v-82ab8d18] {\\n  -ms-flex-preferred-size: 75%;\\n      flex-basis: 75%;\\n  background-color: white;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n}\\n.chathead[data-v-82ab8d18] {\\n  height: 50px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.chatarea[data-v-82ab8d18] {\\n  -webkit-box-flex: 1;\\n      -ms-flex: 1;\\n          flex: 1;\\n  overflow: hidden;\\n}\\n.foot[data-v-82ab8d18] {\\n  height: 100px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n}\\n.inputitem[data-v-82ab8d18] {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n}\\n.onleft[data-v-82ab8d18] {\\n  position: relative;\\n  left: 0%;\\n  background: rgb(171, 155, 216);\\n}\\n.onright[data-v-82ab8d18] {\\n  position: relative;\\n  left: 70%;\\n  background: cornflowerblue;\\n  color: #fff;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/Users/zeo/Documents/GraduationProject/GraduationFront/src/views/study/pages/question/src/views/study/pages/question/question.vue\"],\"names\":[],\"mappings\":\";AAyGA;EACA,gCAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;EAAA,8BAAA;MAAA,wBAAA;UAAA,oBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,WAAA;CACA;AAEA;EACA,6BAAA;MAAA,gBAAA;EACA,wBAAA;EACA,iBAAA;CACA;AAEA;EACA,6BAAA;MAAA,gBAAA;EACA,wBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,6BAAA;EAAA,8BAAA;MAAA,2BAAA;UAAA,uBAAA;CACA;AAEA;EACA,aAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;EAAA,8BAAA;MAAA,wBAAA;UAAA,oBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;CACA;AAEA;EACA,oBAAA;MAAA,YAAA;UAAA,QAAA;EACA,iBAAA;CACA;AAEA;EACA,cAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;EAAA,8BAAA;MAAA,wBAAA;UAAA,oBAAA;CACA;AAEA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,+BAAA;EAAA,8BAAA;MAAA,wBAAA;UAAA,oBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;CACA;AAEA;EACA,mBAAA;EACA,SAAA;EACA,+BAAA;CACA;AAEA;EACA,mBAAA;EACA,UAAA;EACA,2BAAA;EACA,YAAA;CACA\",\"file\":\"question.vue\",\"sourcesContent\":[\"<template>\\n  <div class=\\\"box\\\">\\n    <div>\\n      <div class=\\\"cleft\\\">\\n        <chatRemain\\n          v-for=\\\"item in userInfos\\\"\\n          :key=\\\"item.id\\\"\\n          :userInfo=\\\"item\\\"\\n          v-on:click.native=\\\"handleChat(item)\\\"\\n        ></chatRemain>\\n      </div>\\n      <div class=\\\"cright\\\">\\n        <div class=\\\"chathead\\\">\\n          <span>{{ currentChat.username }}</span>\\n        </div>\\n        <div class=\\\"chatarea\\\">\\n          <chatBox\\n            v-for=\\\"chatbox in chats\\\"\\n            :Name=\\\"chatbox.name\\\"\\n            :Time=\\\"chatbox.fmtime\\\"\\n            :Content=\\\"chatbox.message\\\"\\n            :key=\\\"chatbox.id\\\"\\n            v-bind:class=\\\"select(chatbox)\\\"\\n          ></chatBox>\\n        </div>\\n        <div class=\\\"foot\\\">\\n          <div class=\\\"inputitem\\\" style=\\\"flex-basis:75%\\\">\\n            <el-input\\n              v-model=\\\"message\\\"\\n              placeholder=\\\"Please Input\\\"\\n              type=\\\"textarea\\\"\\n            ></el-input>\\n          </div>\\n          <div class=\\\"inputitem\\\" style=\\\"flex-basis:25%\\\">\\n            <el-button\\n              type=\\\"primary\\\"\\n              @click=\\\"sendMessage\\\"\\n              :disabled=\\\"currentChat.id === ''\\\"\\n              >Send</el-button\\n            >\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</template>\\n\\n<script>\\nimport chatRemain from \\\"components/chatRemain\\\";\\nimport chatBox from \\\"components/chatBox\\\";\\nexport default {\\n  components: { chatRemain, chatBox },\\n  data() {\\n    return {\\n      modal: false,\\n      userInfos: [{ username: \\\"ZEO\\\", id: \\\"1\\\" }],\\n      currentChat: { username: \\\"\\\", id: \\\"\\\" },\\n      message: \\\"\\\",\\n      chats: [\\n        {\\n          id: 1,\\n          type: 0,\\n          name: \\\"yzy\\\",\\n          fmtime: \\\"2020-2-2\\\",\\n          message: \\\"这是测试信息\\\"\\n        },\\n        {\\n          id: 2,\\n          type: 1,\\n          name: \\\"yzy\\\",\\n          fmtime: \\\"2020-2-2\\\",\\n          message: \\\"这是测试信息\\\"\\n        }\\n      ]\\n    };\\n  },\\n  methods: {\\n    handleChat(userInfo) {\\n      this.currentChat = userInfo;\\n    },\\n    select: function(chatbox) {\\n      if (chatbox.type == 0) {\\n        return {\\n          onleft: false,\\n          onright: true\\n        };\\n      } else {\\n        return {\\n          onleft: true,\\n          onright: false\\n        };\\n      }\\n    },\\n    sendMessage() {\\n      this.$socket.emit(\\\"sendmessage\\\", this.currentChat.id);\\n      console.log(\\\"send\\\");\\n    }\\n  },\\n  sockets: {\\n    receivemessage: async function() {}\\n  }\\n};\\n</script>\\n\\n<style scoped>\\n.box {\\n  min-height: calc(100vh - 270px);\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  width: 60%;\\n}\\n\\n.cleft {\\n  flex-basis: 25%;\\n  background-color: white;\\n  overflow: hidden;\\n}\\n\\n.cright {\\n  flex-basis: 75%;\\n  background-color: white;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.chathead {\\n  height: 50px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.chatarea {\\n  flex: 1;\\n  overflow: hidden;\\n}\\n\\n.foot {\\n  height: 100px;\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.inputitem {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.onleft {\\n  position: relative;\\n  left: 0%;\\n  background: rgb(171, 155, 216);\\n}\\n\\n.onright {\\n  position: relative;\\n  left: 70%;\\n  background: cornflowerblue;\\n  color: #fff;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XCJzb3VyY2VNYXBcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi04MmFiOGQxOFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL3ZpZXdzL3N0dWR5L3BhZ2VzL3F1ZXN0aW9uL3F1ZXN0aW9uLnZ1ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9zdHVkeS9wYWdlcy9xdWVzdGlvbi9xdWVzdGlvbi52dWU/ZjlkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJveFtkYXRhLXYtODJhYjhkMThdIHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNzBweCk7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbn1cXG4uY2xlZnRbZGF0YS12LTgyYWI4ZDE4XSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMjUlO1xcbiAgICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNyaWdodFtkYXRhLXYtODJhYjhkMThdIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgICAgZmxleC1iYXNpczogNzUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNoYXRoZWFkW2RhdGEtdi04MmFiOGQxOF0ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2hhdGFyZWFbZGF0YS12LTgyYWI4ZDE4XSB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZvb3RbZGF0YS12LTgyYWI4ZDE4XSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLmlucHV0aXRlbVtkYXRhLXYtODJhYjhkMThdIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm9ubGVmdFtkYXRhLXYtODJhYjhkMThdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDAlO1xcbiAgYmFja2dyb3VuZDogcmdiKDE3MSwgMTU1LCAyMTYpO1xcbn1cXG4ub25yaWdodFtkYXRhLXYtODJhYjhkMThdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDcwJTtcXG4gIGJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvemVvL0RvY3VtZW50cy9HcmFkdWF0aW9uUHJvamVjdC9HcmFkdWF0aW9uRnJvbnQvc3JjL3ZpZXdzL3N0dWR5L3BhZ2VzL3F1ZXN0aW9uL3NyYy92aWV3cy9zdHVkeS9wYWdlcy9xdWVzdGlvbi9xdWVzdGlvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlHQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSwrQkFBQTtFQUFBLDhCQUFBO01BQUEsd0JBQUE7VUFBQSxvQkFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtFQUNBLFdBQUE7Q0FDQTtBQUVBO0VBQ0EsNkJBQUE7TUFBQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EsNkJBQUE7TUFBQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSw2QkFBQTtFQUFBLDhCQUFBO01BQUEsMkJBQUE7VUFBQSx1QkFBQTtDQUNBO0FBRUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSwrQkFBQTtFQUFBLDhCQUFBO01BQUEsd0JBQUE7VUFBQSxvQkFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtFQUNBLDBCQUFBO01BQUEsdUJBQUE7VUFBQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSxvQkFBQTtNQUFBLFlBQUE7VUFBQSxRQUFBO0VBQ0EsaUJBQUE7Q0FDQTtBQUVBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQUEscUJBQUE7RUFBQSxjQUFBO0VBQ0EsK0JBQUE7RUFBQSw4QkFBQTtNQUFBLHdCQUFBO1VBQUEsb0JBQUE7Q0FDQTtBQUVBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUFBLGNBQUE7RUFDQSwrQkFBQTtFQUFBLDhCQUFBO01BQUEsd0JBQUE7VUFBQSxvQkFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSx3QkFBQTtFQUNBLDBCQUFBO01BQUEsdUJBQUE7VUFBQSxvQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtDQUNBO0FBRUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwicXVlc3Rpb24udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxuICAgIDxkaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2xlZnRcXFwiPlxcbiAgICAgICAgPGNoYXRSZW1haW5cXG4gICAgICAgICAgdi1mb3I9XFxcIml0ZW0gaW4gdXNlckluZm9zXFxcIlxcbiAgICAgICAgICA6a2V5PVxcXCJpdGVtLmlkXFxcIlxcbiAgICAgICAgICA6dXNlckluZm89XFxcIml0ZW1cXFwiXFxuICAgICAgICAgIHYtb246Y2xpY2submF0aXZlPVxcXCJoYW5kbGVDaGF0KGl0ZW0pXFxcIlxcbiAgICAgICAgPjwvY2hhdFJlbWFpbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjcmlnaHRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hhdGhlYWRcXFwiPlxcbiAgICAgICAgICA8c3Bhbj57eyBjdXJyZW50Q2hhdC51c2VybmFtZSB9fTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hhdGFyZWFcXFwiPlxcbiAgICAgICAgICA8Y2hhdEJveFxcbiAgICAgICAgICAgIHYtZm9yPVxcXCJjaGF0Ym94IGluIGNoYXRzXFxcIlxcbiAgICAgICAgICAgIDpOYW1lPVxcXCJjaGF0Ym94Lm5hbWVcXFwiXFxuICAgICAgICAgICAgOlRpbWU9XFxcImNoYXRib3guZm10aW1lXFxcIlxcbiAgICAgICAgICAgIDpDb250ZW50PVxcXCJjaGF0Ym94Lm1lc3NhZ2VcXFwiXFxuICAgICAgICAgICAgOmtleT1cXFwiY2hhdGJveC5pZFxcXCJcXG4gICAgICAgICAgICB2LWJpbmQ6Y2xhc3M9XFxcInNlbGVjdChjaGF0Ym94KVxcXCJcXG4gICAgICAgICAgPjwvY2hhdEJveD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0aXRlbVxcXCIgc3R5bGU9XFxcImZsZXgtYmFzaXM6NzUlXFxcIj5cXG4gICAgICAgICAgICA8ZWwtaW5wdXRcXG4gICAgICAgICAgICAgIHYtbW9kZWw9XFxcIm1lc3NhZ2VcXFwiXFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiUGxlYXNlIElucHV0XFxcIlxcbiAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dGFyZWFcXFwiXFxuICAgICAgICAgICAgPjwvZWwtaW5wdXQ+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dGl0ZW1cXFwiIHN0eWxlPVxcXCJmbGV4LWJhc2lzOjI1JVxcXCI+XFxuICAgICAgICAgICAgPGVsLWJ1dHRvblxcbiAgICAgICAgICAgICAgdHlwZT1cXFwicHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgIEBjbGljaz1cXFwic2VuZE1lc3NhZ2VcXFwiXFxuICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImN1cnJlbnRDaGF0LmlkID09PSAnJ1xcXCJcXG4gICAgICAgICAgICAgID5TZW5kPC9lbC1idXR0b25cXG4gICAgICAgICAgICA+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBjaGF0UmVtYWluIGZyb20gXFxcImNvbXBvbmVudHMvY2hhdFJlbWFpblxcXCI7XFxuaW1wb3J0IGNoYXRCb3ggZnJvbSBcXFwiY29tcG9uZW50cy9jaGF0Qm94XFxcIjtcXG5leHBvcnQgZGVmYXVsdCB7XFxuICBjb21wb25lbnRzOiB7IGNoYXRSZW1haW4sIGNoYXRCb3ggfSxcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgbW9kYWw6IGZhbHNlLFxcbiAgICAgIHVzZXJJbmZvczogW3sgdXNlcm5hbWU6IFxcXCJaRU9cXFwiLCBpZDogXFxcIjFcXFwiIH1dLFxcbiAgICAgIGN1cnJlbnRDaGF0OiB7IHVzZXJuYW1lOiBcXFwiXFxcIiwgaWQ6IFxcXCJcXFwiIH0sXFxuICAgICAgbWVzc2FnZTogXFxcIlxcXCIsXFxuICAgICAgY2hhdHM6IFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgaWQ6IDEsXFxuICAgICAgICAgIHR5cGU6IDAsXFxuICAgICAgICAgIG5hbWU6IFxcXCJ5enlcXFwiLFxcbiAgICAgICAgICBmbXRpbWU6IFxcXCIyMDIwLTItMlxcXCIsXFxuICAgICAgICAgIG1lc3NhZ2U6IFxcXCLov5nmmK/mtYvor5Xkv6Hmga9cXFwiXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBpZDogMixcXG4gICAgICAgICAgdHlwZTogMSxcXG4gICAgICAgICAgbmFtZTogXFxcInl6eVxcXCIsXFxuICAgICAgICAgIGZtdGltZTogXFxcIjIwMjAtMi0yXFxcIixcXG4gICAgICAgICAgbWVzc2FnZTogXFxcIui/meaYr+a1i+ivleS/oeaBr1xcXCJcXG4gICAgICAgIH1cXG4gICAgICBdXFxuICAgIH07XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBoYW5kbGVDaGF0KHVzZXJJbmZvKSB7XFxuICAgICAgdGhpcy5jdXJyZW50Q2hhdCA9IHVzZXJJbmZvO1xcbiAgICB9LFxcbiAgICBzZWxlY3Q6IGZ1bmN0aW9uKGNoYXRib3gpIHtcXG4gICAgICBpZiAoY2hhdGJveC50eXBlID09IDApIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgIG9ubGVmdDogZmFsc2UsXFxuICAgICAgICAgIG9ucmlnaHQ6IHRydWVcXG4gICAgICAgIH07XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgIG9ubGVmdDogdHJ1ZSxcXG4gICAgICAgICAgb25yaWdodDogZmFsc2VcXG4gICAgICAgIH07XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBzZW5kTWVzc2FnZSgpIHtcXG4gICAgICB0aGlzLiRzb2NrZXQuZW1pdChcXFwic2VuZG1lc3NhZ2VcXFwiLCB0aGlzLmN1cnJlbnRDaGF0LmlkKTtcXG4gICAgICBjb25zb2xlLmxvZyhcXFwic2VuZFxcXCIpO1xcbiAgICB9XFxuICB9LFxcbiAgc29ja2V0czoge1xcbiAgICByZWNlaXZlbWVzc2FnZTogYXN5bmMgZnVuY3Rpb24oKSB7fVxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4uYm94IHtcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNzBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmNsZWZ0IHtcXG4gIGZsZXgtYmFzaXM6IDI1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNyaWdodCB7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2hhdGhlYWQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGF0YXJlYSB7XFxuICBmbGV4OiAxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZvb3Qge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uaW5wdXRpdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub25sZWZ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDAlO1xcbiAgYmFja2dyb3VuZDogcmdiKDE3MSwgMTU1LCAyMTYpO1xcbn1cXG5cXG4ub25yaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA3MCU7XFxuICBiYWNrZ3JvdW5kOiBjb3JuZmxvd2VyYmx1ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTgyYWI4ZDE4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3Mvc3R1ZHkvcGFnZXMvcXVlc3Rpb24vcXVlc3Rpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcInNvdXJjZU1hcFwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTgyYWI4ZDE4XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvdmlld3Mvc3R1ZHkvcGFnZXMvcXVlc3Rpb24vcXVlc3Rpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-82ab8d18\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/views/study/pages/question/question.vue\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-82ab8d18\",\"hasScoped\":true,\"transformToRequire\":{\"video\":[\"src\",\"poster\"],\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/study/pages/question/question.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"box\" }, [\n    _c(\"div\", [\n      _c(\n        \"div\",\n        { staticClass: \"cleft\" },\n        _vm._l(_vm.userInfos, function(item) {\n          return _c(\"chatRemain\", {\n            key: item.id,\n            attrs: { userInfo: item },\n            nativeOn: {\n              click: function($event) {\n                return _vm.handleChat(item)\n              }\n            }\n          })\n        }),\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"cright\" }, [\n        _c(\"div\", { staticClass: \"chathead\" }, [\n          _c(\"span\", [_vm._v(_vm._s(_vm.currentChat.username))])\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"chatarea\" },\n          _vm._l(_vm.chats, function(chatbox) {\n            return _c(\"chatBox\", {\n              key: chatbox.id,\n              class: _vm.select(chatbox),\n              attrs: {\n                Name: chatbox.name,\n                Time: chatbox.fmtime,\n                Content: chatbox.message\n              }\n            })\n          }),\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"foot\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"inputitem\", staticStyle: { \"flex-basis\": \"75%\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { placeholder: \"Please Input\", type: \"textarea\" },\n                model: {\n                  value: _vm.message,\n                  callback: function($$v) {\n                    _vm.message = $$v\n                  },\n                  expression: \"message\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"inputitem\", staticStyle: { \"flex-basis\": \"25%\" } },\n            [\n              _c(\n                \"el-button\",\n                {\n                  attrs: {\n                    type: \"primary\",\n                    disabled: _vm.currentChat.id === \"\"\n                  },\n                  on: { click: _vm.sendMessage }\n                },\n                [_vm._v(\"Send\")]\n              )\n            ],\n            1\n          )\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(\"./node_modules/vue-hot-reload-api/dist/index.js\")      .rerender(\"data-v-82ab8d18\", esExports)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi04MmFiOGQxOFwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcInRyYW5zZm9ybVRvUmVxdWlyZVwiOntcInZpZGVvXCI6W1wic3JjXCIsXCJwb3N0ZXJcIl0sXCJzb3VyY2VcIjpcInNyY1wiLFwiaW1nXCI6XCJzcmNcIixcImltYWdlXCI6XCJ4bGluazpocmVmXCJ9LFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvdmlld3Mvc3R1ZHkvcGFnZXMvcXVlc3Rpb24vcXVlc3Rpb24udnVlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0dWR5L3BhZ2VzL3F1ZXN0aW9uL3F1ZXN0aW9uLnZ1ZT83ODUwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2xlZnRcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnVzZXJJbmZvcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImNoYXRSZW1haW5cIiwge1xuICAgICAgICAgICAga2V5OiBpdGVtLmlkLFxuICAgICAgICAgICAgYXR0cnM6IHsgdXNlckluZm86IGl0ZW0gfSxcbiAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZUNoYXQoaXRlbSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3JpZ2h0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXRoZWFkXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uY3VycmVudENoYXQudXNlcm5hbWUpKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2hhdGFyZWFcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0uY2hhdHMsIGZ1bmN0aW9uKGNoYXRib3gpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImNoYXRCb3hcIiwge1xuICAgICAgICAgICAgICBrZXk6IGNoYXRib3guaWQsXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0KGNoYXRib3gpLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIE5hbWU6IGNoYXRib3gubmFtZSxcbiAgICAgICAgICAgICAgICBUaW1lOiBjaGF0Ym94LmZtdGltZSxcbiAgICAgICAgICAgICAgICBDb250ZW50OiBjaGF0Ym94Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9vdFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0aXRlbVwiLCBzdGF0aWNTdHlsZTogeyBcImZsZXgtYmFzaXNcIjogXCI3NSVcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZWwtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIlBsZWFzZSBJbnB1dFwiLCB0eXBlOiBcInRleHRhcmVhXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dGl0ZW1cIiwgc3RhdGljU3R5bGU6IHsgXCJmbGV4LWJhc2lzXCI6IFwiMjUlXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImVsLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmN1cnJlbnRDaGF0LmlkID09PSBcIlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zZW5kTWVzc2FnZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2VuZFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi04MmFiOGQxOFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTgyYWI4ZDE4XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwidHJhbnNmb3JtVG9SZXF1aXJlXCI6e1widmlkZW9cIjpbXCJzcmNcIixcInBvc3RlclwiXSxcInNvdXJjZVwiOlwic3JjXCIsXCJpbWdcIjpcInNyY1wiLFwiaW1hZ2VcIjpcInhsaW5rOmhyZWZcIn0sXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy92aWV3cy9zdHVkeS9wYWdlcy9xdWVzdGlvbi9xdWVzdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtODJhYjhkMThcIixcImhhc1Njb3BlZFwiOnRydWUsXCJ0cmFuc2Zvcm1Ub1JlcXVpcmVcIjp7XCJ2aWRlb1wiOltcInNyY1wiLFwicG9zdGVyXCJdLFwic291cmNlXCI6XCJzcmNcIixcImltZ1wiOlwic3JjXCIsXCJpbWFnZVwiOlwieGxpbms6aHJlZlwifSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL3ZpZXdzL3N0dWR5L3BhZ2VzL3F1ZXN0aW9uL3F1ZXN0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-82ab8d18\",\"hasScoped\":true,\"transformToRequire\":{\"video\":[\"src\",\"poster\"],\"source\":\"src\",\"img\":\"src\",\"image\":\"xlink:href\"},\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/study/pages/question/question.vue\n");

/***/ })

})