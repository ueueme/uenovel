<template>
  <div class="user-options">
    <div class="user-options-item" v-for="item in userOptionsList" v-ripple="{ color: '#aaa' }" @click="onLink(item)">
      <div class="user-options-left">
        <component :is="item.icon" theme="outline" size="0.35rem" fill="#333"></component>
        <span class="user-personal">{{ item.name }}</span>
      </div>
      <div class="user-options-right">
        <right theme="outline" size="0.35rem" fill="#333" strokeLinejoin="bevel" strokeLinecap="square" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Right, DocumentFolder, Comment, SmilingFace, Info, History, Bookshelf, Like } from "@icon-park/vue-next";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const userOptionsList = ref([
  { name: "个人中心", icon: User, path: '/user/personal' },
  { name: "历史浏览", icon: History, path: '/user/history' },
  { name: "我的收藏", icon: DocumentFolder, path: '/user/collect' },
  // { name: "我的评论", icon: Comment, path: '/user/comment' },
  { name: "问题反馈", icon: SmilingFace, path: '/user/feedback' },
  // { name: "求书", icon: Bookshelf, path: '/user/request' },
  { name: "免费应用", icon: Like, path: 'https://www.123pan.com/s/csSaTd-6Yxw3.html' },
  { name: "关于", icon: Info, path: '/user/about' },
]);

// 定义 isExternal 方法
function isExternal(url) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

// 修改 onLink 方法以不使用 this
function onLink(item) {
  if (item && item.path) {
    if (isExternal(item.path)) {
      window.open(item.path, '_blank');  // 在新标签页中打开外部链接
    } else {
      router.push(item.path);
    }
  }
}
</script>

<style scoped lang="scss">
.user-options {
  position: relative;
  z-index: 11;
  background-color: #fff;
}

.user-options-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 15px;
  border-bottom: 1px solid #eee;

  .user-options-left {
    display: flex;
    align-items: center;

    .user-personal {
      padding-left: 5px;
    }
  }

  .user-options-right {
    display: flex;
    align-items: center;
  }
}

:deep(.i-icon) {
  display: flex;
  align-items: center;
}
</style>
