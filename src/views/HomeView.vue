<template>
  <div class="home-view">
    <div class="top-section p-5 drop-shadow-md">
      <ContactCard :contact-info="contactInfo"/>
      <NavBar/>
    </div>
  </div>
</template>
<script>
import ContactCard from "../components/ContactCard.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "HomeView",
  components: {NavBar, ContactCard},

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top-section{
  width: 100%;
  background-color: rgba(128,128,128,0.1);
  border-radius: 10px;
}


</style>