<template>
  <div class="step flex flex-col justify-start items-center">
    <div class="flex">
      <div class="relative flex justify-center h-5 w-5 xl:h-8 xl:w-8 text-center mb-2">
        <div
            :class="'inline-flex absolute h-full w-full rounded-full ' + (step.selected ? 'active-step':'bg-blue-300')"></div>
        <div
            :class="'animate-ping inline-flex h-full w-full rounded-full opacity-100 ' + (step.selected ? 'active-step':'bg-blue-300')"></div>
      </div>
    </div>
    <div :class="step.selected ? 'active' : 'text-blue-300'">
      <p class="text-xs xl:text-sm text-center">{{ step.stepDate }}</p>
      <p class="company-title text-md xl:text-2xl font-bold text-center">
        {{ step.stepTitle }}
      </p>
    </div>
    <span v-show="step.selected" class="material-icons-sharp">arrow_drop_up</span>

  </div>
</template>
<script>
import 'material-icons/iconfont/material-icons.css';

export default {
  props: {
    index: {type: Number},
    step: {type: Object},
  },
  mounted() {
  },
  data() {
    return {};
  }
}
</script>
<style scoped>
.step {
  width: 100%;
  cursor: pointer;
}

.description {
  background-color: #242424;
  border-radius: 10px;
}

.material-icons-sharp {
  font-size: 40px;
  --tw-text-opacity: 1;
  color: rgb(254 243 199 / var(--tw-text-opacity));
}

.active {
  --tw-text-opacity: 1;
  color: rgb(254 243 199 / var(--tw-text-opacity));
}

.active-step {
  --tw-text-opacity: 1;
  background: rgb(254 243 199 / var(--tw-text-opacity));
}

</style>