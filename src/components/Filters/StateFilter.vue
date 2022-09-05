<script lang="ts" setup>import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: string
}>();

const emits = defineEmits(["update:modelValue"]);

const input = ref<string>("");

watch(input, (value) => emits("update:modelValue", value));
watch(() => props.modelValue, (value) => input.value = value, { immediate: true });
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <label class="label cursor-pointer">
      <span class="label-text mr-2">Todas</span>
      <input
        type="radio"
        class="radio checked:bg-primary"
        name="stickerState"
        v-model="input"
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
        v-model="input"
        value="marked"
      />
    </label>
    <label class="label cursor-pointer">
      <span class="label-text mr-2">Repetidas</span>
      <input
        type="radio"
        class="radio checked:bg-warning"
        name="stickerState"
        v-model="input"
        value="spare"
      />
    </label>
  </div>
</template>
