<template>
  <div>
      <el-button  style="margin-top: 10px;margin-right: 23px" size="mini"
                  type="info" @click="inc()">
          {{scope.row.Star}}
      </el-button>
  </div>
</template>

<script>
  import { updateStar } from '@/api/gluten/updateStar'

  export default {
    props: {
      scope: {
        default: null
      }
    },
    methods:{
      inc(){
        this.scope.row.Star = this.scope.row.Star + 1
        updateStar({
          "id": this.scope.row.ID,
          "star": this.scope.row.Star
        })
      }
    }
  }
</script>
