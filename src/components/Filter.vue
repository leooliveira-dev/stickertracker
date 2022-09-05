<script setup lang="ts">
import { reactive, watch } from "vue";
import Loader from "./Loader.vue";
import GroupFilter from "./Filters/GroupFilter.vue";
import StateFilter from "./Filters/StateFilter.vue";

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
  <Teleport to="#filter-drawer-container">
    <div class="flex flex-col items-center justify-center gap-4 my-4 overflow-visible">
      <p class="prose-lg font-semibold">Filtros</p>
      <GroupFilter v-model="inputs.group"></GroupFilter>
      <StateFilter v-model="inputs.state"></StateFilter>
      <Loader v-if="loading"/>
    </div>
  </Teleport>
</template>
