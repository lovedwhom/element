<template>
  <div class="button">
    <div>
         <el-button type="primary" plain >按钮</el-button>
       <el-button type="success" plain>成功按钮</el-button>
       <el-button type="text">文字按钮</el-button>
    </div>
    <div>
      <el-button plain icon="el-icon-search">朴素按钮</el-button>
      <el-button round icon="el-icon-search">圆角按钮</el-button>
      <el-button circle icon=el-icon-search></el-button>

    </div>
  </div>
</template>

<script>
export default {
    name:'Button'
}
</script>

<style lang='scss' scoped>
.button{

}
</style>