(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19a12b0d"],{"19e8":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"map_page"},[t("div",{attrs:{id:"container"}}),t("div",{staticClass:"map_search"},[t("van-search",{attrs:{background:"rgba(0, 0, 0, .1)",placeholder:"请输入搜索关键词",disabled:""},on:{click:function(a){e.showPopup=!0}}})],1),t("me-popup",{attrs:{position:"bottom"},model:{value:e.showPopup,callback:function(a){e.showPopup=a},expression:"showPopup"}},[t("van-search",{attrs:{background:"rgba(0, 0, 0, .1)",placeholder:"请输入搜索关键词"},model:{value:e.searchValue,callback:function(a){e.searchValue=a},expression:"searchValue"}}),e._l(e.resultList,(function(a,o){return t("me-cell",{key:o,attrs:{name:a.title,value:""},on:{click:function(t){return e.goThis(a)}}})}))],2)],1)},n=[],i=t("b0f6"),r=i["a"],s=(t("a27a"),t("e90a")),p=Object(s["a"])(r,o,n,!1,null,"00525c86",null);a["default"]=p.exports},"492b":function(e,a,t){},a27a:function(e,a,t){"use strict";var o=t("492b"),n=t.n(o);n.a},b0f6:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={data(){return{map:"",showPopup:!1,local:"",searchValue:"",resultList:[]}},mounted(){this.map=new BMap.Map("container"),this.map.centerAndZoom("上海",13),this.map.enableScrollWheelZoom(!0),this.map.addControl(new BMap.GeolocationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT})),this.map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE,enableGeolocation:!0}));let e=this;this.local=new BMap.LocalSearch(this.map,{renderOptions:{map:this.map},onSearchComplete:function(a){if(e.local.getStatus()==BMAP_STATUS_SUCCESS){for(var t=[],o=0;o<a.getCurrentNumPois();o++)t.push({title:a.getPoi(o).title,address:a.getPoi(o).address,point:a.getPoi(o).point,detailUrl:a.getPoi(o).detailUrl});e.resultList=t}}}),this.$route.query.inputvalue&&""!=this.$route.query.inputvalue?this.local.search(this.$route.query.inputvalue):this.getNowPos()},watch:{searchValue(){this.searchVa()}},methods:{searchVa(){this.local.search(this.searchValue)},goThis(e){let a=this;this.map.clearOverlays(),this.showPopup=!1,this.map.centerAndZoom(e.point,18);var t=new BMap.Marker(e.point);this.map.addOverlay(t),t.addEventListener("click",(function(o){var n="<p style='font-weight:600'>"+e.title+"</p><p style='line-height: 20px;'>地址："+e.address+"</p>";t.setAnimation(null),a.openInfo(n,o)}))},getNowPos(){var e=this,a=new BMap.Geolocation;a.getCurrentPosition((function(a){if(this.getStatus()==BMAP_STATUS_SUCCESS){var t=new BMap.Marker(a.point);e.map.addOverlay(t),e.map.panTo(a.point);var o=new BMap.Point(a.point.lng,a.point.lat),n=new BMap.Geocoder;n.getLocation(o,(function(a){var t=a.addressComponents;e.getmarksList("province="+t["province"])}))}else alert("failed"+this.getStatus())}),{enableHighAccuracy:!0})},getmarksList(urlData){let result=[{id:"515",province:"湖北省",area:"宜昌",shopname:"知来智能科技",shopaddr:"湖北省宜昌市均瑶广场一楼知来智能体验馆",location:"111.31098109196,30.732757818026"},{id:"516",province:"湖北省",area:"武汉",shopname:"武汉解放大道优趣店",shopaddr:"湖北省武汉市江汉区解放大道557号中山广场1楼苏宁易购优趣",location:"114.27613872848,30.587851596764"},{id:"517",province:"湖北省",area:"武汉",shopname:"武汉光谷优趣店",shopaddr:"湖北省武汉市洪山区民院路光谷广场资本大厦负一楼苏宁易购",location:"114.40624298256,30.510448272271"},{id:"518",province:"湖北省",area:"襄阳",shopname:"贵友电器有限公司",shopaddr:"湖北省襄阳市樊城区春元路8号现代城数码港一楼1038号",location:"112.14366834884,32.058976142962"},{id:"519",province:"湖北省",area:"十堰",shopname:"鼎兴投影科技有限公司",shopaddr:"湖北省十堰市张湾区六堰泰弘电脑城二楼A区45号",location:"110.7906542215,32.661244015944"},{id:"520",province:"湖北省",area:"恩施",shopname:"州顺兴达电脑有限公司",shopaddr:"湖北省恩施州国泰大厦2楼顺达电脑",location:"109.4926968993,30.278629959823"},{id:"521",province:"湖北省",area:"荆州",shopname:"百信电脑",shopaddr:"湖北省荆州市沙市区红门路飞腾数码广场二楼2008号（荆州百信电脑）",location:"112.26757444672,30.312061976048"},{id:"522",province:"湖北省",area:"监利",shopname:"论米智慧居家生活馆",shopaddr:"湖北省荆州市监利百晟广场二楼296号",location:"113.0019564425,29.848933249111"}],reg=eval(result);if(reg.length<1)return!1;this.getLocal(reg)},getLocal(e){let a=this;a.map.clearOverlays();for(var t=[],o=0;o<e.length;o++){var n=o+1,i=e[o]["location"].split(","),r=new BMap.Point(i[0],i[1]);t.push(r);var s="<p style='font-weight:600'>"+e[o].shopname+"</p><p style='line-height: 20px;'>地址："+e[o].shopaddr+"</p>",p=new BMap.Icon("bd1.png",new BMap.Size(21,33),{offset:new BMap.Size(10,25)}),l=new BMap.Marker(r,{icon:p}),c=(l=new BMap.Marker(r),new BMap.Label(n,{offset:new BMap.Size(0,3)}));c.setStyle({width:"21px",background:"none",color:"#fff",border:"none",textAlign:"center"}),l.setLabel(c),a.map.addOverlay(l),a.addClickHandler(s,l)}a.map.setViewport(t)},addClickHandler(e,a){let t=this;a.addEventListener("click",(function(o){a.setAnimation(null),t.openInfo(e,o)}))},openInfo(e,a){var t={width:250,height:50,title:"",enableMessage:!0},o=a.target,n=new BMap.Point(o.getPosition().lng,o.getPosition().lat),i=new BMap.InfoWindow(e,t);this.map.openInfoWindow(i,n)},to(e,a,t,o,n){var i=map.getOverlays(),r=i.length-1;this.map.removeOverlay(i[r]);var s=new BMap.Point(a,t);this.map.centerAndZoom(s,15);var p=new BMap.Icon("bd2.png",new BMap.Size(21,33),{offset:new BMap.Size(10,25)}),l=new BMap.Marker(s,{icon:p}),c=e+1,h=new BMap.Label(c,{offset:new BMap.Size(0,3)});h.setStyle({width:"21px",background:"none",color:"#fff",border:"none",textAlign:"center"}),l.setLabel(h),this.map.addOverlay(l);var d="<p style='font-weight:600'>"+o+"</p><p style='line-height: 20px;'>地址："+n+"</p>";this.addClickHandler(d,l)}}}}}]);
//# sourceMappingURL=chunk-19a12b0d.fc645a5b.js.map