<template>
    <div class="" >
        <el-input v-model="text" 
        :size="size"
        :clearable="clearable"
        :disabled="disabled"
        :type="type"
        :maxlength="maxlength"
        :minlength="minlength"
        :autosize="{ minRows: minRows, maxRows: maxRows}"
        :prefix-icon="prefixIcon"
        :suffix-icon="suffixIcon"
        :readonly="readonly"
        :show-word-limit="showWordLimit"
        :change="handleChange"
        :placeholder="placeholder?placeholder:`请输入${label}`">
            <template slot="prepend" v-if="slotList.includes('prepend')">
                <slot :name="prop+'prepend'">
                </slot>
            </template>
            <template slot="append" v-if="slotList.includes('append')">
                <slot :name="prop+'append'">
                </slot>
            </template>
        </el-input>
        <el-button type="primary" @click="log">log</el-button>
        
    </div>
</template>
<script>
import create from '../../utils/create'
export default create({
    name: 'crud-input',
    data() {
        return {
            text: '',
        }
    },
    props: {
        column: {
            type: Object,
            default: ()=> {}
        },
        slotList: {
            tyep: Array,
            default: ()=>{return[]},
        },
        showWordLimit: {
            type: Boolean,
            default: false,
        },
        prop: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'input',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        prefixIcon: {
            type: String
        },
        clearable: {
            type: Boolean,
            default: true,
        },
        suffixIcon: {
            type: String
        },
        prepend: {
            type: String
        },
        append: {
            type: String
        },
        minlength: {
            type: Number,
        },
        maxlength: {
            type: Number,
        },
        minRows: {
            type: Number,
            default: 3, 
        },
        maxRows: {
            type: Number,
            default: 4,
        },
    },
    methods: {
        handleChange(value) {
            this.$emit("change", value)
        },
        log(){
            console.log(this.slotList.includes('append'),'slotcheck')
            console.log(this.slotList)
        }
    },
})
</script>
