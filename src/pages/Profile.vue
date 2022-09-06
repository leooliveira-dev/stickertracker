<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { reactive, computed } from 'vue';
import { isEqual } from 'lodash';

import Heading from '../components/Heading.vue';
import { useStore } from '../store';
import TextInput from '../components/TextInput.vue';

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

const isDataTheSame = computed(() => isEqual(userData.value, inputs))
</script>
<template>
  <div class="container">
    <Heading>Meu perfil</Heading>
    <form @submit.prevent="handleSubmit" novalidate class="grid grid-cols-1 gap-2">
      <TextInput name="name" v-model="inputs.name">Nome</TextInput>
      <TextInput name="whatsapp" v-model="inputs.contact.whatsapp">WhatsApp</TextInput>
      <TextInput name="instagram" v-model="inputs.contact.instagram">Instagram</TextInput>
      <TextInput name="facebook" v-model="inputs.contact.facebook">Facebook</TextInput>
      <button type="submit" class="btn" :class="isDataTheSame ? 'btn-disabled' : 'btn-primary'" :disabled="isDataTheSame">Salvar perfil</button>
    </form>
  </div>
</template>