<template>
    <div>
        <gvue-form
        :option="option">
            <template slot="nameappend">
                <el-button type="primary">wala</el-button>
            </template>
        </gvue-form>
    </div>
</template>
<script>
export default {
    name: 'gvue-input',
    data() {
        return {
            option:{
                column: [{
                    label: '姓名',
                    prop: 'name',
                    slotList: ['append','prepend'],
                    type: 'input',
                    disabled: false,
                }]
            }
        }
    },
    watch: {
        option: {
            handler() {
            },
            deep: true
        }
    }
}
</script>