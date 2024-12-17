<template>
  <div id="search">
    <BackBar title="搜索"></BackBar>
    <SearchInput></SearchInput>
    <SearchPopular></SearchPopular>
    <SearchHistory></SearchHistory>
  </div>
</template>

<script name="Search" setup>
import BackBar from "@/components/Common/BackBar.vue";
import SearchInput from "@/components/Search/SearchInput.vue";
import SearchPopular from "@/components/Search/SearchPopular.vue";
import SearchHistory from "@/components/Search/SearchHistory.vue";
</script>

<style scoped lang="scss">
#search {
  /**
   * 为搜索页面的顶部设置内边距，使其与页面顶部保持一定距离。
   * 这里设置的是 1.6rem，你可以根据实际需要调整这个值。
   */
  padding-top: 0.2rem;
}

:deep(.var-app-bar) {
  /**
   * 提高 var-app-bar 类的 z-index 值，确保它在页面层级中位于其他元素之上。
   * 这通常用于确保导航栏或其他固定在页面顶部的元素能够覆盖其他内容。
   * 这里将 z-index 设置为 10，但你可能需要根据具体布局调整这个值。
   */
  z-index: 10;
}
</style>
