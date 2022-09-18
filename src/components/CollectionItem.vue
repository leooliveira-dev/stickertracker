<script setup lang="ts">
import { ref, watch } from "vue";
import { getInputEventValue } from "../helpers/event";
import Flag from "./Flag.vue";

const props = defineProps<{
  sticker: Sticker;
}>();

const emits = defineEmits(["add", "remove", "update:spareAmount"]);

const counter = ref<number>(0);
const isFoil = props.sticker.name.includes("FOIL");

watch(
  () => props.sticker.spareAmount,
  (value) => {
    if (value) counter.value = value;
  },
  { immediate: true }
);

const addSpare = () => {
  counter.value++;
  emits("update:spareAmount", counter.value);
}
const subtractSpare = () => {
  counter.value--;
  emits("update:spareAmount", counter.value);
}
</script>
<template>
  <div
    class="card card-compact mb-2 overflow-hidden"
    :class="sticker.marked ? 'bg-primary' : 'bg-base-100'"
  >
    <div class="card-body grid grid-cols-3 items-center">
      <div v-if="isFoil" class="foil absolute left-0 h-full w-32"></div>
      <div class="relative flex flex-row items-center gap-2">
        <Flag :country="sticker.country ?? ''"></Flag>
        <p class="card-title" :class="isFoil ? 'text-base-300 font-bold' : 'text-white'">{{ sticker.code }}</p>
      </div>
      <p class="hidden sm:block justify-self-center">{{ sticker.name }}</p>
      <ul class="flex flex-row items-center gap-4 justify-self-end">
        <li class="tooltip tooltip-left" data-tip="Tenho">
          <button
            class="btn btn-circle"
            :class="!sticker.marked ? '' : 'btn-success'"
            @click="emits(sticker.marked ? 'remove' : 'add')"
          >
            <v-icon :name="sticker.marked ? 'ri-check-fill' : 'ri-add-fill'" />
          </button>
        </li>
        <li class="tooltip tooltip-left" data-tip="Repetida">
          <button
            class="btn btn-circle"
            :class="!sticker.marked ? 'btn-disabled' : 'btn-error'"
            :disabled="!sticker.marked"
            @click="emits('update:spareAmount', counter + 1)"
          >
            <v-icon name="ri-file-copy-line" />
          </button>
        </li>
        <li v-if="counter > 0" class="tooltip tooltip-left" data-tip="Número de repetidas">
          <span class="font-bold text-xl text-white">{{counter}}x</span>
        </li>
        <li v-if="counter > 0" class="flex flex-col items-center w-full gap-1">
          <button @click.stop="addSpare" class="bg-base-300 font-bold text-white rounded-md py-1 px-2 w-full">+</button>
          <button @click.stop="subtractSpare" class="bg-base-300 font-bold text-white rounded-md py-1 px-2 w-full">-</button>
        </li>
      </ul>
    </div>
  </div>
</template>
