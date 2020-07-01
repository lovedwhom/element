<template>
  <div id="app">
    <el-container class="home-container">
      <el-header>element</el-header>
      <el-container>
        <el-aside>
         <Menus></Menus>
        </el-aside>
        <el-main class="home-main">
          <router-view/>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
  import Menus from "@/components/menus/index.vue"
  // import Menus from '@/components/menus/';

export default {
  name: 'app',
  components: {
    Menus
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
#app {
  & ::v-deep .el-header{

  }
  & ::v-deep .el-container{
    &.home-container{
       height:100vh
    }
   
  }

  & ::v-deep .el-main{
    &.home-main{
      border-width:1px 0 0 1px;
      border-style: solid none none solid;
  
      border-color:#efefef;
    }
  }
 
}
</style>
