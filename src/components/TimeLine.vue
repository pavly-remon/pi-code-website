<template>
  <div class="timeline">
    <div class="mt-2 relative">
      <Step v-for="(step, index) in steps" :step-date="step.stepDate" :step-title="step.stepTitle"
            :step-description="step.description" :line-length="index !== steps.length - 1 ? 'h-full':'h-0'"/>
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