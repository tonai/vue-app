<script setup lang="ts">
import nav from 'server-reactive:nav'

console.log(nav)

window.addEventListener('mousemove', (e) => {
  nav.cursor = {
    x: e.clientX,
    y: e.clientY
  }
})
</script>

<template>
  {{ nav }}
</template>
