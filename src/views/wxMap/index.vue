<template>
	<div class="map_page">
		<div id="container"></div>
    <div class="map_search">
			<van-search
		    background="rgba(0, 0, 0, .1)"
		    placeholder="请输入搜索关键词"
		    @click="showPopup=true"
		  />
		</div>

		<me-popup v-model='showPopup' position="bottom">
			<van-search
		    background="rgba(0, 0, 0, .1)"
		    placeholder="请输入搜索关键词"
		  />
		  <me-cell name="浦东软件园" value=""></me-cell>
		  <me-cell name="陆家嘴软件园" value=""></me-cell>
		  <me-cell name="张江高科" value=""></me-cell>
		</me-popup>
	</div>
</template>

<script>
export default {
	data () {
		return {
			map: '',
			myValue: '',
			showPopup: false,
			local: ''
		}
	},
	mounted () {
		this.map = new BMap.Map("container");          // 创建地图实例     // 初始化地图，设置中心点坐标和地图级别
    this.map.centerAndZoom("上海",13);
    this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    this.map.addControl(new BMap.GeolocationControl({
    	anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
    })); // 定位
    this.map.addControl(new BMap.NavigationControl({
    	anchor: BMAP_ANCHOR_BOTTOM_LEFT,
    	type: BMAP_NAVIGATION_CONTROL_LARGE,
    	enableGeolocation: true
    })); // 缩放

    this.local = new BMap.LocalSearch(this.map, { // 搜索
			renderOptions:{map: this.map}
		});

		if (this.$route.query.inputvalue && this.$route.query.inputvalue != '') {
			this.local.search(this.$route.query.inputvalue);
			// 这个地方可调getmarksList方法，获取关键字周围的站点
		} else {
			this.getNowPos() // 获取当前位置
		}
  },
  methods: {
//	getSearch() { // 自动加载搜索功能
//		let _this = this
//		var ac = new BMap.Autocomplete({
//				"input" : "mapsearch",
//				"location" : this.map
//			});
//			ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
//				var str = "";
//				var _value = e.fromitem.value;
//				var value = "";
//				if (e.fromitem.index > -1) {
//					value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
//				}
//				str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
//
//				value = "";
//				if (e.toitem.index > -1) {
//					_value = e.toitem.value;
//					value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
//				}
//				str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
//				console.log(str)
//				document.getElementById("searchResultPanel").innerHTML = str;
//			});
//
//			ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
//				var _value = e.item.value;
//				_this.myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
//				document.getElementById("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + _this.myValue;
//				_this.setPlace();
//			});
//	},
//	setPlace(){
//		let _this = this
//			this.map.clearOverlays();    //清除地图上所有覆盖物
//			function myFun(){
//				var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
//				_this.map.centerAndZoom(pp, 18);
//				_this.map.addOverlay(new BMap.Marker(pp));    //添加标注
//			}
//			var local = new BMap.LocalSearch(this.map, { //智能搜索
//			  onSearchComplete: myFun
//			});
//			local.search(this.myValue);
//		},



  	getNowPos () { // 获取当前位置
  		var _this = this
  		var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          _this.map.addOverlay(mk);//标出所在地
          _this.map.panTo(r.point);//地图中心移动
          var point = new BMap.Point(r.point.lng,r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
          var gc = new BMap.Geocoder();
          gc.getLocation(point, function(rs){
            var addComp = rs.addressComponents;
            _this.getmarksList("province="+addComp['province']);
          });
        }else {
          alert('failed'+this.getStatus());
        }
      },{enableHighAccuracy: true})
  	},

  	// 获取站点集合
  	getmarksList (urlData) {
  		let result=[
		    {
		    	"id":"515",
			    "province":"\u6e56\u5317\u7701",
			    "area":"\u5b9c\u660c",
			    "shopname":"\u77e5\u6765\u667a\u80fd\u79d1\u6280",
			    "shopaddr":"\u6e56\u5317\u7701\u5b9c\u660c\u5e02\u5747\u7476\u5e7f\u573a\u4e00\u697c\u77e5\u6765\u667a\u80fd\u4f53\u9a8c\u9986",
			    "location":"111.31098109196,30.732757818026"
		    },{
		    	"id":"516",
		    	"province":"\u6e56\u5317\u7701",
		    	"area":"\u6b66\u6c49",
		    	"shopname":"\u6b66\u6c49\u89e3\u653e\u5927\u9053\u4f18\u8da3\u5e97",
		    	"shopaddr":"\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u6c5f\u6c49\u533a\u89e3\u653e\u5927\u9053557\u53f7\u4e2d\u5c71\u5e7f\u573a1\u697c\u82cf\u5b81\u6613\u8d2d\u4f18\u8da3",
		    	"location":"114.27613872848,30.587851596764"
		    },{"id":"517","province":"\u6e56\u5317\u7701","area":"\u6b66\u6c49","shopname":"\u6b66\u6c49\u5149\u8c37\u4f18\u8da3\u5e97","shopaddr":"\u6e56\u5317\u7701\u6b66\u6c49\u5e02\u6d2a\u5c71\u533a\u6c11\u9662\u8def\u5149\u8c37\u5e7f\u573a\u8d44\u672c\u5927\u53a6\u8d1f\u4e00\u697c\u82cf\u5b81\u6613\u8d2d","location":"114.40624298256,30.510448272271"},{"id":"518","province":"\u6e56\u5317\u7701","area":"\u8944\u9633","shopname":"\u8d35\u53cb\u7535\u5668\u6709\u9650\u516c\u53f8","shopaddr":"\u6e56\u5317\u7701\u8944\u9633\u5e02\u6a0a\u57ce\u533a\u6625\u5143\u8def8\u53f7\u73b0\u4ee3\u57ce\u6570\u7801\u6e2f\u4e00\u697c1038\u53f7","location":"112.14366834884,32.058976142962"},{"id":"519","province":"\u6e56\u5317\u7701","area":"\u5341\u5830","shopname":"\u9f0e\u5174\u6295\u5f71\u79d1\u6280\u6709\u9650\u516c\u53f8","shopaddr":"\u6e56\u5317\u7701\u5341\u5830\u5e02\u5f20\u6e7e\u533a\u516d\u5830\u6cf0\u5f18\u7535\u8111\u57ce\u4e8c\u697cA\u533a45\u53f7","location":"110.7906542215,32.661244015944"},{"id":"520","province":"\u6e56\u5317\u7701","area":"\u6069\u65bd","shopname":"\u5dde\u987a\u5174\u8fbe\u7535\u8111\u6709\u9650\u516c\u53f8","shopaddr":"\u6e56\u5317\u7701\u6069\u65bd\u5dde\u56fd\u6cf0\u5927\u53a62\u697c\u987a\u8fbe\u7535\u8111","location":"109.4926968993,30.278629959823"},{"id":"521","province":"\u6e56\u5317\u7701","area":"\u8346\u5dde","shopname":"\u767e\u4fe1\u7535\u8111","shopaddr":"\u6e56\u5317\u7701\u8346\u5dde\u5e02\u6c99\u5e02\u533a\u7ea2\u95e8\u8def\u98de\u817e\u6570\u7801\u5e7f\u573a\u4e8c\u697c2008\u53f7\uff08\u8346\u5dde\u767e\u4fe1\u7535\u8111\uff09","location":"112.26757444672,30.312061976048"},{"id":"522","province":"\u6e56\u5317\u7701","area":"\u76d1\u5229","shopname":"\u8bba\u7c73\u667a\u6167\u5c45\u5bb6\u751f\u6d3b\u9986","shopaddr":"\u6e56\u5317\u7701\u8346\u5dde\u5e02\u76d1\u5229\u767e\u665f\u5e7f\u573a\u4e8c\u697c296\u53f7","location":"113.0019564425,29.848933249111"}];
      let reg=eval(result);
      if(reg.length<1){
        return false;
      }
      this.getLocal(reg)
  	},

  	getLocal(reg){ // 在地图中显示站点
  		let _this = this
      _this.map.clearOverlays();
      var pointsView = [];
      for(var i=0;i<reg.length;i++){
        var n=i+1;
        var p= reg[i]['location'].split(',');
        var point = new BMap.Point(p[0],p[1]);
        pointsView.push(point);

        var content ="<p style='font-weight:600'>"+reg[i].shopname+"</p><p style='line-height: 20px;'>地址："+reg[i].shopaddr+"</p>";
        var myIcon = new BMap.Icon("bd1.png", new BMap.Size(21, 33), {
          offset: new BMap.Size(10, 25), // 指定定位位置
        });
        var  marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注
        var  marker = new BMap.Marker(point);        // 创建标注
        var label = new BMap.Label(n,{
            offset : new BMap.Size(0,3)
        });
        label.setStyle({
            width:'21px',background:'none',color:'#fff',border:'none',textAlign:'center'//只要对label样式进行设置就可达到在标注图标上显示数字的效果
        });
        marker.setLabel(label);//显示地理名称 a
        _this.map.addOverlay(marker);
        _this.addClickHandler(content,marker);
      }
      //让所有点在视野范围内
      _this.map.setViewport(pointsView);
    },

    addClickHandler(content,marker){ // 点击站点
   		let _this = this
      marker.addEventListener("click",function(e){
        marker.setAnimation(null);
        _this.openInfo(content,e);
      });
    },

    openInfo(content,e){ // 弹出marker
    	var opts = {
        width : 250,     // 信息窗口宽度
        height: 50,     // 信息窗口高度
        title : "" , // 信息窗口标题
        enableMessage:true//设置允许信息窗发送短息
    	};
      var p = e.target;
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
      this.map.openInfoWindow(infoWindow,point); //开启信息窗口
    },

    //移动到某一坐标点
    to(i,x,y,shopname,shopaddr){
        var allOverlay = map.getOverlays();
        var last=allOverlay.length-1;
        this.map.removeOverlay(allOverlay[last]);
        var point=new BMap.Point(x,y);
        this.map.centerAndZoom(point,15);
        var myIcon = new BMap.Icon("bd2.png", new BMap.Size(21, 33), {
            offset: new BMap.Size(10, 25), // 指定定位位置
        });
        var  marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注
        var n=i+1;
        var label = new BMap.Label(n,{ // 设置定位图标里的数字
            offset : new BMap.Size(0,3)
        });
        label.setStyle({
            width:'21px',background:'none',color:'#fff',border:'none',textAlign:'center'//只要对label样式进行设置就可达到在标注图标上显示数字的效果
        });
        marker.setLabel(label);//显示地理名称 a
        this.map.addOverlay(marker);
        var content ="<p style='font-weight:600'>"+shopname+"</p><p style='line-height: 20px;'>地址："+shopaddr+"</p>";
        this.addClickHandler(content,marker);
    }
  }
}
</script>

<style scoped="scoped">
	.map_page{
		height: 100%;
		display: flex;
		flex-flow: column;
		overflow: hidden;
	}
	#container{
		width: 100%;
		flex: 1;
		overflow: hidden;
		position: relative;
		z-index: 0;
		background-color: rgb(243, 241, 236);
		color: rgb(0, 0, 0);
		text-align:left;
	}
	.map_search{
		height: 55px;
		width: 100%;
	}
</style>