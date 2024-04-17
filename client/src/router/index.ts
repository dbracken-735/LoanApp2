import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/R8sv0iwJ3eThSpEoe6qnYQhBZOkTwVitpG9thUOMVRMLILE0CPwWZ89cwSKXRS4n",
    name: "home",
    component: () => import("../components/Home.vue"),
    meta: {
      routeId: 23,
      requiresAuth: true,
      displayHeading: "Vite + Vue 3 + TypeScript + Pinia + TailwindCSS",
    },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("../components/Instructions/Instructions.vue"),
        meta: {
          routeId: 23,
          requiresAuth: true,
          displayHeading: "The Supe",
        },
        children: [
          {
            path: "/instructions",
            name: "instructions",
            component: () =>
              import("../components/Instructions/Instructions.vue"),
            meta: {
              routeId: 23,
              requiresAuth: true,
              displayHeading: "The Supe",
            },
            children: [],
          },
        ],
      },
      {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: () => import("../components/404.vue"),
        meta: {
          routeId: 23,
          requiresAuth: false,
          displayHeading: "The Supe: Not Found",
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, _from, next) => {
//   const store = useSupeStore();

//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!store.userAuthentication.isUserAuth) {
//       return next({ name: "login" });
//     } else {
//       return next();
//     }
//   } else {
//     next();
//   }
// }
// );

export default router;
