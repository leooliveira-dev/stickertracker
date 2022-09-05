<template>
  <input type="checkbox" id="filter-drawer" class="drawer-toggle">
  <div class="drawer-content min-h-screen flex flex-col items-center justify-between overflow-y-scroll">
    <header class="navbar justify-between bg-base-300">
      <h1 class="prose prose-h1">Sticker tracker</h1>
      <nav class="">
        <ul class="flex items-center gap-4">
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/collection">Minha coleção</router-link></li>
        </ul>
      </nav>
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