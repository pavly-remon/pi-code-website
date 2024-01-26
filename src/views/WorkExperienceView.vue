<template>
  <div class="content animate-[fadeInFromTop_1s_ease-in_0s_1]">
    <p class="text-lg md:text-2xl xl:text-3xl font-bold mb-5 text-amber-100 w-full">Work Experience</p>
    <Timeline/>
  </div>
</template>
<script>
import Timeline from "@/components/Timeline.vue";


export default {
  name: "WorkExperienceView",
  components: {Timeline},
  data() {
    return {}
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