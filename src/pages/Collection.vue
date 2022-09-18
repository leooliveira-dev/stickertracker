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
    <div class="flex flex-row justify-end mb-4 pt-4 sticky top-0 z-50">
      <label for="filter-drawer" class="btn btn-primary">
        <v-icon name="ri-search-line" class="mr-2"></v-icon>
        Filtrar
      </label>
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
