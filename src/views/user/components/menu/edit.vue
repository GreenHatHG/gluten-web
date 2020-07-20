<!--<template>-->
<!--  <el-dialog title="编辑面经"  :visible.sync="dialogVisible" width="45%" :before-close="handleClose">-->
<!--    <el-form ref="form" :model="form" label-width="50px" :rules="rules">-->
<!--      <el-form-item label="面经" prop="content">-->
<!--        <el-input v-model="form.content" clearable ></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="分类">-->
<!--        <el-select-->
<!--          v-model="newForm.category"-->
<!--          multiple-->
<!--          filterable-->
<!--          allow-create-->
<!--          placeholder="请选择分类">-->
<!--          <el-option-->
<!--            v-for="item in form.category"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value">-->
<!--          </el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="岗位">-->
<!--        <el-select-->
<!--          v-model="newForm.post"-->
<!--          multiple-->
<!--          filterable-->
<!--          allow-create-->
<!--          placeholder="请选择岗位">-->
<!--          <el-option-->
<!--            v-for="item in form.post"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value">-->
<!--          </el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="公司">-->
<!--        <el-select-->
<!--          v-model="newForm.company"-->
<!--          multiple-->
<!--          filterable-->
<!--          allow-create-->
<!--          placeholder="请选择公司">-->
<!--          <el-option-->
<!--            v-for="item in form.company"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value">-->
<!--          </el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary"  @click="onSubmit">立即更新</el-button>-->
<!--        <el-button @click="close">取消</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </el-dialog>-->
<!--</template>-->

<!--<script>-->
<!--  import { getUserCategory } from '@/api/user-category/get'-->
<!--  export default {-->
<!--    data(){-->
<!--      return{-->
<!--        dialogVisible: false,-->
<!--        //保存原始信息-->
<!--        tempForm:{-->
<!--          category: [],-->
<!--          post: [],-->
<!--          company: []-->
<!--        },-->
<!--        form:{-->
<!--          content: '',-->
<!--          category: [],-->
<!--          post: [],-->
<!--          company: []-->
<!--        },-->
<!--        newForm:{-->
<!--          category: [],-->
<!--          post: [],-->
<!--          company: []-->
<!--        },-->
<!--        rules: {-->
<!--          content: [-->
<!--            { required: true, message: '面经不能为空', trigger: 'blur' }-->
<!--          ]-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    methods:{-->
<!--      open(content){-->
<!--        console.log(content)-->
<!--        getUserCategory().then(res =>{-->
<!--            this.tempForm.category = res.category || []-->
<!--            this.tempForm.post = res.post || []-->
<!--            this.tempForm.company = res.company || []-->
<!--            for (const item of this.tempForm.category) {-->
<!--              if (item !== ''){-->
<!--                this.form.category.push({-->
<!--                  value: item,-->
<!--                  label: item-->
<!--                })-->
<!--              }-->
<!--            }-->
<!--            for (const item of this.tempForm.post) {-->
<!--              if (item !== ''){-->
<!--                this.form.post.push({-->
<!--                  value: item,-->
<!--                  label: item-->
<!--                })-->
<!--              }-->
<!--            }-->
<!--            for (const item of this.tempForm.company) {-->
<!--              if (item !== ''){-->
<!--                this.form.company.push({-->
<!--                  value: item,-->
<!--                  label: item-->
<!--                })-->
<!--              }-->
<!--            }-->
<!--          })-->
<!--        this.form.content = content || ""-->
<!--        this.dialogVisible = true-->
<!--      },-->
<!--      close(){-->
<!--        this.init()-->
<!--        this.dialogVisible = false-->
<!--      },-->
<!--      handleClose(done){-->
<!--        this.init()-->
<!--        done()-->
<!--      },-->
<!--      init(){-->
<!--        this.newForm.category = []-->
<!--        this.newForm.company = []-->
<!--        this.newForm.post = []-->
<!--        this.form.category = []-->
<!--        this.form.company = []-->
<!--        this.form.post = []-->
<!--        this.form.content = ""-->
<!--      }-->
<!--    },-->
<!--    mounted () {-->

<!--    }-->
<!--  }-->
<!--</script>-->
