(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1358:function(t,e,r){"use strict";r.r(e);r(36),r(29);var n=r(3),o=r(5),c=r(6),d=r(2),l=r(4),h=r(78),v={asyncData:function(t){return{powMap:t.store.state.contain_power}},data:function(){return{orderId:"",createTime:"",beginDate:"",endDate:"",state:"",userName:"",person:"",companyId:"",companyList:[],indexPage:1,pageSize:10,pageCount:0,stateList:[],personList:[],tableData:[],personCenter:{userName:"",headImage:"",level:"",payment:0,shipping:0,receiving:0,offer:0,audit:0,totalAmountMoney:0}}},computed:{companyName:function(){if(this.getUserInfo(this))return this.getUserInfo(this).companyName},userinfo:function(){return this.getUserInfo(this)}},mounted:function(){this.$route.query.stateType&&(this.state=this.$route.query.stateType),this.getCompanys(),this.PurchaseOrderState(),this.selectAllPurchaseOrder(),this.getPersonCenter()},methods:{goorder:function(){this.$router.push({path:"profile/purchaseorders?searchWord="+this.orderId}),this.selectAllPurchaseOrder()},selectAllPurchaseOrder:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={orderId:this.orderId,beginDate:this.beginDate,endDate:this.endDate,orderStatus:this.state,userName:this.userName,companyId:this.companyId,pageNum:this.indexPage,pageSize:this.pageSize},t.next=3,Object(c.a)(this,o.a.AllPurchaseUrl,e);case 3:(r=t.sent)&&(this.tableData=r.data.list,this.tableData&&this.tableData.forEach(function(t){t.gmtCreate=Object(l.k)(t.gmtCreate),t.payTypeName=Object(l.f)(t.payType),t.stateName=Object(l.g)(t.orderStatus),t.totalPrice=t.totalPrice.toFixed(2)}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getCompanys:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.getUserInfo(this),r=e.companyId,t.next=4,Object(h.b)(this,r);case 4:this.companyList=t.sent;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),PurchaseOrderState:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.d)(this);case 2:this.stateList=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),dateChange:function(){this.createTime?(this.beginDate=this.createTime[0],this.endDate=this.createTime[1]):(this.beginDate="",this.endDate="")},handleInfoClick:function(t){this.$router.push({path:"/order/orderdetail/",query:{id:t.orderId}})},handlePayClick:function(t){this.$router.push({path:"/payfororder",name:"confirmorder-payfororder",params:{order:t}})},handleCancelClick:function(t){var e=this;console.log(t,"row"),this.$confirm("是否取消该订单单？","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){e.cancelPurchaseOrder(t)}).catch(function(){})},cancelPurchaseOrder:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={orderId:e.orderId,orderStatus:"close"},t.next=3,Object(c.a)(this,o.a.PurchaseOrderStUrl,r);case 3:t.sent&&(this.selectAllPurchaseOrder(),this.$message.success("取消成功！"));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),confirmreceiptOrder:function(t){var e=this;this.$confirm("是否确认收货该订单？","提示",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){e.goConfirmreceiptOrder(t)}).catch(function(){})},goConfirmreceiptOrder:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={orderId:this.item.orderId,orderStatus:"finish"},t.next=3,Object(c.a)(this,o.a.PurchaseOrderStUrl,r);case 3:t.sent&&this.selectAllPurchaseOrder();case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),handleEditClick:function(t){this.$router.push({path:"/order/editpurchaseorder/",query:{id:t}})},handleOrderClick:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={orderId:this.item.orderId},t.next=3,Object(c.a)(this,o.a.QueryOrderDetailUrl,r);case 3:(n=t.sent)&&this.queryOrderDetail(n.data.list);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),queryOrderDetail:function(t){var e=[];t.forEach(function(t){t.orderId=t.orderId,t.colour=t.specification,t.imageUrl=t.pictureAddress,t.name=t.productName,t.num=t.amount,t.price=t.unitPrice,t.sum=t.unitPrice*t.amount,e.push(t)}),this.$store.commit(d.MutationTypes.RECORD_ORDER_PRODUCTLIST,e),this.$router.push("/confirmorder")},newPurchase:function(){this.$router.push("/")},initData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={},r=o.a.UserInfoUrl,t.next=4,Object(c.a)(this,r,e,"GET");case 4:(n=t.sent)&&(d=n.data,this.username=d.username,this.role=d.role,this.level=d.level,this.payment=d.payment,this.shipping=d.shipping,this.receiving=d.receiving,this.evaluation=d.evaluation,this.matched=d.matched,this.offer=d.offer,this.audit=d.audit,this.balance=d.balance,this.consumption=d.consumption,this.points=d.points);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getPersonCenter:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={},r=o.a.PersonCenter,t.next=4,Object(c.a)(this,r,e,"POST");case 4:(n=t.sent)&&n.data&&(this.personCenter.userName=n.data.userName,this.personCenter.headImage=n.data.headImage,this.personCenter.level=n.data.level,this.personCenter.offer=n.data.offer,this.personCenter.payment=n.data.payment,this.personCenter.shipping=n.data.shipping,this.personCenter.receiving=n.data.receiving,this.personCenter.audit=n.data.audit);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),gotoorder:function(t){this.$router.push({path:"profile/purchaseorders",query:{stateType:t}})},gotQueryOrder:function(){this.$router.push("profile/portqueryorder")},gotVerifyOrder:function(){this.$router.push("profile/purchaseorderaudit")}}},f=(r(805),r(20)),component=Object(f.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topview"},[t._m(0),t._v(" "),n("div",{staticClass:"news",staticStyle:{height:"149px"}},[n("div",{staticClass:"left"},[n("div",{staticClass:"_left"},[n("div",{staticClass:"person_pic"},[n("img",{attrs:{src:t.personCenter.headImage}})])]),t._v(" "),n("div",{staticClass:"_right"},[n("p",{staticStyle:{color:"#000",height:"30px"}},[n("span",{staticClass:"text_drakgray name"},[t._v(t._s(t.userinfo?t.userinfo.userName:""))])]),t._v(" "),n("p",{staticClass:"member"},[t._v("企业会员")])])]),t._v(" "),n("div",{staticClass:"rigth",staticStyle:{width:"698px",float:"right",height:"149px"}},[n("div",{staticClass:"memberinfov_middle"},[n("div",{staticClass:"orderinfoview"},[n("div",{staticClass:"orderinfoitem",on:{click:function(e){return t.gotoorder("propay")}}},[n("img",{staticClass:"icon_img",attrs:{src:r(800)}}),t._v(" "),n("span",{staticClass:"text_drakgray"},[t._v("待付款")]),t._v(" "),n("span",{staticClass:"text_css"},[t._v(t._s(t.personCenter.payment))])]),t._v(" "),n("div",{staticClass:"orderinfoitem",on:{click:function(e){return t.gotoorder("proship")}}},[n("img",{staticClass:"icon_img",attrs:{src:r(801)}}),t._v(" "),n("span",{staticClass:"text_drakgray"},[t._v("待发货")]),t._v(" "),n("span",{staticClass:"text_css"},[t._v(t._s(t.personCenter.shipping))])]),t._v(" "),n("div",{staticClass:"orderinfoitem",on:{click:function(e){return t.gotoorder("proreceipt")}}},[n("img",{staticClass:"icon_img",attrs:{src:r(802)}}),t._v(" "),n("span",{staticClass:"text_drakgray"},[t._v("待收货")]),t._v(" "),n("span",{staticClass:"text_css"},[t._v(t._s(t.personCenter.receiving))])]),t._v(" "),n("div",{staticClass:"orderinfoitem",on:{click:t.gotQueryOrder}},[n("img",{staticClass:"icon_img",attrs:{src:r(803)}}),t._v(" "),n("span",{staticClass:"text_drakgray"},[t._v("已报价")]),t._v(" "),n("span",{staticClass:"text_css"},[t._v(t._s(t.personCenter.offer))])]),t._v(" "),n("div",{staticClass:"orderinfoitem",on:{click:t.gotVerifyOrder}},[n("img",{staticClass:"icon_img",attrs:{src:r(804)}}),t._v(" "),n("span",{staticClass:"text_drakgray"},[t._v("待审核(总部)")]),t._v(" "),n("span",{staticClass:"text_css"},[t._v(t._s(t.personCenter.audit))])])])])])])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.orderId,expression:"orderId"}],staticClass:"search",attrs:{placeholder:"订单编号 / 商品编号 / 商品标题"},domProps:{value:t.orderId},on:{input:function(e){e.target.composing||(t.orderId=e.target.value)}}}),t._v(" "),n("el-button",{staticClass:"searchbtn",on:{click:function(e){return t.goorder()}}},[t._v("搜索")]),t._v(" "),n("span",{staticStyle:{float:"right","margin-top":"30px"}},[t._v(" 如需退款，请致电400-905-7828")]),t._v(" "),n("el-row",{staticClass:"buyerlist"},[n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content "},[t._v("采购人员")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content "},[t._v("商品数量")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content "},[t._v("含税总价（元）")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content "},[t._v("订单状态")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content "},[t._v("收货人")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content "},[t._v("公司名称")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content "},[t._v("支付方式")])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content "},[t._v("操作")])])],1),t._v(" "),t._l(t.tableData.slice(0,5),function(e){return n("div",{key:e.key,staticStyle:{border:"1px solid #f1f1f1","margin-bottom":"20px"}},[n("el-row",{staticClass:"buys"},[n("el-col",{staticStyle:{"margin-left":"20px"},attrs:{span:6}},[n("div",{staticClass:"grid-content "},[t._v("订单时间：\n          "),n("span",{staticStyle:{color:"#343434","padding-left":"30px"},attrs:{prop:"gmtCreate"}},[t._v(t._s(e.gmtCreate))])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content "},[t._v("订单单号：\n          "),n("span",{staticStyle:{color:"#343434"},attrs:{prop:"orderId"}},[t._v(t._s(e.orderId))])])]),t._v(" "),n("el-col",{attrs:{span:9}},[t._v("\n        \n      ")]),t._v(" "),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content "},[n("span",{staticClass:"bluecolor",attrs:{prop:"orderId"}},[t._v("\n                "+t._s(e.status)+"\n          ")])])])],1),t._v(" "),n("el-row",{staticClass:"buylist"},[n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content ",attrs:{prop:"username"}},[t._v(t._s(e.username))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content ",attrs:{prop:"count"}},[t._v(t._s(e.count))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content ",attrs:{prop:"totalPrice"}},[t._v(t._s(e.totalPrice))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content ",class:{redcolor:"待付款"==e.stateName,color:"交易关闭"==e.stateName},attrs:{prop:"stateName"}},[t._v(t._s(e.stateName))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content ",attrs:{prop:"contactPerson"}},[t._v(t._s(e.contactPerson))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content ",staticStyle:{"line-height":"20px","padding-top":"40px"},attrs:{prop:"companyName"}},[t._v(t._s(e.companyName))])]),t._v(" "),n("el-col",{staticClass:"paytype",attrs:{span:3}},[n("div",{staticClass:"grid-content ",attrs:{prop:"payTypeName"}},[t._v(t._s(e.payTypeName))])]),t._v(" "),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content btn "},[n("div",{staticClass:"button"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.powMap.isPurchaseOrderInfo,expression:"powMap.isPurchaseOrderInfo"}],staticClass:"operationStyle order_edit_h",on:{click:function(r){return t.handleInfoClick(e)}}},[t._v("订单详情")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"propay"===e.orderStatus&&t.powMap.isPurchasePayPow,expression:"item.orderStatus === 'propay' && powMap.isPurchasePayPow"}],staticClass:"btn_a order_edit_h",attrs:{type:"text",size:"medium"},on:{click:function(r){return t.handlePayClick(e)}}},[t._v("立即付款")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"propay"===e.orderStatus||"proconfirmed"==e.orderStatus,expression:"(item.orderStatus === 'propay') || (item.orderStatus == 'proconfirmed')"}],staticClass:"operationStyle order_edit_h",on:{click:function(r){return t.handleCancelClick(e)}}},[t._v("取消")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"pending_refuse"===e.orderStatus,expression:"item.orderStatus === 'pending_refuse'"}],staticClass:"operationStyle order_edit_h",on:{click:function(r){return t.handleEditClick(e)}}},[t._v("编辑")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"proreceipt"===e.orderStatus,expression:"item.orderStatus === 'proreceipt'"}],staticClass:"operationStyle order_edit_h",on:{click:function(r){return t.confirmreceiptOrder(e)}}},[t._v("确认收货")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"approve"===e.orderStatus&&t.powMap.isPurchaseSettlePow,expression:"item.orderStatus === 'approve' && powMap.isPurchaseSettlePow"}],staticClass:"operationStyle",on:{click:function(r){return t.handleOrderClick(e)}}},[t._v("提交订单")])])])])],1)],1)})],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",{staticStyle:{"font-size":"14px","margin-left":"20px"}},[this._v("会员中心")])])}],!1,null,"12001d5e",null);component.options.__file="index.vue";e.default=component.exports},508:function(t,e,r){var content=r(806);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("8d62d708",content,!0,{sourceMap:!1})},800:function(t,e,r){t.exports=r.p+"img/736d6db.svg"},801:function(t,e,r){t.exports=r.p+"img/140a415.svg"},802:function(t,e,r){t.exports=r.p+"img/6216f75.svg"},803:function(t,e,r){t.exports=r.p+"img/946aac1.svg"},804:function(t,e,r){t.exports=r.p+"img/da9ba21.svg"},805:function(t,e,r){"use strict";var n=r(508);r.n(n).a},806:function(t,e,r){(t.exports=r(18)(!1)).push([t.i,"*[data-v-12001d5e]{font-size:14px}.topview[data-v-12001d5e]{height:192px;border:1px solid #ececec}.title[data-v-12001d5e]{height:42px;line-height:42px;border-bottom:1px solid #ececec;color:#343434;font-weight:700}.space[data-v-12001d5e]{margin-left:530px;margin-right:70px}.blue[data-v-12001d5e]{color:#0d76e7}.left[data-v-12001d5e]{width:350px}._left[data-v-12001d5e],.left[data-v-12001d5e]{height:149px;float:left}._left[data-v-12001d5e]{width:149px}.name[data-v-12001d5e]{font-size:16px;margin-top:15px;margin-left:10px}.person_pic[data-v-12001d5e]{width:90px;height:90px;margin:30px auto;border-radius:50%}.person_pic img[data-v-12001d5e]{width:100%;height:100%;border-radius:50%;border:0}.icon_img[data-v-12001d5e]{width:32px;height:32px;float:left;margin-right:20px;margin-top:-5px}.text_drakgray[data-v-12001d5e]{font-size:15px;float:left;color:#333;font-family:AppleSystemUIFont}.text_css[data-v-12001d5e]{font-size:16px;margin-left:15px;float:left;color:#b89370}.search[data-v-12001d5e]{width:360px;height:38px;margin-top:19px;color:#454545;margin-left:-1px;border-radius:0;outline:none;padding-left:15px;border:1px solid #f1f1f1}.searchbtn[data-v-12001d5e]{width:115px;height:40px;margin-left:-7px;border-radius:2px;background:#ececec;outline:none;border:none;color:#333}.buys[data-v-12001d5e]{color:#858585;background:#f5f5f5;height:40px;line-height:40px}.buylist[data-v-12001d5e],.buys[data-v-12001d5e]{text-align:center}.buylist[data-v-12001d5e]{color:#343434;height:100px;line-height:100px;margin-top:-20px}.el-row[data-v-12001d5e]{margin-bottom:20px}.el-row[data-v-12001d5e]:last-child{margin-bottom:0}.el-row .grid-content[data-v-12001d5e]{border-radius:4px;min-height:36px}.el-row .bgc-gray[data-v-12001d5e]{background:#f5f5f5}.el-row .operationStyle[data-v-12001d5e]{display:block;text-align:center;width:70%;margin-left:20px}.order_edit_h[data-v-12001d5e]{margin-bottom:8px}.buyerlist[data-v-12001d5e]{color:#858585;background:#f5f5f5;height:40px;line-height:40px;margin-top:20px;text-align:center}.memberinfov_middle[data-v-12001d5e]{width:100%;padding-top:30px;height:auto;display:inline-block!important;display:inline}.paytype[data-v-12001d5e]{border-right:1px solid #f1f1f1;height:100px}._right[data-v-12001d5e]{width:140px;height:92px;float:left;margin-top:28px;border-right:1px solid #ececec}.member[data-v-12001d5e]{margin-top:25px;width:69px;height:22px;background:#b7926e;border-radius:11px;text-align:center;color:#fff}.orderinfoview[data-v-12001d5e]{width:100%;height:auto;display:inline-block!important;display:inline}.orderinfoitem[data-v-12001d5e]{cursor:pointer;text-align:center;width:190px;height:40px;float:left;margin-bottom:30px;margin-right:10px}.btn[data-v-12001d5e]{height:100px;line-height:15px;display:table}.btn[data-v-12001d5e],.button[data-v-12001d5e]{width:100%;vertical-align:middle}.button[data-v-12001d5e]{height:100%;margin:auto;display:table-cell}.btn_a[data-v-12001d5e]{display:block;width:70px;background:#0d76e7;margin-left:30px;padding:4px;color:#fff;border-radius:3px}.bluecolor[data-v-12001d5e]{color:#0d76e7}.redcolor[data-v-12001d5e]{color:#ff1c05}.color[data-v-12001d5e]{color:#86837e}",""])}}]);