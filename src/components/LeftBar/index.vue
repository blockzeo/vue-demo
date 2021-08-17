<template>
  <div class="leftBar-main">
    <div class="leftBar-logo">
      <div>

      </div>
    </div>
    <div class="leftBar-menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <div class="leftBar-menu-one active">
        <i class="icon idcard"></i>
        学校管理
      </div>
      <div class="leftBar-menu-one">用户管理</div>
      <div class="leftBar-menu-one">信息管理</div>
      <div class="leftBar-menu-one">菜单管理</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>
<style>
  .leftBar-main{
    width: 256px;
    color:white;
    background: #001529;
  }
  .leftBar-logo{
    width: 100%;
    height: 68px;
    vertical-align: middle;
  }
  .leftBar-menu{
    .el-menu{
      padding: 0;
      margin: 0;
    }
  }
  .leftBar-menu-one{
    padding: 20px;
  }
  .leftBar-menu-one.active{
    background-color: #1890ff;
  }
  .leftBar-logo div{
    width: 100%;
    height: 100%;
    background: url(../../assets/logo.svg);
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
