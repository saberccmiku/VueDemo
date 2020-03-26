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
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
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

