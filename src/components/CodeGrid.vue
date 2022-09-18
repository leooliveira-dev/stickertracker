<script setup lang="ts">
defineProps<{
  stickers: Sticker[]
}>();
</script>

<template>
  <ul class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
    <li v-for="sticker in stickers" class="tooltip tooltip-top" :data-tip="sticker.name">
      <button class="w-full" :class="sticker.name.includes('FOIL') ? 'btn foil foil-text' : 'btn'">{{sticker.code}}</button>
    </li>
  </ul>
</template>