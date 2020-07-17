<template>
  <d2-container>
    <template slot="header">
      <el-button slot="header" @click="addRow">新增</el-button>
    </template>
    <gluten ref="add"/>
    <d2-crud
      class="elTable"
      ref="d2Crud"
      :columns="columns"
      :options="options"
      :data="data"/>
  </d2-container>
</template>

<script>
  import gluten from '@/views/user/components/addGluten'
  import postTag from '@/views/user/components/postTag'
  import companyTag from '@/views/user/components/companyTag'
  import { selectAllGlutenInfoById } from '@/api/gluten/SelectAllGlutenInfoById'
  export default {
    components: {gluten, postTag, companyTag},
    data(){
      return{
        columns: [
          {key: 'Title', title: '面经', tooltip: true},
          {key: 'Star', title: '星星数',  minWidth: 100},
          {key: 'Category', title: '分类'},
          {key: 'Post', title: '岗位', component:{name: postTag}},
          {key: 'Company', title: '公司', component:{name: companyTag}}
        ],
        options: {
          stripe: true,
          highlightCurrentRow: true
        },
        data: []
      }
    },
    methods:{
      addRow(){
        this.$refs.add.open()
      }
    },mounted () {
      selectAllGlutenInfoById().then(res =>{
        console.log(res)
        this.data = res
      })
    }
  }
</script>

<style scoped>
  .elTable {
    .el-table__fixed-right {
      height: 100% !important;
    }
  }
</style>

