<template>
  <el-container id="wrapper">
    <!-- header -->
    <el-header id="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item>商品后台</el-menu-item>
        <el-menu-item index="1">
          <router-link to="/">处理中心</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/about">about</router-link>
        </el-menu-item>
        <el-menu-item class="right">我的名字</el-menu-item>
      </el-menu>
    </el-header>
    <!-- main -->
    <!-- <el-main :style="{ 'min-height': min_height+'px'}">
      <router-view />
    </el-main>-->
    <el-main id="main">
      <router-view />
    </el-main>
    <!-- footer -->
    <el-footer id="footer" style="padding:0">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      // min_height: 100,
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  created() {
    // var winHeight = window.screen.availHeight - 60;
    // this.min_height = winHeight;
  }
};
</script>

<style>
@import "./Layout.css";
</style>