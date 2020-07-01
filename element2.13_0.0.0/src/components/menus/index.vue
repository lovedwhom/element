<template>
	<div>
		<!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
		  <el-radio-button :label="false">展开</el-radio-button>
		  <el-radio-button :label="true">收起</el-radio-button>
		</el-radio-group> -->
		<el-menu
			class="el-menu-vertical"
			:background-color="menuStyle.bgCorlor"
			:text-color="menuStyle.color"
			router
		>
			<submenu :menusData="routes"></submenu>
			<!-- <template v-for="item in routes">

				<el-submenu v-if="item.childrren&&item.chilgren.length>1">

				</el-submenu>
				<el-menu-item v-else
					:index="item.path"
				>
					<span slot="title">{{item.name}}</span>
				</el-menu-item>
			</template> -->

		</el-menu>

	</div>

</template>

<script>
	import {routes} from '@/router'
	import Submenu from './components/Submenu'

export default {

  name: 'index',
  components:{
  	Submenu
  },
  data(){
  	return {
  		menuStyle:{
  			color:"#fff",
  			bgCorlor:"#409eff"
  		}
  	}
  },
	computed:{
		routes(){
			return routes
		}
	}
};
</script>

<style lang="scss" scoped>

</style>
