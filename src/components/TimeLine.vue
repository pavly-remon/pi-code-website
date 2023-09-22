<template>
  <div>
    <div class="mt-2">
      <Step class="mb-10" v-for="step in steps" :step-date="step.stepDate" :step-title="step.stepTitle"/>

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