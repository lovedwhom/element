<template>
	<div>
		<el-dropdown trigger="click"
			@click="handleClick"
			@command="handleCommand"
			split-button
			type="primary"
		>
		 更多菜单
			<!--  <el-button type="primary">
			    更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
			  </el-button> -->
			<el-dropdown-menu slot=""dropdown>
				<el-dropdown-item command='1'>1</el-dropdown-item>
				<el-dropdown-item command='2'>2</el-dropdown-item>
				<el-dropdown-item command='3'>3</el-dropdown-item>
				<el-dropdown-item command='4'>4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
    export default {
        name: "index",
        methods:{
        	handleClick(){
        		this.$message('click on ')
        	},
        	handleCommand(command){
        		this.$message('click on ' + command)
        	}
        }
    }
</script>

<style scoped>

</style>
