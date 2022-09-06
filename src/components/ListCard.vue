<script setup lang="ts">
import CodeGrid from './CodeGrid.vue';
const props = defineProps<{ stickers: Sticker[] }>();

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.stickers.map(sticker => sticker.code).join(", "));
}
</script>

<template>
  <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box flex-grow">
    <input type="checkbox">
    <div class="collapse-title text-xl font-semibold">
      <h2 class="prose-lg font-semibold flex items-center gap-2">
        <slot name="title"></slot>
      </h2>
      
    </div>
    <div class="collapse-content">
      <div v-if="stickers.length > 0">
        <button class="btn btn-secondary w-full mb-4 tooltip tooltip-top" data-tip="Copiar lista" @click="copyToClipboard">
          <v-icon name="ri-file-copy-line"></v-icon>
          Copiar Lista
        </button>
        <CodeGrid :stickers="stickers"/>
      </div>
      <div v-else>
        Não há nenhuma figurinha marcada.
      </div>
    </div>
  </div>
</template>