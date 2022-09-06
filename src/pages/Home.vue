<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import Heading from '../components/Heading.vue';
import Flag from '../components/Flag.vue';
import CodeGrid from '../components/CodeGrid.vue';

import { useStore } from '../store';
import ListCard from '../components/ListCard.vue';

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
    <section>
      <ListCard :stickers="spares">
          <template v-slot:title>
            Repetidas <span class="badge">{{spares.length}}</span>
          </template>
        </ListCard>
      <ListCard :stickers="needed">
        <template v-slot:title>
          Faltantes <span class="badge tooltip tooltip-top" :data-tip="`${completionPercentage}% do álbum concluído`">{{needed.length}}</span>
        </template>
      </ListCard>
    </section>
  </div>
</template>