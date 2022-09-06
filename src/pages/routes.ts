import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./Home.vue";
import Profile from "./Profile.vue";
import Collection from "./Collection.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/collection', component: Collection },
  ]
})

export default router;