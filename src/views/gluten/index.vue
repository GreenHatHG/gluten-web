<template>
  <d2-container>
    <template slot="header">面经总数据</template>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :options="options"
      :data="data"/>
<!--      :loading="loading"-->

  </d2-container>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { loginWithGithub } from '@/api/login/github'

  export default {
    data(){
      return{
        columns: [
          {key: 'gluten', title: '面经'},
          {key: 'star', title: '星星数'},
          {key: 'category ', title: '分类'},
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
      ...mapActions('d2admin/account', [
        'login'
      ])
    },
    computed: {
      ...mapState('d2admin/user', [
        'info'
      ]),
    },
    mounted () {
      if(typeof(this.$route.query.code) !== undefined && typeof(this.info.name) === 'undefined'){
        loginWithGithub({code: this.$route.query.code}).then(res =>{
          this.login({
            id:res.id,
            username:res.username ,
            token:res.token,
            avatarUrl:res.avatarUrl
          })
          //清除地址栏参数
          // this.$router.push("index")
        })
      }
    }
  }
</script>

<style scoped>

</style>
