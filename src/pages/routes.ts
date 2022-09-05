import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./Home.vue";
import Collection from "./Collection.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/collection', component: Collection },
  ]
})

export default router;