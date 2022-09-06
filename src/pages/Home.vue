<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import Heading from '../components/Heading.vue';
import Flag from '../components/Flag.vue';
import CodeGrid from '../components/CodeGrid.vue';

import { useStore } from '../store';

const store = useStore();
const { userData, allStickers, spares, needed } = storeToRefs(store);

const completionPercentage = computed(() => Math.floor(100 - (needed.value.length * 100 / allStickers.value.length)));

const copyToClipboard = (stickers: Sticker[]) => {
  navigator.clipboard.writeText(stickers.map(sticker => sticker.code).join(", "));
}
</script>

<template>
  <div class="container">
    <Heading>
      {{ userData.name ? `Perfil de ${userData.name}` : `Perfil` }}
      <template v-slot:socials>
        <ul class="flex flex-row items-center gap-2">
          <li>
            <a v-if="userData.contact.whatsapp" :href="userData.contact.whatsapp" target="_blank"><v-icon name="ri-whatsapp-line"></v-icon></a>
            <v-icon v-else name="ri-whatsapp-line"></v-icon>
          </li>
          <li>
            <a v-if="userData.contact.instagram" :href="userData.contact.instagram" target="_blank"><v-icon name="ri-instagram-line"></v-icon></a>
            <v-icon v-else name="ri-instagram-line"></v-icon>
          </li>
          <li>
            <a v-if="userData.contact.facebook" :href="userData.contact.facebook" target="_blank"><v-icon name="ri-facebook-circle-line"></v-icon></a>
            <v-icon v-else name="ri-facebook-circle-line"></v-icon>
          </li>
        </ul>
      </template>
    </Heading>
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-8">
      <div class="card card-normal bg-base-100 overflow-visible">
        <div class="card-body">
          <div class="w-full flex items-center justify-between mb-4">
            <h2 class="prose-lg font-semibold flex items-center gap-2">Repetidas <span class="badge">{{spares.length}}</span></h2>
            <button class="btn btn-secondary tooltip tooltip-top" data-tip="Copiar lista" @click="() => copyToClipboard(spares)">
              <v-icon name="ri-file-copy-line"></v-icon>
            </button>
          </div>
          <CodeGrid v-if="spares.length > 0" :stickers="spares"/>
          <p v-else>Nenhuma figurinha repetida</p>
        </div>
      </div>
      <div class="card card-normal bg-base-100 overflow-visible">
        <div class="card-body">
          <div class="w-full flex items-center justify-between mb-4">
            <h2 class="prose-lg font-semibold flex items-center gap-2 tooltip tooltip-top" :data-tip="`${completionPercentage}% do álbum concluído`">
              Faltantes <span class="badge">{{needed.length}}</span>
            </h2>
            <button class="btn btn-secondary tooltip tooltip-top" data-tip="Copiar lista" @click="() => copyToClipboard(needed)">
              <v-icon name="ri-file-copy-line"></v-icon>
            </button>
          </div>
          <CodeGrid v-if="needed.length > 0" :stickers="needed"></CodeGrid>
          <p v-else>Não está precisando de nenhuma figurinha</p>
        </div>
      </div>
    </section>
  </div>
</template>