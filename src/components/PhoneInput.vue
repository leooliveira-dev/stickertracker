<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
  modelValue: string;
  name: string;
}>();
const emits = defineEmits(["update:modelValue"]);

const input = ref<string>();

watch(input, (value) => emits("update:modelValue", value));
watch(
  () => props.modelValue,
  (value) => (input.value = value),
  { immediate: true }
);

const mask = ["+55 (##) ####-####", "+55 (##) #####-####"];
</script>

<template>
  <div class="flex flex-row items-center gap-2 w-full">
    <label :for="name" class="label"><slot></slot></label>
    <input
      :name="name"
      type="tel"
      class="input w-full"
      v-maska="mask"
      v-model="input"
    />
  </div>
</template>