<template>
  <div class="content animate-[fadeInFromTop_1s_ease-in_0s_1]">
    <p class="text-lg md:text-2xl xl:text-3xl font-bold mb-2 text-amber-100 w-full">Work Experience</p>
    <TimeLine :steps="data"/>
  </div>
</template>
<script>
import TimeLine from "../components/TimeLine.vue";

export default {
  name: "WorkExperienceView",
  components: {TimeLine},
  data() {
    return {
      data: [
        {
          stepDate: "Feb,2022 - Present",
          stepTitle: "Huawei"
        },
        {
          stepDate: "Jun,2021 - Feb,2022",
          stepTitle: "Freelancer"
        },
      ]
    }
  }
}
</script>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

</style>