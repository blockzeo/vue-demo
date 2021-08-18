<template>
  <div class="main">
    <div class="banner">
      <div class="head">
        <img class="logo" src="./images/logo.svg" alt="">
      </div>
      <div class="content">
        <div class="login-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账号登录" name="first">
              <div>
                <div>
                  <div>
                    <img src="./images/username.svg" alt="">
                  </div>
                  <div>
                    <input type="text">
                  </div>
                </div>
                <div>
                  <div>
                    <img src="./images/password.svg" alt="">
                  </div>
                  <div>
                    <input type="text">
                  </div>
                </div>
                <div>
                  <div>
                    <img src="./images/VCode.svg" alt="">
                  </div>
                  <div>
                    <input type="text">
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="扫码登录" name="second">配置管理</el-tab-pane>
          </el-tabs>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(key){
        console.log(key)
      }
    }
  }
</script>
<style>
  .main{
    background: #1062e9;
  }
  .banner{
    height:580px;
    background: #1062e9 url(./images/banner.png) 0 0/100% no-repeat;
  }
  .logo{
    position: absolute;
    top: 30px;
    left: 120px;
  }
  .login-card{
    position: absolute;
    top: 100px;
    right: 120px;
    width: 360px;
    height: 380px;
    background-color: #fff;
    padding: 20px 30px;
  }
</style>
