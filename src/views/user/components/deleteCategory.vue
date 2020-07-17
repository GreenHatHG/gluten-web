<template>
  <el-dialog title="删除分类"  :visible.sync="dialogVisible" width="40%">
    <el-select
      v-model="value"
      multiple
      filterable>
      <el-option
        v-for="item in category"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-dialog>
</template>

<script>
  export default {
    data(){
      return{
        category: []
      }
    },created () {

    }
  }
</script>

