<script setup lang="ts">
import Menu from "./components/Menu.vue";
</script>

<template>
  <input type="checkbox" id="filter-drawer" class="drawer-toggle">
  <div class="drawer-content min-h-screen flex flex-col items-center justify-between overflow-y-scroll">
    <header class="w-full">
      <div class="flex flex-row items-center py-4 justify-center bg-base-300 w-full">
        <h1 class="text-lg font-bold">Sticker tracker</h1>
      </div>
      <div class="flex flex-row items-center py-2 justify-center bg-base-100 w-full">
        <Menu/>
      </div>
    </header>
    <main class="flex-grow bg-base-200 w-full">
      <router-view></router-view>
    </main>
    <footer class="footer bg-base-300 p-4 items-center justify-center">
      <h2 class="prose prose-md flex flex-row">Por <a class="link-primary" href="https://github.com/leooliveira-dev">Leonardo Oliveira</a></h2>
    </footer>
  </div>
  <div class="drawer-side">
    <label for="filter-drawer" class="drawer-overlay"></label>
    <div id="filter-drawer-container" class="bg-base-300 overflow-visible px-4"></div>
  </div>
</template>