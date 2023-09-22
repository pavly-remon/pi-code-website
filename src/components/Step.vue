<template>
  <div class="step grid grid-cols-[130px_20px_100px] xl:grid-cols-[200px_50px_100px] gap-1">
    <p class="text-xs xl:text-sm">{{ stepDate }}</p>
    <div class="relative flex justify-center h-3 w-3 xl:h-5 xl:w-5">
      <div class="absolute h-16 border-2 border-blue-300"></div>
      <div class="absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-100"></div>
      <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-100"></div>
    </div>
    <p class="text-xs xl:text-base font-bold">{{ stepTitle }}</p>
  </div>
</template>
<script>
export default {
  name: 'Step',
  props: ["stepDate","stepTitle"]
}
</script>
<style>
.step {
  display: grid;
}
</style>