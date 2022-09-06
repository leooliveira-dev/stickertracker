<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ modelValue: string, type?: string, name: string }>();
const emits = defineEmits(["update:modelValue"]);

const input = ref<string>();

watch(input, (value) => emits("update:modelValue", value));
watch(() => props.modelValue, (value) => input.value = value, { immediate: true });
</script>

<template>
  <div class="flex flex-row items-center gap-2 w-full">
    <label :for="name" class="label"><slot></slot></label>
    <input :name="name" :type="type ?? 'text'" class="input w-full" v-model="input">
  </div>
</template>