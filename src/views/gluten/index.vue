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
  import { get } from 'lodash'
  import setting from '@/setting'

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
      console.log(this.$route.query.code)
      console.log(this.info.name)
      if(typeof(this.$route.query.code) !== 'undefined' && (typeof(this.info.name) === 'undefined' || this.info.name === '')){
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        loginWithGithub({code: this.$route.query.code}).then(res =>{
          this.login({
            id:res.id,
            username:res.username ,
            token:res.token,
            avatarUrl:res.avatarUrl
          })
          this.$router.push("index")
        }).catch(err =>{
          this.$message.error("请稍后再试")
        }).finally(() =>{
          loading.close();
        })
      }
    }
  }
</script>

<style scoped>

</style>
