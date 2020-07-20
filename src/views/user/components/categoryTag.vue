<template>
  <div>
    <div v-for="item in scope.row.Category">
      <el-button style="margin-top: 10px;margin-right: 23px" size="mini" type="info">
          {{item}}
      </el-button>
    </div>
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
