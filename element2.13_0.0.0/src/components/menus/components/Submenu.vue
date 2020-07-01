<template>
	<div>
		<template  v-for="(item,index) in menusData">
			<el-submenu v-if="item.childrren&&item.chilgren.length>1" :key="index">
				<template slot="title">
			          <i class="el-icon-location"></i>
			          <span>{{item.name}}</span>
				</template>
				<submenu :menusData=ite.children></submenu>
			</el-submenu>
			<el-menu-item v-else
				:index="item.path"
				:key="item.path"
			>
				<span slot="title">{{item.name}}</span>
			</el-menu-item>
		</template>
	
	</div>
		
</template>


<script>
export default {

  name: 'menu-item',
  props:{
	menusData:{
		type:Array
	}
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.el-menu-item+.el-menu-item{
	border-top: 1px solid #fff;
}
</style>
