<template>
  <div>
    <el-badge style="margin-top: 10px;margin-right: 23px" v-for="item in scope.row.Post"
              :value="item.value" class="item" type="success">
      <el-button size="mini" @click="inc($event)">
        {{item.title}}
      </el-button>
    </el-badge>
  </div>
</template>

<script>
  import { updateValue } from '@/api/gluten/updateValue'

  export default {
    props: {
      scope: {
        default: null
      }
    },
    methods:{
      inc(event){
        const buttonName = event.target.innerHTML.replace(/[^\u4E00-\u9FA5]/g,'')
        const post = this.scope.row.Post
        for(const item of post){
          if(item['title'] === buttonName){
            item['value']++
            break
          }
        }
        updateValue({
          "id": this.scope.row.ID,
          "key": "post",
          "value": post
        })
      }
    }
  }
</script>
