<template>
  <div class="timeline relative">
    <div class="absolute top-4 xl:top-6 border-2 border-blue-300 w-[95%] h-min"></div>
    <div class="m-2">
      <div class="flex justify-evenly mb-2">
        <StepNew v-for="(step, index) in data" :step="step" :index="index" @click="setSelected(index)"/>
      </div>
      <Transition name="slide-fade">
        <WorkDetails v-show="showDetails" :step="this.selected"/>
      </Transition>
    </div>
  </div>

</template>
<script>
import $ from 'jquery';
import StepNew from "./Step.vue";
import WorkExperience from '@/assets/Work-Experience.json';
import WorkDetails from "@/components/WorkDetails.vue";

export default {
  name: "Timeline",
  components: {WorkDetails, StepNew},
  data() {
    return {
      data: WorkExperience,
      selected: {},
      showDetails: true,
    };
  },
  mounted() {
    this.selected = this.data[0];
  },

  methods: {
    setSelected(index) {
      let self = this;
      $(".work-details").fadeOut(100, function () {
        self.data.forEach((item) => item.selected = false);
        self.data[index].selected = true;
        self.selected = self.data[index];
        $(this).fadeIn("slow");
      });
    }
  }
}
</script>
<style scoped>
.timeline {
  display: flex;
  justify-content: center;
  width: 100%
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>