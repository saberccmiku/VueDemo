<template>
  <div class="container">
    <!--header-->
    <header id="header" class="mui-bar mui-bar-transparent primary">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 class="mui-title">导航栏</h1>
    </header>
    <!--content-->
    <h1>内容</h1>
    <!--footer-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" href="#tabbar" to="/main">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" href="#tabbar-with-chat"  to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" href="#tabbar-with-contact"  to="/car">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" href="#tabbar-with-map"  to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.container {
  padding-top: 44px;
}
</style>

