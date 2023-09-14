<template>
  <div class="home-view">
    <img class="rounded-full w-40 h-40 border-4 border-amber-100 mb-5" src="../assets/HW_img.jpg" alt="Profile Picture">
    <p class="text-3xl font-bold mb-2 text-amber-100">{{ title }}</p>
    <p class="text-3xl font-bold text-blue-300">{{ Position }}</p>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {
      title: "Pavly Remon",
      Position: "Software Engineer | Huawei"
    }
  }
}
</script>


<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>