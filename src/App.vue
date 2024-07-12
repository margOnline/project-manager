<script setup lang="ts"></script>

<template>
  <nav class="h-16 border-b bg-muted/60 flex justify-between px-6 items-center">
    <form class="w-full max-w-96">
      <input type="text" class="w-full bg-background pl-8" placeholder="Search ..." />
    </form>
    <div class="w-8 h-8 rounded-full bg-white"></div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
