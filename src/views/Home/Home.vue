<!-- eslint-disable vue/multi-word-component-names -->
<script name="Home" setup>
import HomeTabBar from "@/components/Home/HomeTabBar.vue";
import HomeSwiper from "@/components/Home/HomeSwiper.vue";
import HomeDaily from "@/components/Home/HomeDaily.vue";
import HomeRecommend from "@/components/Home/HomeRecommend.vue";
import HomeLibrary from "@/components/Home/HomeLibrary.vue";
import BottomTab from "@/components/Common/BottomTab.vue";
</script>

<!-- <template>
  <div id="home">
    <HomeTabBar />
    <HomeSwiper />
    <HomeDaily />
    <HomeLibrary />
    home
    <RouterLink to="/404">404</RouterLink>
  </div>
</template> -->

<template>
  <div id="home">
    <HomeTabBar />
    <HomeSwiper />
    <HomeDaily />
    <HomeRecommend />
    <HomeLibrary />
    <BottomTab :active="0" />
  </div>
</template>



<style scoped lang="scss">
#home {
  margin-bottom: var(--bottom-navigation-height);
  background-color: #f3f3f3;
}
</style>
