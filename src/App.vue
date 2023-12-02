<template>
  <div class="home-view">
    <div class="section p-5 drop-shadow-md">
      <ContactCard :contact-info="contactInfo"/>
      <NavBar :tabs="tabs" :currTab="currTab" @click="changeTab"/>
    </div>
    <div class="section mt-5 p-2 xl:p-5 drop-shadow-md">
      <WorkExperienceView v-if="currTab === 'Work Experience'"/>
      <ProjectsView v-if="currTab === 'Projects'"/>
      <EducationView v-if="currTab === 'Education & Courses'"/>
    </div>
  </div>
</template>
<script>
import ContactCard from "@/components/ContactCard.vue";
import NavBar from "@/components/NavBar.vue";
import WorkExperienceView from "@/views/WorkExperienceView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import EducationView from "@/views/EducationView.vue";

export default {
  name: "MainView",
  components: {NavBar, ContactCard, WorkExperienceView, ProjectsView, EducationView},

  data() {
    return {
      contactInfo: {
        profilePic: "HW_img.jpg",
        name: "Pavly Remon",
        title: "Software Engineer",
        company: "Huawei",
      },
      currTab: "Work Experience",
      tabs: ["Work Experience", "Projects", "Education & Courses"]
    };
  },
  methods: {
    changeTab(tabName) {
      this.currTab = tabName;
    }
  }
}
</script>


<style scoped>

.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section {
  width: 100%;
  background-color: rgba(128, 128, 128, 0.1);
  border-radius: 10px;
}


</style>