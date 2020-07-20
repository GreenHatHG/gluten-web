<template>
  <d2-container>
    <template slot="header">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-button  @click="addRow">新增</el-button>
        </el-col>
        <el-col :span="6">
          <el-dropdown>
            <el-button>
              筛选分类<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item  @click.native="categoryFilter($event)">
                所有
              </el-dropdown-item>
              <el-dropdown-item v-for="item in tempForm.category" @click.native="categoryFilter($event)">
                {{item}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </template>
    <gluten ref="add"/>
    <editTitle ref="editTitleRef"/>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :options="options"
      :rowHandle="rowHandle"
      @edit="edit"
      @deleteGluten="deleteGluten"
      :pagination="pagination"
      @pagination-current-change="paginationCurrentChange"
      :data="data"/>
  </d2-container>
</template>

<script>
  import starTag from '@/views/user/components/starTag'
  import gluten from '@/views/user/components/addGluten'
  import postTag from '@/views/user/components/postTag'
  import companyTag from '@/views/user/components/companyTag'
  import categoryTag from '@/views/user/components/categoryTag'
  import editTitle from '@/views/user/components/editTitle'
  import { selectAllGlutenInfoByIdOrCategory } from '@/api/gluten/selectAllGlutenInfoById'
  import { deleteGlutenByID } from '@/api/gluten/deleteGlutenByID'
  import { countGlutenInfo } from '@/api/gluten/countGlutenInfo'
  import {getUserCategory} from "@/api/user-category/get";
  export default {
    components: {gluten, postTag, companyTag, categoryTag, editTitle, starTag},
    data(){
      return{
        columns: [
          {key: 'Title', title: '面经', tooltip: true,minWidth: 100,  resizable: true},
          {key: 'Star', title: '星星数', width:100, component: {name: starTag}, resizable: true, sortable: true},
          {key: 'Category', title: '分类', component:{name: categoryTag}, width:100},
          {key: 'Post', title: '岗位', component:{name: postTag}, width:230},
          {key: 'Company', title: '公司', component:{name: companyTag}, width:200},
        ],
        options: {
          stripe: true,
          highlightCurrentRow: true
        },
        data: [],
        rowHandle: {
          width: 200,
          custom: [
            {
              text: '编辑',
              type: 'primary',
              size: 'small',
              emit: 'edit'
            },
            {
              text: '删除',
              type: 'danger',
              size: 'small',
              emit: 'deleteGluten'
            }
          ]
        },
        pagination: {
          currentPage: 1,
          pageSize: 6,
          total: 0
        },
        tempForm:{
          category: [],
          post: [],
          company: []
        },
        form:{
          category: [],
          post: [],
          company: []
        },
        //默认查询，还是按分类筛选
        category: ""
      }
    },
    methods:{
      paginationCurrentChange (currentPage) {
        this.pagination.currentPage = currentPage
        this.getGlutenDataByIdOrCategory(currentPage, "", this.category)
      },
      deleteGluten({index, row}){
        deleteGlutenByID({
          "id": row.ID
        }).then(res =>{
          this.$message.success("删除成功")
          this.$bus.$emit('selectAllGlutenInfoById')
        }).catch(err =>{
          this.$message.error("删除失败，请稍后再试")
        })
      },
      edit({index, row}){
        this.$refs.editTitleRef.open(row.Title, row.ID)
      },
      addRow(){
        this.$refs.add.open()
      },
      getGlutenDataByIdOrCategory(currentPages, sort, category){
        selectAllGlutenInfoByIdOrCategory({
          "current_page": currentPages,
          "page_size": this.pagination.pageSize,
          "sort": sort,
          "category" : category || ""
        }).then(res =>{
          this.data = res || []
        })
      },
      count(){
        countGlutenInfo({
          "category": this.category
        }).then(res =>{
          this.pagination.total = res || 0
        })
      },
      updateUserCategory(){
        getUserCategory().then(res =>{
          this.tempForm.category = res.category || []
          this.tempForm.post = res.post || []
          this.tempForm.company = res.company || []
          for (const item of this.tempForm.category) {
            if (item !== ''){
              this.form.category.push({
                value: item,
                label: item
              })
            }
          }
          for (const item of this.tempForm.post) {
            if (item !== ''){
              this.form.post.push({
                value: item,
                label: item
              })
            }
          }
          for (const item of this.tempForm.company) {
            if (item !== ''){
              this.form.company.push({
                value: item,
                label: item
              })
            }
          }
        }).finally(() =>{
          this.$store.dispatch('d2admin/db/set', {
            dbName: 'userCategory',
            path: 'userCategory.data',
            value: {
              "tempForm": this.tempForm,
              "form": this.form
            },
            user: true
          })
        })
      },
      categoryFilter(event){
        //去掉前后空格
        this.category = event.target.innerHTML.replace('<!---->','').replace(/(^\s*)|(\s*$)/g, "")
        if (this.category === "所有"){
          this.category = ""
        }
        this.count()
        this.getGlutenDataByIdOrCategory(1, "", this.category)
      }
    },
    mounted () {
      this.$bus.$on('selectAllGlutenInfoById',()=>{
        this.getGlutenDataByIdOrCategory(1, "", this.category)
        this.count()
      });
      this.getGlutenDataByIdOrCategory(1, "", this.category)
      this.updateUserCategory()
      this.count()
    }
  }
</script>
