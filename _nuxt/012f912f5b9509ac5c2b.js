(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1223:function(t,e,n){"use strict";var o=n(588);n.n(o).a},1224:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,"@page{size:landscape}.contract-view[data-v-702073d5]{width:100%;height:100%;position:relative}.content-view[data-v-702073d5]{position:relative;width:1040px;min-height:650px;margin:0 auto;padding:20px 30px}.content-view-title[data-v-702073d5]{width:100%;height:42px}.content-view-info[data-v-702073d5]{width:100%;height:190px;margin-top:35px}.content-view-info>.view-info-name[data-v-702073d5]{float:left;width:34%;font-size:15px}.content-view-info>.view-info-name>.view-info-dv[data-v-702073d5]{padding-bottom:5px}.content-view-remind[data-v-702073d5]{margin-top:100px}.remind-ul>.reminder-list[data-v-702073d5]{font-size:14px}.el-table th>.cell[data-v-702073d5]{font-size:10px}.content-view-seal[data-v-702073d5]{position:absolute;bottom:150px;right:200px}.sure-buy[data-v-702073d5]{width:420px;height:200px;position:absolute;left:50%;margin-left:-150px;top:300px;background:#fff;z-index:2;border:1px solid #eaeaea}.sure-buy .remind-title[data-v-702073d5]{font-size:18px;color:#303133;font-weight:400;padding-left:17px;border-bottom:1px solid #eaeaea;line-height:47px}.btn[data-v-702073d5]{position:absolute;right:15px;bottom:15px}",""])},1293:function(t,e,n){"use strict";n.r(e);n(36),n(29);var o=n(3),l=n(5),r=n(6),c=(n(4),n(7)),d=n.n(c);function v(t){return t<10?"0"+t:t}var f={data:function(){return{pdfurl:"",downLoadname:"",allData:{},tableData:[],comfirmBtn:!0,infoBean:{buyer:"",date:"",payType:"",tel:"",orderId:"",receiver:"",address:"",contactPhone:"",manager:"",managerTel:"",shippingAddress:"",bankAccount:"",managerMail:"",bankAddress:"",fare:"",totalPrice:"",goodsTotalPrice:"",seller:"",products:[]},showbox:!1,remindList:["1、付款方式：对公账户付款，款到发货，付款后请及时回传付款凭证；","2、送货方式：普通快递或物流配送；","3、供货周期：款到后7个工作日内发货（非常备商品除外）；","4、发票：请提供详细的开票资料，我们将开具13%的增值税专用发票给您；","5、验收：甲方收到产品应立即核对规格、数量、外包装等情况，如与本合同约定不符，甲方应妥善保管货物并在收货后二天内告知乙方以便及时协商解决。","6、售后：保修期按照品牌方产品售后条款执行。"]}},components:{},computed:{},mounted:function(){this.$route.query&&this.queryOfferOrder(this.$route.query.id),this.downLoad()},methods:{queryOfferOrder:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={orderId:e},t.next=3,Object(r.a)(this,l.a.getOrderContract,n,"GET");case 3:(o=t.sent)&&(this.allData=o.data,this.infoBean=o.data,this.tableData=o.data.products,this.tableData.forEach(function(t){t.price=t.price.toFixed(2),t.totalPrice=t.totalPrice.toFixed(2)}),this.infoBean.totalPrice=this.infoBean.totalPrice.toFixed(2),this.infoBean.fare=this.infoBean.fare.toFixed(2),this.infoBean.goodsTotalPrice=this.infoBean.goodsTotalPrice.toFixed(2),this.infoBean.date=(c=this.infoBean.date,time=void 0,d=void 0,f=void 0,_=void 0,h=void 0,w=void 0,s=void 0,time=new Date(c),d=time.getFullYear(),f=time.getMonth()+1,_=time.getDate(),h=time.getHours(),w=time.getMinutes(),s=time.getSeconds(),d+"-"+v(f)+"-"+v(_)+" "+v(h)+":"+v(w)+":"+v(s)));case 5:case"end":return t.stop()}var c,time,d,f,_,h,w,s},t,this)}));return function(e){return t.apply(this,arguments)}}(),goback:function(){this.$router.go(-1)},downLoad:function(){var t=this,e="Bearer"+window.localStorage.getItem("ACCESS_TOKEN");d.a.get(l.a.downloadOrderContract+"?orderId="+this.$route.query.id,{headers:{Authorization:e},responseType:"blob"}).then(function(e){new Date;var n=new Blob([e.data],{type:"application/pdf"});n.fileName="xxxxxxxxxxxxxxx";var o=URL.createObjectURL(n);URL.createObjectURL(n);t.pdfurl=o,t.downLoadname="toolmall-"+t.$route.query.id;var l={name:t.downLoadname};AnalysysAgent.track("main201201",l)}).catch(function(t){return t})}}},_=(n(1223),n(20)),component=Object(_.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contract-view"},[n("div",{attrs:{id:"contract_content"}},[n("div",{staticClass:"content-view"},[t._m(0),t._v(" "),n("ul",{staticClass:"content-view-info"},[n("li",{staticClass:"view-info-name"},[n("div",{staticClass:"view-info-dv"},[t._v("购 买 方 ：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.buyer))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("付款方式：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.payType))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("收 货 人 ：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.receiver))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("联系方式：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.contactPhone))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("收货地址：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.shippingAddress))])])]),t._v(" "),n("li",{staticClass:"view-info-name"},[n("div",{staticClass:"view-info-dv"},[t._v("销 售 方 ：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.seller))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("热线电话：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.tel))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("地      址：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.address))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("开户银行：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.bankAddress))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("银行卡号：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.bankAccount))])])]),t._v(" "),n("li",{staticClass:"view-info-name",staticStyle:{width:"22%","padding-left":"80px"}},[n("div",{staticClass:"view-info-dv"},[t._v("采购时间：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.date))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("订 单 号 ：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.orderId))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("客户经理：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.manager))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("经理电话：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.managerTel))])]),t._v(" "),n("div",{staticClass:"view-info-dv"},[t._v("经理邮箱：\n            "),n("span",{staticStyle:{color:"black"}},[t._v(t._s(t.infoBean.managerMail))])])])]),t._v(" "),n("div",{staticClass:"contentview_table"},[n("el-table",{staticStyle:{width:"1100px","font-size":"12px"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{resizable:!1,prop:"num",label:"序号",width:"50px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),n("el-table-column",{attrs:{resizable:!1,prop:"productId",label:"商品编号",width:"100px",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{resizable:!1,prop:"productName",label:"商品名称",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{resizable:!1,prop:"brand",label:"品牌",width:"100px",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{resizable:!1,prop:"model",label:"制造商型号",width:"100px",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{resizable:!1,prop:"unit",label:"单位",width:"60px",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{resizable:!1,prop:"num",label:"数量",width:"60px",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{resizable:!1,prop:"price",label:"单价(元)",width:"100px",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{resizable:!1,prop:"totalPrice",label:"商品金额",width:"100px",align:"center"}})],1)],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px",float:"right",color:"black","font-size":"14px","text-align":"right"}},[n("div",[t._v("商品总金额："+t._s(t.infoBean.goodsTotalPrice)+"元")]),t._v(" "),n("div",[t._v("运费："+t._s(t.infoBean.fare)+"元")]),t._v(" "),n("div",[t._v("订单金额："+t._s(t.infoBean.totalPrice)+"元")])]),t._v(" "),n("div",{staticClass:"content-view-remind"},[n("div",{staticStyle:{color:"red","font-size":"14px"}},[t._v("温馨提醒")]),t._v(" "),n("ul",{staticClass:"remind-ul"},t._l(t.remindList,function(e){return n("li",{key:e,staticClass:"reminder-list"},[n("div",[t._v(t._s(e))])])}),0)]),t._v(" "),t._e()])]),t._v(" "),n("div",[n("a",{attrs:{href:t.pdfurl,target:"_blank",download:t.downLoadname}},[n("el-button",{ref:"downloadbtn",staticStyle:{width:"100px",position:"absolute",top:"20px",left:"20px"},attrs:{type:"primary"}},[t._v("下载")])],1),t._v(" "),n("el-button",{staticStyle:{width:"100px",position:"absolute",top:"70px",left:"20px"},attrs:{type:"primary"},on:{click:t.goback}},[t._v("返回")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showbox,expression:"showbox"}],staticClass:"sure-buy"},[n("h3",{staticClass:"remind-title"},[t._v("温馨提示")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"content-view-title"},[e("li",{staticStyle:{"text-align":"center","font-size":"24px",color:"black"}},[e("h1",[this._v("销售合同")])])])}],!1,null,"702073d5",null);component.options.__file="viewContract.vue";e.default=component.exports},588:function(t,e,n){var content=n(1224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("454f9ec8",content,!0,{sourceMap:!1})}}]);