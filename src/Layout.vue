<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="navbar bg-neutral text-neutral-content">
        <a class="btn btn-ghost text-xl"><RouterLink to="/">Home</RouterLink></a>
        <a class="btn btn-ghost text-xl"><RouterLink to="/about">About</RouterLink></a>
      </div>
    </div>
  </header>
  <div class="container mx-auto">
    <RouterView />
  </div>
</template>
