<template>
  <div>
    <el-badge style="margin-top: 10px" v-for="item in scope.row.Company" :value="item.value" class="item" type="primary">
      <el-button size="mini">
        {{item.title}}
      </el-button>
    </el-badge>
  </div>
</template>

<script>
  export default {
    props: {
      scope: {
        default: null
      }
    }
  }
</script>
