<template>
  <div class="step flex flex-col flex-grow justify-start items-center">
    <div class="flex">
      <div class="relative flex justify-center h-5 w-5 xl:h-8 xl:w-8 text-center mb-2">
        <div class="inline-flex absolute h-full w-full rounded-full bg-blue-300 opacity-100"></div>
        <div class="animate-ping inline-flex h-full w-full rounded-full bg-blue-300 opacity-100"></div>
      </div>
    </div>
    <div>
      <p class="text-xs xl:text-sm text-center">{{ stepDate }}</p>
      <p class="company-title text-md xl:text-2xl font-bold text-center">
        {{ stepTitle }}
      </p>
    </div>
    <ul v-show="stepDescription && stepDescription.length !== 0" class="description px-4 pt-2 pb-2 xl:px-10">
      <li class="text-xxs xl:text-sm pr-0 xl:pr-48 mb-2 list-disc" v-for="text in stepDescription">{{ text }}</li>
    </ul>
  </div>

</template>
<script>
import $ from "jquery";
import 'material-icons/iconfont/material-icons.css';

export default {
  props: {
    index: {type: Number},
    stepDate: {type: String},
    stepTitle: {type: String},
    stepDescription: {type: Array(String)},
    lineLength: {
      type: String, default: "",

    }
  },
  mounted() {
    $(".step").eq(this.index).on({
      'click': () => {
        if (this.icon === 'arrow_drop_down') {
          this.icon = 'arrow_drop_up'
        } else {
          this.icon = 'arrow_drop_down'
        }
        $(".description").eq(this.index).slideToggle("slow")

      }
    })
  },
  data() {
    return {
      icon: 'arrow_drop_up',
    };
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

</style>