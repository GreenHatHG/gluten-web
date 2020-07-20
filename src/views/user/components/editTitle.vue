<template>
  <el-dialog title="修改面经"  :visible.sync="dialogVisible" width="40%">
    <el-form ref="form" :model="form" label-width="50px">
      <el-form-item label="面经" prop="content">
        <el-input v-model="form.content" clearable ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即更新</el-button>
        <el-button @click="close">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import { updateTitle } from '@/api/gluten/updateTitle'

  export default {
    props: {
      scope: {
        default: null
      }
    },
    name: 'editTitle',
    data(){
      return{
        form:{
          content: ""
        },
        dialogVisible: false,
        id: ""
      }
    },
    methods:{
      open(title, id){
        this.form.content = title
        this.id = id
        this.dialogVisible = true
      },
      close(){
        this.dialogVisible = false
      },
      onSubmit(){
        updateTitle({
          "id": this.id,
          "title": this.form.content
        }).then(res =>{
          this.$message.success("修改成功")
        }).catch(err =>{
          this.$message.error("修改失败，请稍后再试")
        })
        this.$bus.$emit('selectAllGlutenInfoById')
        this.close()
      }
    }
  }
</script>

<style scoped>

</style>
