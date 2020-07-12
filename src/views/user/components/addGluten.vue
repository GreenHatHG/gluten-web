<template>
  <el-dialog title="添加新数据"  :visible.sync="dialogVisible">
    <el-form-item
      prop="content"
      label="面经"
      :rules="[{ required: true, message: '请输入内容', trigger: 'blur' }]"
    />
    <el-form-item label="分类">
      <el-checkbox-group>
        <el-checkbox-button v-for="category in categories" :label="category"
                            :key="category" :disabled="category === '已有分类为空'">{{category}}</el-checkbox-button>
      </el-checkbox-group>
    </el-form-item>
  </el-dialog>
</template>

<script>
  export default {
    data(){
      return{
        dialogVisible: false,
        categories: ['已有分类为空']
      }
    },
    methods:{
      open(){
        this.dialogVisible = true
      }
    }
  }
</script>
