<template>
  <BackBar title="关于" route-link="/user" :is-route="true"></BackBar>
  <div class="user-about">
    <div class="user-about-title">
      <h2>易悦轻小说</h2>
    </div>
    <div class="user-about-version">
      <p>测试版本号</p>
      <h4>0.5.4</h4>
    </div>
    <div class="user-about-connect">
      <p>联系方式</p>
      <h4>公众号： 易悦网络</h4>
    </div>
  </div>
</template>

<script setup>
import BackBar from "@/components/Common/BackBar.vue";
</script>

<style scoped lang="scss">
.user-about {
  padding-top: 0.8rem;
}

.user-about>div {
  padding: 10px 20px;
}
</style>
