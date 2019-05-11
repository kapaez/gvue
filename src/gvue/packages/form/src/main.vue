<template>
    <div>
        <el-form :model="form" ref="form" label-width="80px">
          <el-row span=24>
            <template v-for="(column,index) in columns">
              <el-col
              :key="column.prop"
              class="">
                <el-form-item
                :label="column.label"
                :prop="column.prop"
                :label-width="column.labelWidth||'80px'"
                >
                <el-tooltip
                :disabled="!column.tip"
                :content="column.tip" :placement="column.tipPlacement"
                effect="dark">
                    <slot
                    v-if="column.formslot"
                    :name="column.prop"
                    :column="column"
                    :index="index"
                    ></slot>
                    <component :is="crudInput"
                    v-else
                    :prop="column.prop"
                    :props="column.props"
                    v-model="form[column.prop]"
                    :change="column.change"
                    :click="column.click"
                    :column="column"
                    :placeholder="column.placeholder"
                    :clearabel="column.clearable"
                    :show-password="column.show-password"
                    :disabled="column.disabled"
                    :size="size"
                    :rows="rows"
                    :max="max"
                    :min="min"
                    class=""> 
                        <template v-for="slot in column.slotList">
                          <slot :name="column.prop + slot"
                          ></slot>
                        </template>
                    </component>
                </el-tooltip>
                
                </el-form-item>
              </el-col>
              <div :class="b('line')"
              :key="index"
              :style="{width:(column.count/24*100)+'%'}"
              v-if="column.row && column.span!==24"></div>
            </template>
          </el-row>
          <el-form-item>
            <el-button type="primary" @click="submit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
           
    </div>
</template>  
<script>
import create from '../../utils/create.js'
export default create({
  name: 'form',
  data(){
    return {
      form: {},
      tableOption: {},
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed:{
    columns() {
      return this.option.cloumn
    }
  },
  methods: {
    submit() {
      this.$emit('submit', form)
    },
  }
})
</script>
