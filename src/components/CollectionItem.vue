<script setup lang="ts">
import { ref, watch } from "vue";
import { getInputEventValue } from "../helpers/event";
import Flag from "./Flag.vue";

const props = defineProps<{
  sticker: Sticker;
}>();

const emits = defineEmits(["add", "remove", "update:spareAmount"]);

const counter = ref<number>(0);

watch(
  () => props.sticker.spareAmount,
  (value) => {
    if (value) counter.value = value;
  },
  { immediate: true }
);

const handleSpareInput = (event: Event) => {
  counter.value = Number(getInputEventValue(event));
  emits("update:spareAmount", counter.value);
};
</script>
<template>
  <div
    class="card card-compact mb-2 overflow-visible"
    :class="sticker.marked ? 'bg-primary' : 'bg-base-100'"
  >
    <div class="card-body flex flex-row items-center overflow-visible">
      <Flag :country="sticker.country ?? ''"></Flag>
      <p class="card-title text-white">{{ sticker.code }}</p>
      <p>{{ sticker.name }}</p>
      <ul class="flex flex-row items-center gap-4">
        <li class="tooltip tooltip-top" data-tip="Tenho">
          <button
            class="btn btn-circle"
            :class="!sticker.marked ? '' : 'btn-success'"
            @click="emits(sticker.marked ? 'remove' : 'add')"
          >
            <v-icon :name="sticker.marked ? 'ri-check-fill' : 'ri-add-fill'" />
          </button>
        </li>
        <li class="tooltip tooltip-top" data-tip="Repetida">
          <button
            class="btn btn-circle"
            :class="!sticker.marked ? 'btn-disabled' : 'btn-warning'"
            :disabled="!sticker.marked"
            @click="emits('update:spareAmount', counter + 1)"
          >
            <v-icon name="ri-file-copy-line" />
          </button>
        </li>
        <li v-if="counter > 0">
          <input
            type="number"
            :value="counter"
            @input="(event) => handleSpareInput(event)"
            class="bg-base-300 w-24 border-none rounded-md"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
