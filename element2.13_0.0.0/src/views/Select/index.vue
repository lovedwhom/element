<template>
<div>
    <div class="mt-20">
        <h3>基础用法</h3>
        <el-select v-model="select" placeholder="请选择">
            <el-option v-for="item in options"
                :key="item.value"
               v-bind="item"
            >

            </el-option>
        </el-select>
    </div>
    <div class="mt-20">
        <h3>分组</h3>
        <el-select v-model="select2">
            <el-option-group
                v-for="group in options2"
                :key="group.label"
                :label="group.label"
            >
                <el-option v-for="item in group.options"
                    :key="item.value"
                           v-bind="item"
                >

                </el-option>
            </el-option-group>
        </el-select>
    </div>
</div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                select: '',
                options: [
                    {
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                select2:'',
                options2: [{
                    label: '热门城市',
                    options: [{
                        value: 'Shanghai',
                        label: '上海'
                    }, {
                        value: 'Beijing',
                        label: '北京'
                    }]
                }, {
                    label: '城市名',
                    options: [{
                        value: 'Chengdu',
                        label: '成都'
                    }, {
                        value: 'Shenzhen',
                        label: '深圳'
                    }, {
                        value: 'Guangzhou',
                        label: '广州'
                    }, {
                        value: 'Dalian',
                        label: '大连'
                    }]
                }],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
