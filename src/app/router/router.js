import mainLayout from "../layout/mainLayout.vue"
import { createMemoryHistory, createRouter } from "vue-router"

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      component: mainLayout,
      redirect: { name: "mainPage" },
      children: [
        {
          path: "/main",
          name: "mainPage",
          component: () => import("../../pages/mainPage.vue"),
          meta: { showHeader: false },
        },
        {
          path: "/select",
          name: "gameSelect",
          component: () => import("../../pages/selectPage.vue"),
          meta: { showHeader: true },
        },
        {
          path: "/game/:id",
          name: "gamePage",
          component: () => import("../../pages/gamePage.vue"),
          meta: { showHeader: true },
        },
        {
          path: "/end/:score",
          name: "endPage",
          component: () => import("../../pages/endPage.vue"),
          meta: { showHeader: true },
        },
      ],
    },
  ],
})

export default router
