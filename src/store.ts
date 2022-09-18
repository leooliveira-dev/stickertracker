import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

import stickers from "./content/stickers.json";
import { getLocalProfile, saveLocalProfile } from "./helpers/localStorage";

export const useStore = defineStore("store", () => {
  const allStickers = reactive<Sticker[]>(stickers);

  const profile = reactive<Profile>(getLocalProfile());

  const userData = computed(() => ({
    name: profile.name,
    contact: profile.contact,
  }));
  const collection = computed(() => profile.collection);
  const spares = computed(() =>
    profile.collection.stickers.filter((sticker) => sticker.spareAmount && sticker.spareAmount > 0)
  );
  const needed = computed(() =>
    profile.collection.stickers.filter((sticker) => !sticker.marked)
  );

  const findStickerOnCollection = (stickerCode: string) => {
    return profile.collection.stickers.findIndex(
      (sticker) => (sticker.code === stickerCode)
    );
  };
  const findExtraStickerOnCollection = (stickerCode: string) => {
    return profile.collection.extras.findIndex(
      (sticker) => (sticker.code === stickerCode)
    );
  };

  const updateCollection = (code: string, add: boolean, isExtra?: boolean) => {
    const stickerIndex = isExtra
      ? findExtraStickerOnCollection(code)
      : findStickerOnCollection(code);
    
    if (stickerIndex >= 0) {
      if (isExtra) {
        profile.collection.extras[stickerIndex].marked = add;
      } else {
        profile.collection.stickers[stickerIndex].marked = add;
      }
    }
    saveLocalProfile(profile);
  };

  const changeSpareAmount = (
    code: string,
    spareAmount: number,
    isExtra?: boolean
  ) => {
    const stickerIndex = isExtra
      ? findExtraStickerOnCollection(code)
      : findStickerOnCollection(code);
    if (stickerIndex >= 0) {
      if (isExtra) {
        profile.collection.extras[stickerIndex].spareAmount = spareAmount;
      } else {
        profile.collection.stickers[stickerIndex].spareAmount = spareAmount;
      }
    }
    saveLocalProfile(profile);
  };

  const updateProfile = (info: {name: string, contact: { whatsapp: string, instagram: string, facebook: string }}) => {
    profile.name = info.name;
    profile.contact = info.contact;
    saveLocalProfile(profile);
  }

  return {
    allStickers,
    userData,
    collection,
    spares,
    needed,
    updateCollection,
    changeSpareAmount,
    updateProfile,
  };
});
