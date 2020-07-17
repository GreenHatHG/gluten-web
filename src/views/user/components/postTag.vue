<template>
  <div>
    <el-badge style="margin-top: 10px" v-for="item in scope.row.Post" :value="item.value" class="item" type="primary">
      <el-button size="mini" @click="increase">
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
    },
    methods:{
      increase(){

      }
    }
  }
</script>
