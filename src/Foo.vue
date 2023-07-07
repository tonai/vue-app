<script setup lang="ts">
import foo from 'server-ref:foo'
</script>

<template>
  <input v-model="foo" />
</template>
