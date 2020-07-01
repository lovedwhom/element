<template>
<div>
    <div class="mt-20">
        <h3>基础用法</h3>
        <el-checkbox v-model="checkbox1" border>选项</el-checkbox>
    </div>
    <div class="mt-20">
        <h3>多选框组</h3>
        <el-checkbox-group v-model="checkGroup1">
            <el-checkbox label="1">选项一</el-checkbox>
            <el-checkbox label="2">选项二</el-checkbox>
            <el-checkbox label="3">选项三</el-checkbox>
        </el-checkbox-group>
    </div>
    <div class="mt-20">
        <h3>indeterminate 状态</h3>
        <el-checkbox :indeterminate="indeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkGroup2" @change="handleCheckChange">
            <el-checkbox label="1">选项一</el-checkbox>
            <el-checkbox label="2">选项二</el-checkbox>
            <el-checkbox label="3">选项三</el-checkbox>
        </el-checkbox-group>
    </div>
    <div class="mt-20">
        <h3>可选项目数量得限制</h3>
        <el-checkbox-group v-model="checkGroup3" min=1 max=3>
            <el-checkbox label="1">选项一</el-checkbox>
            <el-checkbox label="2">选项二</el-checkbox>
            <el-checkbox label="3">选项三</el-checkbox>
            <el-checkbox label="4">选项四</el-checkbox>
        </el-checkbox-group>
    </div>
    <div class="mt-20">
        <h3>checkbox-button</h3>
        <el-checkbox-group v-model="checkGroup4">
            <el-checkbox-button label="1">选项一</el-checkbox-button>
            <el-checkbox-button label="2">选项二</el-checkbox-button>
            <el-checkbox-button label="3">选项三</el-checkbox-button>
            <el-checkbox-button label="4">选项四</el-checkbox-button>
        </el-checkbox-group>
    </div>
</div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                checkbox1: false,
                checkGroup1:[],
                indeterminate:false,
                checkAll:'',
                checkGroup2:[],
                checkGroup3:[],
                checkGroup4:[],
            }
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkGroup2 = val? ['1','2','3'] :[]
                this.indeterminate =false;
            },
            handleCheckChange(val){
                let count = val.length;
                this.checkAll = count===3
                this.indeterminate = count>0 && count<3
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
