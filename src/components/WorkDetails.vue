<template>
  <div v-show="step.description && step.description.length !== 0"
       class="work-details flex flex-col xl:flex-row justify-center items-center rounded-lg shadow-md">
    <div class="work-label hidden p-5 xl:w-[35%] xl:block xl:mr-4 xl:rounded-none xl:rounded-r-lg">
      <p class="text-xs xl:text-sm text-center">{{ step.stepDate }}</p>
      <p class="company-title text-md xl:text-2xl font-bold text-center">
        {{ step.stepTitle }}
      </p>
      <p class="company-title text-s xl:text-xl font-light text-center italic">
        {{ step.stepPosition }}
      </p>
    </div>
    <div class="flex flex-col">
      <ul class="description pl-6 py-2">
        <li class="text-xxs xl:text-sm pr-0 xl:pr-48 mb-2 list-disc" v-for="text in step.description">{{ text }}</li>
      </ul>

      <ul class="flex flex-wrap py-2 px-2 xl:px-0">
        <li class="skills text-xxs xl:text-sm p-2 m-1 rounded-lg" v-for="text in step.skills">{{ text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkDetails",
  props: {
    index: {type: Number},
    step: {type: Object}
  },
}
</script>

<style scoped>
.work-details {
  background: #242424;
}

.work-label {
  --tw-text-opacity: 1;
  color: #242424;
  background: rgb(254 243 199 / var(--tw-text-opacity));
}

.skills {
  background: #2D2D2D;
  --tw-text-opacity: 1;
  color: rgb(254 243 199 / var(--tw-text-opacity));
}

</style>