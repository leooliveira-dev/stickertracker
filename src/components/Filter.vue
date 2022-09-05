<script setup lang="ts">
import { reactive, watch } from "vue";
import Loader from "./Loader.vue";
import GroupFilter from "./Filters/GroupFilter.vue";

const props = defineProps<{
  modelValue: {
    group: string;
    state: string;
  };
  loading: boolean;
}>();
const emits = defineEmits(["update:modelValue"]);

const inputs = reactive<{
  group: string;
  state: string;
}>(props.modelValue);

watch(inputs, (value) => { emits("update:modelValue", value) });
</script>

<template>
  <Portal target="#drawer-side">
    <div class="flex flex-col items-center justify-center gap-4 my-4 overflow-hidden">
      <p class="prose-lg font-semibold">Filtros</p>
      <GroupFilter v-model="inputs.group"></GroupFilter>
      <div class="flex flex-row items-center gap-2">
        <label class="label cursor-pointer">
          <span class="label-text mr-2">Todas</span>
          <input
            type="radio"
            class="radio checked:bg-primary"
            name="stickerState"
            v-model="inputs.state"
            value="all"
            checked
          />
        </label>
        <label class="label cursor-pointer">
          <span class="label-text mr-2">Obtidas</span>
          <input
            type="radio"
            class="radio checked:bg-success"
            name="stickerState"
            v-model="inputs.state"
            value="marked"
          />
        </label>
        <label class="label cursor-pointer">
          <span class="label-text mr-2">Repetidas</span>
          <input
            type="radio"
            class="radio checked:bg-warning"
            name="stickerState"
            v-model="inputs.state"
            value="spare"
          />
        </label>
      </div>
      <Loader v-if="loading"/>
    </div>
  </Portal>
</template>
