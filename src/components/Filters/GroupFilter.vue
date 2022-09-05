<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '../../store';
import { compact, uniq } from 'lodash';
import Flag from '../Flag.vue';

const props = defineProps<{
  modelValue: string;
}>();
const emits = defineEmits(["update:modelValue"]);

const { allStickers } = storeToRefs(useStore());

const groupNames = ["FWC", "A", "B", "C", "D", "E", "F", "G", "H"];
const groups = groupNames.map((groupName) => {
  return groupName === "FWC" ? {
    name: groupName,
  } : {
    name: groupName,
    countries: uniq(compact(allStickers.value.map((sticker) => { if (sticker.group === groupName) return sticker.country })))
  }
})

const getTooltip = (group: {name: string, countries?: string[]}) => !group.countries ? 'Taça, Estádios e etc' : `Grupo ${group.name}`;
</script>

<template>
<ul class="flex flex-col items-start gap-2">
  <li v-for="group in groups" :key="group.name" class="tooltip tooltip-left" :data-tip="getTooltip(group)">
    <button :class="group.name === modelValue ? 'btn btn-primary' : 'btn'" @click="() => emits('update:modelValue', group.name)">
      <span class="flex flex-row items-center gap-1" v-if="group.countries">
        <Flag v-for="country in group.countries" :key="country" :country="country"/>
      </span>
      <span v-else>{{ group.name }}</span>
    </button>
  </li>
</ul>
</template>