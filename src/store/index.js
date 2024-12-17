import { createStore } from "vuex";

export default createStore({
  state: {
    picUrl: "http://61.177.54.154:3010/novelPic/",
    plateUrl: "http://61.177.54.154:3010/novelPicture/",

    // picUrl: "https://images.sanyeex.top/novelPic/",
    // plateUrl: "https://images.sanyeex.top/novelPicture/",
    // picUrl: "https://images.celery.top/novelPic/",
    // plateUrl: "https://images.celery.top/novelPicture/",
    tabBarShow: true,
    searchScroll: 0,
  },
  getters: {},
  mutations: {
    // 修改搜索滚动条位置
    setSearchScroll(state, value) {
      state.searchScroll = value;
    },
  },
  actions: {},
  modules: {},
});
