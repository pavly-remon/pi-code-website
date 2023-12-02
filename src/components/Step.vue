<template>
  <div class="step grid grid-cols-[25%_3%_23%_48%] xl:grid-cols-[15%_1%_9%_72%] gap-1%">
    <p class="text-xs xl:text-sm text-center">{{ stepDate }}</p>
    <div class="relative flex justify-center h-3 w-3 xl:h-5 xl:w-5 text-center">
      <div :class="'absolute border-2 border-blue-300 ' + lineLength"></div>
      <div class="absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-100"></div>
      <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-100"></div>
    </div>
    <p class="text-xs xl:text-base font-bold text-center ">{{ stepTitle }}</p>

    <ul v-if="stepDescription && stepDescription.length !== 0" class="description p-4 xl:p-5 xl:pl-10">
      <li class="text-xxs xl:text-sm pr-0 xl:pr-48 mb-2 list-disc" v-for="text in stepDescription">{{ text }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Step',
  props: {
    stepDate: {type: String},
    stepTitle: {type: String},
    stepDescription: {type: Array(String)},
    /**
     * TailwindCSS Height Class
     * @values h-...
     */
    lineLength: {
      type: String, default: "",

    }
  }
}
</script>
<style scoped>
.step {
  width: 100%;
}

.description {
  background-color: #242424;
  border-radius: 10px;
}
</style>