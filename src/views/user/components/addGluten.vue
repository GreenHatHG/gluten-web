<template>
  <el-dialog title="添加新数据"  :visible.sync="dialogVisible" width="45%">
    <el-form ref="form" :model="form" label-width="50px">
      <el-form-item label="面经" prop="content"
        :rules="[{ required: true, message: '面经不能为空'}]" >
        <el-input v-model="form.content" clearable ></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select
          v-model="form.category"
          multiple
          filterable
          allow-create
          placeholder="请选择分类">
          <el-option
            v-for="item in form.category"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="岗位">
        <el-select
          v-model="form.post"
          multiple
          filterable
          allow-create
          placeholder="请选择岗位">
          <el-option
            v-for="item in form.post"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="公司">
        <el-select
          v-model="form.company"
          multiple
          filterable
          allow-create
          placeholder="请选择公司">
          <el-option
            v-for="item in form.company"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="close">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import { getUserCategory } from '@/api/user-category/get'

  export default {
    data(){
      return{
        dialogVisible: false,
        form:{
          content: '',
          category: [],
          post: [],
          company: []
        }
      }
    },
    methods:{
      open(){
        this.dialogVisible = true
      },
      onSubmit(){
        console.log(this.form)
      },
      close(){
        this.dialogVisible = false
      },
    },
    mounted () {
      getUserCategory().then(res =>{
        const category = res.category
        const post = res.post
        const company = res.company
        for (const item of category) {
          this.form.category.push({
            value: item,
            label: item
          })
        }
        for (const item of post) {
          this.form.post.push({
            value: item,
            label: item
          })
        }
        for (const item of company) {
          this.form.company.push({
            value: item,
            label: item
          })
        }
      })

    }
  }
</script>
