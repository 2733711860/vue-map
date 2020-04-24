<template>
	<div style="height: 100%;width: 100%;">
		<baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
			<!--缩放-->
			<bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
			<!--定位-->
			<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true" @locationSuccess="locationSuccess"></bm-geolocation>
			<!--点-->
			<bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
				<!--提示信息-->
				<bm-info-window :show="map.show">{{msg}}</bm-info-window>
			</bm-marker>
		</baidu-map>
	</div>
</template>

<script>
	export default {
		name: "demo",
		data() {
			return{
				map: {
					center: {
						lng: 121.60856,
						lat: 31.211336
					},
					zoom: 15,
					show: true,
					dragging: true,
				},
				msg: '初始地址信息：长泰广场'
			}
		},
		mounted() {
			const handleSuccess = data => {
				const {
					coords, // 位置信息
					timestamp // 成功获取位置信息时的时间戳
				} = data
				const {
					accuracy, // 返回结果的精度（米）
					altitude, // 相对于水平面的高度
					altitudeAccuracy, // 返回高度的精度（米）
					heading, // 主机设备的行进方向，从正北方向顺时针方向
					latitude, // 纬度
					longitude, // 经度
					speed // 设备的行进速度
				} = coords
				// 打印出来看看
				console.log('timestamp =', timestamp)
				console.log('accuracy =', accuracy)
				console.log('altitude =', altitude)
				console.log('altitudeAccuracy =', altitudeAccuracy)
				console.log('heading =', heading)
				alert('纬度 =', latitude)
				alert('经度 =', longitude)
				console.log('speed =', speed)
				this.map.center.lat = latitude
				this.map.center.lng = longitude
			}
			const handleError = error => {
				switch(error.code) {
					case 1:
						console.log('位置服务请求被拒绝')
						break
					case 2:
						console.log('暂时获取不到位置信息')
						break
					case 3:
						console.log('获取信息超时')
						break
					case 4:
						console.log('未知错误')
						break
				}
			}
			const opt = {
				// 高精确度： true / false
				enableHighAccuracy: false,
				// 等待响应的最长时间 单位：毫秒
				timeout: 10 * 1000,
				// 应用程序愿意接受的缓存位置的最大年限
				maximumAge: 0
			}
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(handleSuccess, handleError, opt)
			} else {
				alert('Geolocation is not supported in your browser')
			}
		},
		methods: {
			handler({
				BMap,
				map
			}) {
				let me = this;
				console.log(BMap, map)
				// 鼠标缩放
				map.enableScrollWheelZoom(true);
				// 点击事件获取经纬度
				map.addEventListener('click', function(e) {
					console.log(e.point.lng, e.point.lat)
				})
			},
			locationSuccess({point,AddressComponent,marker}) {
				console.log(point, AddressComponent, marker)
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