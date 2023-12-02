<template>
  <div class="timeline">
    <div class="mt-2 relative">
      <Step class="mb-10" v-for="(step, index) in steps" :step-date="step.stepDate" :step-title="step.stepTitle"
            :step-description="step.description" :line-length="index === 0 ? 'h-52 sm:h-44 md:h-40 xl:h-48':''"/>
    </div>
  </div>

</template>
<script>
import Step from "./Step.vue";

export default {
  name: "TimeLine",
  components: {Step},
  props: ["steps"]
}
</script>
<style scoped>
.timeline {
  width: 100%
}

</style>