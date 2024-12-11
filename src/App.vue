<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container mx-auto">
    <nav class="p-4 bg-blue-500 text-white">
      <router-link to="/doctors" class="mr-4">Врачи</router-link>
      <router-link to="/nurses">Медсестры</router-link>
    </nav>
    <router-view />
  </div>
</template>

