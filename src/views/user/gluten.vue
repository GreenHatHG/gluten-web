<template>
  <d2-container>
    <template slot="header">
      <el-button slot="header" @click="addRow">新增</el-button>
    </template>
    <gluten ref="add"/>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :options="options"
      :data="data"/>
  </d2-container>
</template>

<script>
  import gluten from '@/views/user/components/addGluten'
  export default {
    comments: {gluten},
    data(){
      return{
        columns: [
          {key: 'gluten', title: '面经'},
          {key: 'star', title: '星星数'},
          {key: 'category ', title: '分类'},
          {key: 'post', title: '岗位'},
          {key: 'company', title: '公司'}
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
    }
  }
</script>

<style scoped>

</style>
