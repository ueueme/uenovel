<script setup>
import { getLibraryNovel } from "@/api/library"; // 导入获取图书馆小说的 API
import LibraryContentItem from "@/components/Library/LibraryContentItem.vue"; // 导入小说列表项组件
import { onActivated, onDeactivated, onMounted, ref, watch } from "vue"; // 导入 Vue 的生命周期钩子和响应式 API
import { useRoute } from "vue-router"; // 导入 Vue Router 的 useRoute 函数
import emitter from "@/utils/emitter"; // 导入事件发射器

const route = useRoute() // 获取当前路由对象

const query = ref({
  limit: 20,
  page: 1
}) // 定义查询参数，每页限制 20 条，初始页码为 1

const loading = ref(true) // 定义加载状态，初始为 true
const finished = ref(false) // 定义加载完成状态，初始为 false
const novelList = ref([]) // 定义小说列表，初始为空数组
const isRoute = ref(true) // 定义路由状态，防止切换网页时刷新数据

onMounted(() => {
  novelList.value = [] // 组件挂载时，清空小说列表
  query.value = { limit: query.value.limit, page: query.value.page, ...route.query } // 更新查询参数
  initLibraryNovel() // 初始化图书馆小说数据
  // 返回顶部
  window.scrollTo({
    top: 0,
  })
})

onActivated(() => {
  isRoute.value = false // 组件激活时，设置路由状态为 false
})

onDeactivated(() => {
  isRoute.value = false // 组件停用时，设置路由状态为 false
})

// 接收来自 libraryHeader 的筛选事件
emitter.on('isRoute', value => {
  isRoute.value = value // 更新路由状态
})

// 初始化文库数据
async function initLibraryNovel() {
  loading.value = true // 设置加载状态为 true
  finished.value = false // 设置加载完成状态为 false
  // 发起网络请求
  const res = await getLibraryNovel(query.value)

  // 追加数据
  novelList.value = [...novelList.value, ...res.data.list]

  if (res.data.list.length < query.value.limit) {
    finished.value = true // 如果返回的数据少于每页限制，则设置加载完成状态为 true
  }

  setTimeout(() => {
    loading.value = false // 延迟 1500 毫秒后，设置加载状态为 false
  }, 1500)
}

// 下拉加载
function onLoad() {
  query.value.page++ // 增加页码
  initLibraryNovel() // 重新获取数据
}

watch(() => route.query, () => {
  if (isRoute.value) {
    novelList.value = [] // 如果路由状态为 true，则清空小说列表
    query.value = { limit: query.value.limit, page: 1, ...route.query } // 更新查询参数
    initLibraryNovel() // 重新获取数据
  }
})
</script>

<template>
  <div class="library-content">
    <div class="library-content-list">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">

        <LibraryContentItem :id="item.id" :pic-url="item.picUrl" :name="item.name" :is-animation="item.isAnimation"
          :intro="item.intro" :author="item.author" :tags="item.classTags" :is-serial="item.isSerial"
          v-for="item in novelList">
        </LibraryContentItem>
      </van-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
.library-content {
  background-color: #fff;
  // margin-top: 30px;

  .library-content-list {
    padding-top: 55px;
    padding-bottom: 60px;
  }

  .is-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
