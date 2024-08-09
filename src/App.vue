<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import asite from "@/static/menu/aside"
const router = useRouter()
onMounted(() => {
  asite.forEach((element) => {
    if (element.child.length == 0) {
      router.addRoute("index", element)
    } else {
      element.child.forEach(item => router.addRoute("index", item))
    }

  })
})
</script>
<style scoped lang="scss">
.app {
  width: 100vw;
  height: 100vh;
}
</style>
