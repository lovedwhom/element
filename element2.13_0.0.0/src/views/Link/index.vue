<template>
  <div>
      <div>
          <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
          <el-link type="success">成功链接</el-link>
          <el-link :underline='false'> 无下划线链接</el-link>

          <el-link icon="el-icon-edit">编辑链接</el-link>
          <el-link>左删除拦截<i class="el-icon-view"></i></el-link>
          <el-link>右删除拦截<i class="el-icon-view el-icon--right"></i></el-link>
          
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>

</style>