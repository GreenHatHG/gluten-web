<template>
  <div>
    <el-dropdown size="mini" split-button type="primary" @click="edit">
      编辑
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import edit from '@/views/user/components/menu/edit'
  export default {
    components: {edit},
    props: {
      scope: {
        default: null
      }
    },
    methods:{
      edit(){
        this.$refs.editRef.open()
      }
    }
  }
</script>

<style scoped>
</style>
