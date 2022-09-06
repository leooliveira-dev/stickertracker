<script setup lang="ts">
defineProps<{vertical?: boolean, className?: string}>();
</script>

<template>
  <ul class="flex items-center gap-4" :class="vertical ? 'flex-col' : 'flex-row'">
    <li><router-link to="/">Início</router-link></li>
    <li><router-link to="/profile">Meu perfil</router-link></li>
    <li><router-link to="/collection">Minha coleção</router-link></li>
  </ul>
</template>