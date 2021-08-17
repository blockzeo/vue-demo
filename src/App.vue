<template>
  <div id="app">
    <router-view class="leftBar" name="leftBar"/>
    <div id="appRight">
      <router-view class="topBar" name="topBar"/>
      <router-view class="content" />
      <footer class="footer">
        <div v-if="$route.name && $route.name.toLowerCase().includes('login')" style="margin: 30px 0px 20px;">
          <span class="footer-url-one">
            <a href="//www.yunban.com" target="_blank">云瓣校园</a>
          </span>
          <span class="footer-url-one">
            <a href="//d.yunban.com" target="_blank">云瓣电子校园卡</a>
          </span>
          <span class="footer-url-one">
            <a href="//s.yunban.com" target="_blank">云瓣商家中心</a>
          </span>
          <span class="footer-url-one">
            <a href="//www.jft.com" target="_Blank">云瓣缴费通</a>
          </span>
        </div>
        <div>Copyright © 2012 - 2018 Yunban. All Rights Reserved.
          <template v-if="$route.name && $route.name.toLowerCase().includes('login')">云瓣科技</template>
          <template v-else>
            <a href="//www.yunban.com" target="_blank" rel="noopener noreferrer">云瓣科技</a>
          </template>版权所有 云瓣法律顾问：易法通
        </div>
      </footer>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body{
    margin: 0;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100%;
  }
  #app{
    display: flex;
  }
  #appRight{
    flex: 1;
  }
  .leftBar{

  }
  .content{
    min-height: calc(100% - 149px);
  }
  .footer a {
    color: rgba(0,0,0,.45);
  }
  .footer{
    color: rgba(0,0,0,.45);
    text-align: center;
    margin: 30px 0;
    font-size: 12px;
  }
</style>
