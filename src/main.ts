import { createApp } from "vue";
import { createPinia } from "pinia";
import { maska } from 'maska';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  RiCheckFill,
  RiFileCopyLine,
  RiAddFill,
  RiSearchLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiLoader2Fill,
  RiMenuFill,
} from "oh-vue-icons/icons";

import router from "./pages/routes";
import App from "./App.vue";

import "./style.css";
import "flag-icons";

addIcons(
  RiCheckFill,
  RiFileCopyLine,
  RiAddFill,
  RiSearchLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiLoader2Fill,
  RiMenuFill,
);

createApp(App)
  .use(createPinia())
  .use(router)
  .component("v-icon", OhVueIcon)
  .directive('maska', maska)
  .mount("#app");
