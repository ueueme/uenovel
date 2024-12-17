<script setup>
// 引入 Vue 的 onMounted 生命周期钩子和 ref 函数
import { onMounted, ref } from "vue";
// 引入图标组件
import { ToTop } from "@icon-park/vue-next";

// 定义一个 ref，用于判断是否滚动到顶部
const isTop = ref(false);

// 在组件挂载后，监听页面滚动事件
onMounted(() => {
  // 监听页面滚动
  window.addEventListener('scroll', () => {
    // 获取页面滚动距离
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    // 如果滚动距离大于等于 300 像素，则设置 isTop 为 true，否则为 false
    isTop.value = scrollTop >= 300;
  });
});

// 返回顶部的函数
function onBackTop() {
  // 平滑滚动到页面顶部
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

</script>

<template>
  <div class="library-back-top shadow" v-show="isTop" @click="onBackTop">
    <to-top theme="outline" size="24" fill="#ff3992" strokeLinejoin="bevel" strokeLinecap="square" />
  </div>
</template>



<style scoped lang="scss">
.library-back-top {
  padding: 12px 8px;
  position: fixed;
  bottom: 140px;
  right: 25px;
  background-color: #f7f7f7;
}
</style>
