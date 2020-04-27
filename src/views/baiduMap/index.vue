<template>
	<div style="height: 100%;width: 100%;">
		<!--地图模块-->
		<baidu-map class="map" id="mapID" center="上海市" :zoom="zoom" :scroll-wheel-zoom="true" @click="getPoint" >
		  <!--地图搜索功能，绑定上面的input，-->
		  <bm-control :offset="{width: '10px', height: '10px'}">
		    <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 1}">
		    	<input  placeholder="请输入地名关键字" />
		    </bm-auto-complete>
		  </bm-control>
		  <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>

		  <!--缩放-->
		  <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
		  <!--定位-->
		  <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>

			<!--特殊点-->
		  <bml-marker-clusterer :averageCenter="true">
		    <bm-marker v-for="(marker,index) of markers" :key="index" :position="{lng: marker.lng, lat: marker.lat}" @click="choose">
		    	<bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" style="font-size: 14px">
		    	<div style="height: 25px;line-height: 25px;">地址：{{marker.address}}</div>
		    	<div style="color: blue;">详情>></div>
		    </bm-info-window>
		    </bm-marker>
		  </bml-marker-clusterer>

		  <!--信息窗口，show属性是控制显示隐藏，infoWindowClose和infoWindowOpen是控制信息窗口关闭隐藏的方法-->
		  <!--<bm-marker :position="postionMap" >
		    <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" style="font-size: 14px">
		    	<div style="height: 25px;line-height: 25px;">地址：{{add.address}}</div>
		    	<div style="color: blue;">详情>></div>
		    </bm-info-window>
		  </bm-marker>-->
		</baidu-map>

	</div>
</template>

<script>
	import {BmlMarkerClusterer} from 'vue-baidu-map'
	export default {
		name: "demo",
		components: {
	    BmlMarkerClusterer
	 },
		data() {
			return{
        show: false,
        keyword: '',  //搜索框关键词
        zoom: 15,   //放大比例
        markers: [
        	{lng: 121.490331, lat: 31.242833, address: '南京东路'},
        	{lng: 121.479278, lat: 31.238786, address: '人民广场'},
        	{lng: 121.466556, lat: 31.236027, address: '南京西路'},
        	{lng: 121.499031, lat: 31.231588, address: '上海城隍庙'}
        ],
			}
		},
		mounted() {
		},
		methods: {
			getPoint(e){    //点击地图获取一些信息，
		    var geocoder= new BMap.Geocoder();  //创建地址解析器的实例
		    geocoder.getLocation(e.point,rs=>{
		    	console.log(rs)
		    });
		  },
		  infoWindowClose () {
		    this.show = false
		  },
		  infoWindowOpen () {
		  },
		  choose(e) { // 点击特殊点
		  	this.show = true
		  },
		  markersset(aa) { // 搜索回调
//		  	console.log(aa)
		  }
		}
	}
</script>

<style scoped>
	.map {
		width: 100%;
		height: 100%;
	}
</style>

<style lang="less">
	.left_slide_center_nav .center_maskk{
		background: rgba(51, 51, 51, 0) !important;
	}
</style>