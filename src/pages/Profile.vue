<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import Heading from '../components/Heading.vue';
import { useStore } from '../store';

const store = useStore();
const { userData } = storeToRefs(store);

const inputs = reactive({
  name: userData.value.name,
  contact: {
    whatsapp: userData.value.contact.whatsapp,
    instagram: userData.value.contact.instagram,
    facebook: userData.value.contact.facebook,
  }
})

const handleSubmit = () => {
  store.updateProfile(inputs);
}
</script>
<template>
  <div class="container">
    <Heading>Meu perfil</Heading>
    <form @submit.prevent="handleSubmit" novalidate class="flex flex-col lg:flex-row items-start lg:items-center justify-between">
      <div class="flex flex-row items-center gap-2">
        <label for="name" class="label">Nome</label>
        <input name="name" type="text" class="input" v-model="inputs.name">
      </div>
      <div class="flex flex-row items-center gap-2">
        <label for="whatsapp" class="label">WhatsApp</label>
        <input name="whatsapp" type="tel" class="input" v-model="inputs.contact.whatsapp">
      </div>
      <div class="flex flex-row items-center gap-2">
        <label for="instagram" class="label">Instagram</label>
        <input name="instagram" type="text" class="input" v-model="inputs.contact.instagram">
      </div>
      <div class="flex flex-row items-center gap-2">
        <label for="facebook" class="label">Facebook</label>
        <input name="facebook" type="text" class="input" v-model="inputs.contact.facebook">
      </div>
      <button type="submit" class="btn btn-primary">Salvar perfil</button>
    </form>
  </div>
</template>