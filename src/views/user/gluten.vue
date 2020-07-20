<template>
  <d2-container>
    <template slot="header">
      <el-button slot="header" @click="addRow">新增</el-button>
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
  import { selectAllGlutenInfoById } from '@/api/gluten/selectAllGlutenInfoById'
  import { deleteGlutenByID } from '@/api/gluten/deleteGlutenByID'
  import { countGlutenInfo } from '@/api/gluten/countGlutenInfo'
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
          pageSize: 5,
          total: 0
        }
      }
    },
    methods:{
      paginationCurrentChange (currentPage) {
        this.pagination.currentPage = currentPage
        this.getGlutenData(currentPage, "")
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
      getGlutenData(currentPages, sort){
        selectAllGlutenInfoById({
          "current_page": currentPages,
          "page_size": this.pagination.pageSize,
          "sort": sort
        }).then(res =>{
          this.data = res || []
        })
      },
      count(){
        countGlutenInfo().then(res =>{
          this.pagination.total = res || 0
        })
      }
    },
    mounted () {
      this.$bus.$on('selectAllGlutenInfoById',()=>{
        this.getGlutenData(1, "")
        this.count()
      });
      this.getGlutenData(1, "")
      this.count()
    }
  }
</script>
