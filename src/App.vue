<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container">
    <nav>
      <router-link class="router-link" to="/doctors">Врачи</router-link>
      <router-link class="router-link" to="/nurses">Медсестры</router-link>
    </nav>
    <router-view />
  </div>
</template>
<style>
.router-link {
  color: #006ac6;
}
</style>
