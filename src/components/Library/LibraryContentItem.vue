<template>
  <div class="library-content-item" @click.stop="onLink">
    <div class="library-content-img">
      <img v-lazy="picUrlSplice()" class="shadow" alt="">
    </div>
    <div class="library-content-info">
      <div class="library-content-top">
        <div class="library-content-name">
          {{ name }}
        </div>
        <div class="library-content-animation" v-if="isAnimation">
          动画化
        </div>
      </div>
      <div class="library-content-tags">
        <div class="library-content-tag" v-for="tag in tags" v-if="isTags">{{ tag }}</div>
        <div class="library-content-tag" v-for="tag in tagsSplice(tags)" v-else>{{ tag }}</div>
      </div>
      <div class="library-content-intro">
        {{ intro.toString().replace(/\s+/g, '') }}
      </div>

      <div class="library-content-bottom">
        <div class="library-content-author">
          {{ author }}
        </div>
        <div class="library-content-bottom-right">
          <!-- <div class="library-content-tags">
            <div class="library-content-tag" v-for="tag in tags" v-if="isTags">{{ tag }}</div>
            <div class="library-content-tag" v-for="tag in tagsSplice(tags)" v-else>{{ tag }}</div>
          </div> -->
          <div class="library-content-serial">
            {{ isSerial ? '连载中' : '已完结' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

// 引入 Vue Router 用于路由跳转
const router = useRouter()
// 引入 Vuex 的 store 用于获取全局状态
const store = useStore()

// 使用 computed 监听 store 中的 picUrl 状态
const storePicUrl = computed(() => store.state.picUrl)

// 定义组件的属性
const props = defineProps({
  // 小说 ID，类型为数字，默认值为 0
  id: {
    type: Number,
    default: 0
  },
  // 小说图片链接，类型为字符串，默认值为空字符串
  picUrl: {
    type: String,
    default: ""
  },
  // 小说名称，类型为字符串，默认值为空字符串
  name: {
    type: String,
    default: ""
  },
  // 是否动画化，类型为布尔值，默认值为 false
  isAnimation: {
    type: Boolean,
    default: false
  },
  // 小说简介，类型为数组，默认值为空数组
  intro: {
    type: Array,
    default: []
  },
  // 小说作者，类型为字符串，默认值为空字符串
  author: {
    type: String,
    default: ""
  },
  // 小说标签，类型为数组，默认值为空数组
  tags: {
    type: Array,
    default: []
  },
  // 是否连载中，类型为布尔值，默认值为 false
  isSerial: {
    type: Boolean,
    default: false
  },
  // 是否显示标签，类型为布尔值，默认值为 false
  isTags: {
    type: Boolean,
    default: false
  }
})

// 处理图片链接
function picUrlSplice() {
  // 将 store 中的 picUrl 和组件的 id、picUrl 拼接成完整的图片链接
  return `${storePicUrl.value}${props.id}/${props.picUrl}`
}

// 搜索区域 tags 显示不正常
function tagsSplice(tags) {
  // 截取 tags 数组的前三个元素
  return tags.splice(0, 3)
}

// 跳转路由
function onLink() {
  // 点击小说项时，跳转到小说详情页，路径为 /novel/{id}
  router.push({
    path: `/novel/${props.id}`,
  })
}
</script>

<style scoped lang="scss">
.library-content-item {
  display: flex;
  padding: 15px 10px;
  border-bottom: 1px solid #eee;

  .library-content-img img {
    width: 120px;
    height: 180px;
    border-radius: 2px;
  }

  .library-content-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;

    .library-content-top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .library-content-name {
        font-size: 22px;
        font-weight: 600;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; //设置行数
        overflow: hidden;
      }

      .library-content-animation {
        white-space: nowrap;
        font-size: 18px;
        color: red;
        padding-left: 2px;
      }
    }

    .library-content-intro {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4; //设置行数
      overflow: hidden; //超出隐藏
      font-size: 15px;
      color: #666;
    }

    .library-content-tags {
      width: auto;
      display: flex;


      // padding: 0 2px;

      .library-content-tag {
        font-size: 16px;
        color: #ff81ba;
        border: 1px solid #ff81ba;
        padding: 0 2px;
        margin: 0 3px;
        border-radius: 2px;
        // padding: 2px 0 2px 5px;
      }
    }

    .library-content-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .library-content-author {
        font-size: 18px;
        // color: #666;
        color: #8100a8b7;
      }

      .library-content-bottom-right {
        display: flex;
        align-items: center;



        .library-content-serial {
          font-size: 16px;
          color: #1E90FF;
          padding-left: 8px;
        }
      }
    }
  }
}
</style>
