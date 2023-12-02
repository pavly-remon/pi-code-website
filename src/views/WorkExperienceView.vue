<template>
  <div class="content animate-[fadeInFromTop_1s_ease-in_0s_1]">
    <p class="text-lg md:text-2xl xl:text-3xl font-bold mb-5 text-amber-100 w-full">Work Experience</p>
    <Timeline :steps="data"/>
  </div>
</template>
<script>
import Timeline from "../components/Timeline.vue";

export default {
  name: "WorkExperienceView",
  components: {Timeline},
  data() {
    return {
      data: [
        {
          stepDate: "Feb,2022 - Present",
          stepTitle: "Huawei",
          description: [
            "Worked On different projects that support Business needs and Operation Management using Vue.js, SQL, and Python to create web apps and dashboards",
            "Create Object-Detection AI Model that detects EHS & QC Issues.",
            "Create OCR AI Model that identify hand-written documents."]
        },
        {
          stepDate: "Jun,2021 - Feb,2022",
          stepTitle: "Freelancer"
        }
      ]
    }
  }
}
</script>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>