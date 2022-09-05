import { createApp } from "vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  RiCheckFill,
  RiFileCopyLine,
  RiAddFill,
  RiSearchLine,
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiLoader2Fill
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
  RiLoader2Fill
);

createApp(App)
  .use(createPinia())
  .use(router)
  .component("v-icon", OhVueIcon)
  .mount("#app");
