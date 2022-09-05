<script setup lang="ts">
import { reactive, watch } from "vue";
import { getAllCountries } from "../helpers/country";
import Loader from "./Loader.vue";

const props = defineProps<{
  modelValue: {
    countryCode: string;
    group: string;
    state: string;
  };
  loading: boolean;
}>();
const emits = defineEmits(["update:modelValue"]);

const countries = getAllCountries();
const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

const inputs = reactive<{
  countryCode: string;
  group: string;
  state: string;
}>(props.modelValue);

watch(inputs, (value) => { emits("update:modelValue", value) });
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-4 my-4">
    <p class="flex flex-row items-center gap-2">
      <v-icon name="ri-search-line"></v-icon> Filtrar por:
    </p>
    <select class="select w-32" v-model="inputs.countryCode">
      <option disabled selected>País</option>
      <option v-for="country in countries" :value="country?.code">
        {{ country?.br }}
      </option>
    </select>
    <select class="select w-32" v-model="inputs.group">
      <option disabled selected>Grupo</option>
      <option v-for="group in groups" :value="group">
        {{ `Grupo ${group}` }}
      </option>
    </select>
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
    <Loader v-if="loading"/>
  </div>
</template>
