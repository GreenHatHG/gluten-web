<template>
  <el-dialog title="添加新数据"  :visible.sync="dialogVisible" width="45%">
    <el-form ref="form" :model="form" label-width="50px" :rules="rules">
      <el-form-item label="面经" prop="content">
        <el-input v-model="form.content" clearable ></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select
          v-model="newForm.category"
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
          v-model="newForm.post"
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
          v-model="newForm.company"
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
  import { addGluten } from '@/api/gluten/addGluten'

  export default {
    data(){
      return{
        dialogVisible: false,
        form:{
          content: '',
          category: [],
          post: [],
          company: []
        },
        newForm:{
          category: [],
          post: [],
          company: []
        },
        rules: {
          content: [
            { required: true, message: '面经不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      open(){
        this.dialogVisible = true
      },
      onSubmit(){
        addGluten({
          //数组合并去重，用户可能添加了新的项目，得传给后端更新（数组转成字符串）
          category: Array.from(new Set([this.form.category, this.newForm.category])).join(","),
          post: Array.from(new Set([this.form.post, this.newForm.post])).join(","),
          company: Array.from(new Set([this.form.company, this.newForm.company])).join(","),
          contentCategory: this.newForm.category,
          contentPost: this.newForm.post,
          contentCompany: this.newForm.company,
          content: this.form.content
        }).then(res => {
          this.$message.success("添加成功")
          this.close()
        }).catch(err =>{
          this.$message.error("添加失败，请稍后再试")
        })
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
          if (item !== ''){
            this.form.category.push({
              value: item,
              label: item
            })
          }
        }
        for (const item of post) {
          if (item !== ''){
            this.form.post.push({
              value: item,
              label: item
            })
          }
        }
        for (const item of company) {
          if (item !== ''){
            this.form.company.push({
              value: item,
              label: item
            })
          }
        }
      })
    }
  }
</script>
