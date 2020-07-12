<template>
  <el-dialog title="第三方登录"  :visible.sync="dialogVisible" width="30%" center>
    <el-button icon="fa fa-github" type="info"
               @click="loginWithGithub"  style="display:block;margin:0 auto" round>
                    Login with Github
    </el-button>
  </el-dialog>
</template>

<script>
  import { getGithubConfig } from '@/api/config/github'
  export default {
    data(){
      return{
        dialogVisible: false
      }
    },
    methods:{
      loginWithGithub(){
        getGithubConfig().then(res =>{
          window.location.href = `https://github.com/login/oauth/authorize?client_id=${res.clientId}&scope=user:email`
        })
      },
      open(){
        this.dialogVisible = true
      }
    }
  }
</script>

<style scoped>

</style>
