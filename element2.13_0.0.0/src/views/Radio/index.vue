<template>
  <div>
      <div class="mt-20">
          <h3>单选框</h3>
          <el-radio v-model="radio1" label="1" border> 单选1</el-radio>
          <el-radio v-model="radio1" label="2">单选2</el-radio>
      </div>
      <div class="mt-20">
          <h3>单选框组</h3>
          <el-radio-group v-model="radioGroup1" >
            <el-radio label="1" border ></el-radio>
            <el-radio label="2" border ></el-radio>
            <el-radio label="3" border ></el-radio>
          </el-radio-group>
      </div>
      <div class="mt-20">
          <h3>按钮样式</h3>
          <el-radio-group v-model="radioGroup2" fill="hotpink">
            <el-radio-button label="1">上海</el-radio-button>
            <el-radio-button label="2">北京</el-radio-button>
            <el-radio-button label="3">天津</el-radio-button>
          </el-radio-group>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            radio1:"1",
            radioGroup1:"",
            radioGroup2:"",
        }
    }
}
</script>

<style lang="scss" scoped>
.mt-20{
    margin-top: 20px;
    h3{
        margin-bottom: 10px;
        color:'#409EFF'
    }
}
</style>