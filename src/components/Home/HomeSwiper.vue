<template>
  <div class="home-swiper">
    <var-swipe class="swipe-example shadow" :autoplay="2000" :loop="false">
      <var-swipe-item v-for="(url, index) in imgUrl" :key="index" @click="onClickSwipeItem(index)">
        <img class="swipe-example-image" :src="url" alt="">
      </var-swipe-item>
    </var-swipe>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const imgUrl = ref([
  require("@/assets/images/170889.jpg"),
  require("@/assets/images/172385.jpg"),
  require("@/assets/images/172555.jpg"),
  require("@/assets/images/173076.jpg"),
  require("@/assets/images/173540.jpg")
])

function onClickSwipeItem(index) {
  // 在这里实现你的跳转逻辑
  // 例如，跳转到一个新的页面
  // index = (index + 21).toString();
  // index = parseInt(index + 21);
  router.push({ path: `/novel/${index + 21}` });
}
</script>

<style scoped lang="scss">
.home-swiper {
  // margin-top: 15px;
  padding: 0 15px 15px 15px;

  // border: #3f3f3f 1px solid;
  background-color: #fff;
}

.swipe-example {
  height: 200px;
  border-radius: 10px;

  .swipe-example-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .swipe-example-indicators {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 4px 0;
    color: #fff;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
