webpackJsonp([1],{"7eBH":function(e,t){},NDvA:function(e,t){},OJbv:function(e,t){},SBIZ:function(e,t){},hZy5:function(e,t){},lIre:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("lHA8"),n=a.n(r),o=a("Xxa5"),i=a.n(o),s=a("exGp"),l=a.n(s),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("header",[t("el-button",{attrs:{type:"primary"},on:{click:this.upload}},[this._v("上传")])],1),this._v(" "),t("ul",{staticClass:"main"},[this._t("default")],2)])},staticRenderFns:[]};var c=a("VU/8")({name:"FileManage",data:function(){return{currentPath:"全部"}},methods:{upload:function(){this.$emit("upload")}}},u,!1,function(e){a("wHNf")},"data-v-7b3cc256",null).exports,d=a("bzuE"),f={name:"FileItem",props:{file:Object},data:function(){return{}},methods:{download:function(){var e=d.a.baseURL+"/resource/"+this.$route.params.id+"/"+this.file.path;window.open(e)}}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("li",{on:{click:this.download}},[this._t("default")],2)},staticRenderFns:[]};var h=a("VU/8")(f,p,!1,function(e){a("OJbv")},"data-v-3ae26413",null).exports,m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("li",{on:{click:this.openSub}},[this._t("title")],2),this._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:this.showSub,expression:"showSub"}]},[this._t("default")],2)])},staticRenderFns:[]};var v=a("VU/8")({data:function(){return{showSub:!1}},methods:{openSub:function(){this.showSub=!this.showSub}}},m,!1,function(e){a("7eBH")},"data-v-13fc9eb3",null).exports,g={name:"iconSymbol",props:{iconClass:{type:String,required:!0}},computed:{iconTag:function(){return"#icon-"+this.iconClass}}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"iconbody"},[t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":this.iconTag?this.iconTag:"unknow"}})]),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var b={name:"ReSubItem",components:{SubFileItem:v,FileItem:h,Icon:a("VU/8")(g,_,!1,function(e){a("hZy5")},"data-v-50553068",null).exports},props:{data:{type:Object,default:function(){return{}}},methods:{}},data:function(){return{}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("SubFileItem",{scopedSlots:e._u([{key:"title",fn:function(){return[a("Icon",{attrs:{iconClass:e.data.type}},[e._v(e._s(e.data.name))])]},proxy:!0}])},[e._v(" "),e._l(e.data.children,function(t){return[t.children?a("ReSubItem",{key:t.id,attrs:{data:t}}):a("FileItem",{key:t.id,attrs:{file:t}},[a("Icon",{attrs:{iconClass:t.type}},[e._v(" "+e._s(t.name))])],1)]})],2)},staticRenderFns:[]};var w=a("VU/8")(b,y,!1,function(e){a("NDvA")},"data-v-43a46fd8",null).exports,x=a("cKc3");var F=a("xFZT"),I={components:{FileManage:c,FileItem:h,ReSubItem:w},data:function(){return{fileList:[],uploadFiles:[],uploadDialog:!1,folderDiaglog:!1,form:{folderName:""},defaultProps:{children:"children",label:"name"},currentPath:"",currentFile:null}},mounted:function(){var e=this;return l()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource();case 2:case"end":return t.stop()}},t,e)}))()},methods:{getResource:function(){var e=this;return l()(i.a.mark(function t(){var a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r=e.$route.params.id,x.a.get("/resource/resource",{params:{courseId:r}});case 2:a=t.sent,e.fileList=a.data.data.resourceTree;case 4:case"end":return t.stop()}var r},t,e)}))()},upload:function(){this.uploadDialog=!0},confirmupload:function(){var e=this;return l()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(F.b)(e.currentFile,e.$route.params.id,e.currentPath);case 2:return t.next=4,e.getResource();case 4:e.uploadFiles=[],e.currentFile=null,e.uploadDialog=!1;case 7:case"end":return t.stop()}},t,e)}))()},doFilter:function(){this.$nextTick(function(){this.$refs.tree.filter()})},handleNodeClick:function(e){this.currentPath=e.path},filterNode:function(e,t){return"folder"===t.type},uploadFile:function(e){var t=this;return l()(i.a.mark(function a(){var r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.currentFile=e,r=(r=e.file.name).replace(/.+\./,""),a.next=5,n={courseId:t.$route.params.id,fileName:e.file.name,path:t.currentPath,type:r},x.a.post("/resource/preUpload",{path:n.path,courseId:n.courseId,fileName:n.fileName,fileType:n.type});case 5:a.sent;case 6:case"end":return a.stop()}var n},a,t)}))()},addNewFoler:function(){var e=this;return l()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a={courseId:e.$route.params.id,folderName:e.form.folderName,path:e.currentPath},x.a.post("/resource/folder",{path:a.path,courseId:a.courseId,folderName:a.folderName});case 2:if(!t.sent.data.success){t.next=7;break}return e.$message({type:"success",message:"添加成功"}),t.next=7,e.getResource();case 7:e.folderDiaglog=!1,e.uploadDialog=!1;case 9:case"end":return t.stop()}var a},t,e)}))()},openFolderDialog:function(){""===this.currentPath?this.$message({message:"当前路径为空",type:"warning"}):this.folderDiaglog=!0},handleRemove:function(e,t){var a=this;return l()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r={path:a.currentPath,fileName:e.name,courseId:a.$route.params.id},x.a.post("/resource/preRemove",{path:r.path,courseId:r.courseId,fileName:r.fileName});case 2:t.sent;case 3:case"end":return t.stop()}var r},t,a)}))()},handleExceed:function(e,t){this.$message.warning("当前限制选择 1 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},BeforeUpload:function(e){var t=new n.a(["image/png","image/jpg","image/gif","text/plain"]);return""===this.currentPath&&this.$message({message:"当前路径为空",type:"warning"}),t.has(e.type)&&this.$message({message:"不支持所选类型",type:"warning"}),""!==this.currentPath&&!t.has(e.type)}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("FileManage",{on:{upload:e.upload}},[e._l(e.fileList,function(t){return[t.children?a("ReSubItem",{key:t.id,attrs:{data:t}}):a("FileItem",{key:t.id,attrs:{file:t}},[a("div",[a("Icon",{attrs:{iconClass:t.type}},[e._v(e._s(t.name))])],1)])]})],2),e._v(" "),a("el-dialog",{attrs:{title:"上传文件",visible:e.uploadDialog,width:"80%"},on:{"update:visible":function(t){e.uploadDialog=t},open:e.doFilter}},[a("div",[a("div",{staticStyle:{padding:"0.5rem"}},[a("p",[a("span",[e._v("当前路径: "+e._s(e.currentPath))])]),e._v(" "),a("el-tree",{ref:"tree",attrs:{data:e.fileList,props:e.defaultProps,"default-expand-all":"","filter-node-method":e.filterNode},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),a("div",{staticStyle:{padding:"0.5rem"}},[a("el-upload",{attrs:{action:"/resource","http-request":e.uploadFile,"on-exceed":e.handleExceed,"on-remove":e.handleRemove,"before-upload":e.BeforeUpload,"file-list":e.uploadFiles,limit:1,multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传文件")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary"},on:{click:function(t){return t.stopPropagation(),e.openFolderDialog(t)}}},[e._v("新建文件夹")])],1)],1),e._v(" "),a("div",[a("el-dialog",{attrs:{title:"新建文件夹",visible:e.folderDiaglog,width:"80%","append-to-body":""},on:{"update:visible":function(t){e.folderDiaglog=t}}},[a("el-form",{ref:"form",attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"文件夹名"}},[a("el-input",{model:{value:e.form.folderName,callback:function(t){e.$set(e.form,"folderName",t)},expression:"form.folderName"}})],1)],1),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.folderDiaglog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addNewFoler}},[e._v("确 定")])],1)],1)],1)]),e._v(" "),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.uploadDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmupload}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var N=a("VU/8")(I,k,!1,function(e){a("SBIZ")},null,null);t.default=N.exports},wHNf:function(e,t){},xFZT:function(e,t,a){"use strict";t.a=function(e){var t=new FormData;return t.append("avatar",e.file),r.a.post("/upload/avatar",t)},t.b=function(e,t,a){var n=new FormData;return n.append("courseId",t),n.append("path",a),n.append("resource",e.file),r.a.post("/resource/upload",n)};var r=a("cKc3")}});
//# sourceMappingURL=1.54bb6b6ecebff52a7720.js.map