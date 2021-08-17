<template>
  <div class="topBar-main">
    topBar
    {{msg}}
    {{details()}}
    <Button v-on:click="onButton">button</Button>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex);
  export default {
    name: "aaaa",
    state : {
      name : "123"
    },
    data () {
      return {
        msg : '111'
      }
    },
    methods:{
      details: function(){
        console.log(123)
        return 123
      },
      onButton : function(){
        console.log(this.$store)
      }
    },
    created: () => {
      console.log(this)
      console.log(this.a)
    }
  }

</script>
<style>
  .topBar-main{
    height: 68px;
    padding: 20px;
    box-sizing:border-box;
    box-shadow: 0px 1px 4px #888;
  }
</style>
