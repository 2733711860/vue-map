(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4569"],{9095:function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{height:"40px",display:"flex","justify-content":"center","align-items":"center"}},[t._v("剩余抽奖次数："+t._s(t.lotteryTime))]),i("me-lottery",{attrs:{list:t.list,prize:t.prize,lotteryTime:t.lotteryTime},on:{success:t.success}})],1)},s=[],r={data(){return{list:[{title:"谢谢参与"},{title:"一等奖"},{title:"二等奖"},{title:"三等奖"},{title:"四等奖"},{title:"五等奖"},{title:"六等级"},{title:"七等奖"}],prize:6,lotteryTime:2}},methods:{success(){this.lotteryTime--,console.log("中奖结果："+this.list[this.prize].title)}}},c=r,n=i("e90a"),o=Object(n["a"])(c,l,s,!1,null,"7d1f750c",null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e4569.6fac7952.js.map