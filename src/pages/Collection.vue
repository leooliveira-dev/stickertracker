<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";

import { useStore } from "../store";
import CollectionItem from "../components/CollectionItem.vue";
import Heading from "../components/Heading.vue";
import Filter from "../components/Filter.vue";

const store = useStore();
const { collection } = storeToRefs(store);

const filters = reactive({
  group: "FWC",
  state: "",
});
const isFiltering = ref<boolean>(false);
const filteredCollection = computed(() => {
  //TODO: Refinar mecanismo de filtragem
  let filtered = collection.value.stickers;

  isFiltering.value = true;

  if (filters.group)
    filtered = filtered.filter((sticker) => {
      return filters.group === "FWC"
        ? !sticker.group
        : sticker.group === filters.group;
    });
  if (filters.state === "spare")
    filtered = filtered.filter(
      (sticker) => sticker.spareAmount && sticker.spareAmount > 0
    );
  else if (filters.state === "marked")
    filtered = filtered.filter((sticker) => !!sticker.marked);

  isFiltering.value = false;
  return filtered;
});
</script>

<template>
  <div class="container">
    <Heading>Minha coleção</Heading>
    <div class="tabs justify-center">
      <a class="tab tab-lg tab-lifted tab-active">Padrão</a>
      <a class="tab tab-lg tab-lifted">Extras</a>
    </div>
    <div class="p-2 mb-8 bg-base-300 rounded-xl">
      <Filter v-model="filters" :loading="isFiltering" />
      <CollectionItem
        v-for="sticker in filteredCollection"
        :key="sticker.code"
        :sticker="sticker"
        @add="() => store.updateCollection(sticker.code, true, false)"
        @remove="() => store.updateCollection(sticker.code, false, false)"
        @update:spare-amount="
          (value) => store.changeSpareAmount(sticker.code, value, false)
        "
      />
    </div>
  </div>
</template>
