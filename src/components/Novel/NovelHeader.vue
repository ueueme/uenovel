<template>
  <div class="novel-header" v-if="props.picUrl">
    <div class="novel-header-pic">
      <img :src="picUrl()" class="shadow" alt="">
    </div>
    <div class="novel-header-info">
      <div class="novel-header-top">
        <div class="novel-header-name">
          {{ props.name }}
        </div>
        <div class="novel-header-author">
          作者:{{ props.author }}
        </div>
      </div>
      <div class="novel-header-bottom">
        <div class="novel-header-isSerial">
          {{ props.isSerial === true ? '连载中' : '完结' }}
        </div>
        <div class="novel-header-className">
          {{ props.className }}
        </div>
        <div class="novel-header-isAnimation">
          {{ props.isAnimation === true ? '动画化' : '未动画化' }}
        </div>
      </div>
    </div>
    <div class="novel-header-bj">
      <div class="bj" :style="{ background: `url('${picUrl()}') center / cover no-repeat` }"></div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore()

const storePicUrl = computed(() => store.state.picUrl)

const props = defineProps({
  id: {
    type: Number,
    default: 0
  },
  picUrl: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  isSerial: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  },
  isAnimation: {
    type: Boolean,
    default: true
  },
})

// 处理图片链接
function picUrl() {
  return `${storePicUrl.value}${props.id}/${props.picUrl}`
}
</script>

<style scoped lang="scss">
.novel-header {
  display: flex;
  position: relative;
  padding: 50px 15px 0 20px;

  // 定义小说头部图片容器的样式
  .novel-header-pic {
    // 相对定位
    position: relative;
    // 层级为 11
    z-index: 11;
    // 向上平移 20px
    transform: translateY(20px);
  }

  // 定义小说头部图片的样式
  img {
    // 宽度为 140px
    width: 140px;
    // 高度为 200px
    height: 200px;
    // 图片填充方式为 裁剪
    object-fit: cover;
  }


  // 定义小说头部信息容器的样式
  .novel-header-info {
    // 弹性布局，主轴方向为列
    display: flex;
    flex-direction: column;
    // 内容对齐方式为底部对齐
    justify-content: space-around;
    // 相对定位
    position: relative;
    // 层级为 11
    z-index: 11;
    // 内边距为 0 0 10px 10px
    padding: 0 0 10px 10px;
    // 文字颜色为白色
    color: #fff;

    .novel-header-top {
      .novel-header-name {
        font-size: 20px;
        font-weight: 450;
        letter-spacing: 1px;
        text-shadow: 0 0 30px #000; //设置发光效果
      }

      .novel-header-author {
        font-size: 18px;
        text-shadow: 0 0 30px #000; //设置发光效果
        padding-top: 10px;
      }
    }

    .novel-header-bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 12px 0 10px 0;

      >div {

        padding-right: 10px;
        padding-top: 5px;
        font-size: 15px;
        text-shadow: 0 0 30px #000; //设置发光效果
        // border-right: 2px dotted rgba(0, 191, 255, 0.589);
      }
    }
  }

  .novel-header-bj {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    .bj {
      width: 100%;
      height: 100%;
      filter: blur(40px);
      transform: scale(1.1);
    }
  }
}
</style>
