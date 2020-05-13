<template>
	<div style="height: 100%;width: 100%;">
		<me-input type="text" leftText="地区" v-model="inputvalue"></me-input>
		<van-button type="default" @click="toMap">按地图查找</van-button>
	</div>
</template>

<script>
	export default {
		name: "demo",
		data() {
			return{
				inputvalue: '浦东软件园郭守敬园21号楼'
			}
		},
		mounted() {
		},
		methods: {
			toMap () {
				this.$router.push({
					path: '/wxMap',
					query: {
						inputvalue: this.inputvalue
					}
				})
			}
		}
	}
</script>

<style scoped>
</style>

<style lang="less">
</style>