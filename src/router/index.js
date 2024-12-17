import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      meta: {
        title: "首页-易悦轻小说",
      },
      component: () => import("@/views/Home/Home.vue"),
    },
    {
      path: "/library",
      meta: {
        title: "文库-易悦轻小说",
      },
      name: "Library",
      component: () => import("@/views/Library/Library.vue"),
    },
    {
      path: "/404",
      name: "404",
      meta: {
        title: "404 not found",
      },
      component: () => import("@/views/Error/404.vue"),
    },
    {
      path: "/novel/:id",
      name: "Novel",
      meta: {
        title: "详情-易悦轻小说",
      },
      component: () => import("@/views/Novel/Novel.vue"),
    },
    {
      path: "/user",
      name: "User",
      meta: {
        title: "用户中心-易悦轻小说",
      },
      component: () => import("@/views/User/User.vue"),
    },
    {
      path: "/search",
      name: "Search",
      meta: {
        title: "搜索-易悦轻小说",
      },
      component: () => import("@/views/Search/Search.vue"),
    },
    {
      path: "/read/:id",
      meta: {
        title: "阅读-易悦轻小说",
      },
      name: "Read",
      component: () => import("@/views/Read/Read.vue"),
    },
    {
      path: "/user/personal",
      meta: {
        title: "个人中心-易悦轻小说",
      },
      name: "Personal",
      component: () => import("@/views/User/Personal/Personal.vue"),
    },
    {
      path: "/user/history",
      name: "History",
      meta: {
        title: "历史浏览-易悦轻小说",
      },
      component: () => import("@/views/User/History/History.vue"),
    },
    {
      path: "/user/collect",
      name: "Collect",
      meta: {
        title: "我的收藏-易悦轻小说",
      },
      component: () => import("@/views/User/Collect/Collect.vue"),
    },
    {
      path: "/user/comment",
      name: "Comment",
      meta: {
        title: "我的评论-易悦轻小说",
      },
      component: () => import("@/views/User/Comment/Comment.vue"),
    },
    {
      path: "/user/feedback",
      name: "Feedback",
      meta: {
        title: "问题反馈-易悦轻小说",
      },
      component: () => import("@/views/User/Feedback/Feedback.vue"),
    },
    {
      path: "/user/request",
      name: "Request",
      meta: {
        title: "求书-易悦轻小说",
      },
      component: () => import("@/views/User/Request/Request.vue"),
    },
    {
      path: "/user/about",
      name: "About",
      meta: {
        title: "关于我们-易悦轻小说",
      },
      component: () => import("@/views/User/About/About.vue"),
    },
    // {
    //   path: "/test",
    //   meta: {
    //     title: "test-易悦轻小说",
    //   },
    //   name: "Test",
    //   component: () => import("@/views/Test/Test.vue"),
    // },
    {
      path: "/user/forget",
      name: "Forget",
      meta: {
        title: "忘记密码-易悦轻小说",
      },
      component: () => import("@/views/User/Forget/Forget.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});

router.beforeEach(async (to) => {
  const title = to.meta.title;
  // 动态修改标题
  if (title) {
    document.title = title;
  }
});

export default router;