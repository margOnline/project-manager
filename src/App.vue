<script setup lang="ts">
const MockComponent = defineComponent(async () => {
  const greeting = ref('Hello')

  await new Promise((resolve) => {
    greeting.value = 'Hello from the database!'
    setTimeout(() => {
      resolve(true)
    }, 1500)
  })
  return () => h('p', greeting.value)
})
</script>
<template>
  <AuthLayout>
    <Suspense>
      <MockComponent />
      <template #fallback>
        <span>Loading ...</span>
      </template>
    </Suspense>
  </AuthLayout>
</template>
