<template>
  <div class="content animate-[fadeInFromTop_1s_ease-in_0s_1]">
    <p class="text-lg md:text-2xl xl:text-3xl font-bold mb-2 text-amber-100 w-full">Projects</p>
    <div class="project-grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      <project-tile v-for="project in projects" :project-title="project.projectTitle"
                    :cover-image="project.coverImage" :project-url="project.projectUrl"/>
    </div>
  </div>
</template>
<script>
import ProjectTile from "@/components/ProjectTile.vue";
import Projects from "@/assets/projects.json";

export default {
  name: "ProjectsView",
  components: {ProjectTile},
  data() {
    return {
      projects: Projects
    }
  }
}
</script>


<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.project-grid {
  display: grid;
  width: 100%;
  gap: 2%;
}

</style>