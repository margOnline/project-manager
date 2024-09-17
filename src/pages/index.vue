<script setup lang="ts">
import { usePageStore } from '@/stores/page'

usePageStore().pageData.title = 'Home page'
</script>
<template>
  <div>
    <h1>Some text</h1>
  </div>
</template>
