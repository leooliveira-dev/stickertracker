<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Heading from '../components/Heading.vue';
import Flag from '../components/Flag.vue';

import { useStore } from '../store';
import { computed } from 'vue';

const store = useStore();
const { userData, allStickers, spares, needed } = storeToRefs(store);

const completionPercentage = computed(() => Math.floor(100 - (needed.value.length * 100 / allStickers.value.length)));
</script>

<template>
  <div class="container">
    <Heading>
      {{ userData.name ? `Perfil de ${userData.name}` : `Perfil` }}
      <template v-slot:socials>
        <ul class="flex flex-row items-center gap-2">
          <li><v-icon name="ri-whatsapp-line"></v-icon></li>
          <li><v-icon name="ri-instagram-line"></v-icon></li>
          <li><v-icon name="ri-facebook-circle-line"></v-icon></li>
        </ul>
      </template>
    </Heading>
    <section class="grid grid-cols-2 gap-8 mb-8">
      <div class="card card-normal bg-base-100 overflow-visible">
        <div class="card-body">
          <h2 class="card-title flex items-center">Repetidas <span class="badge">{{spares.length}}</span></h2>
          <ul v-if="spares.length > 0" class="grid grid-cols-6 gap-4">
            <li v-for="sticker in spares" class="tooltip tooltip-top" :data-tip="`${sticker.name} - ${sticker.spareAmount}x`">
              <button class="btn w-full">{{sticker.code}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="card card-normal bg-base-100 overflow-visible">
        <div class="card-body">
          <div class="w-full flex justify-between">
            <h2 class="card-title flex items-center gap-2 m-0">
              Faltantes <span class="badge">{{needed.length}}</span>
            </h2>
            <p class="text-right text-sm">{{completionPercentage}}% do álbum concluído</p>
          </div>
          <ul v-if="needed.length > 0" class="grid grid-cols-6 gap-4">
            <li v-for="sticker in needed" class="tooltip tooltip-top" :data-tip="sticker.name">
              <button class="btn w-full">{{sticker.code}}</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>