<template>
  <div>
    <el-badge style="margin-top: 10px;margin-right: 23px" v-for="item in scope.row.Company"
              :value="item.value" class="item" type="warning">
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
        const company = this.scope.row.Company
        for(const item of company){
          if(item['title'] === buttonName){
            item['value']++
            break
          }
        }
        updateValue({
          "id": this.scope.row.ID,
          "key": "company",
          "value": company
        })
      }
    }
  }
</script>
