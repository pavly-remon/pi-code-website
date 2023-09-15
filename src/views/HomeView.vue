<template>
  <div class="home-view">
    <img class="rounded-full xl:w-40 xl:h-40 xs:w-16 xs:h-16 border-4 border-amber-100 mb-5" src="../assets/HW_img.jpg"
         alt="Profile Picture">
    <p class="xl:text-4xl sm:text-2xl font-bold mb-2 text-amber-100">{{ title }}</p>
    <p class="xl:text-4xl sm:text-2xl font-bold text-blue-300">{{ Position }}</p>
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