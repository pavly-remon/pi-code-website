<template>
  <div class="home-view">
    <ContactCard :contact-info="contactInfo"/>
  </div>
</template>
<script>
import ContactCard from "../components/ContactCard.vue";

export default {
  name: "HomeView",
  components: {ContactCard},

  data() {
    return {
      contactInfo: {
        profilePic: "HW_img.jpg",
        name: "Pavly Remon",
        title: "Software Engineer",
        company: "Huawei",
      }
    }
  }
}
</script>


<style scoped>

.home-view {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>