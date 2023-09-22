<template>
  <div class="animate-[fadeInFromTop_1s_ease-in_0s_1] profile-container">
    <img
        class="rounded-full w-20 h-20 md:w-24 md:h-24 xl:w-40 xl:h-40
        border-2 xl:border-4 border-amber-100 mb-3"
        src="../assets/HW_img.jpg"
        alt="Profile Picture">
    <p class="name text-base md:text-2xl xl:text-4xl font-bold mb-2 text-amber-100">{{ contactInfo.name }}</p>
    <p class="title text-base md:text-2xl xl:text-4xl font-bold text-blue-300">{{ contactInfo.title }} | {{
        contactInfo.company
      }}</p>
    <div class="social-sites my-3">
      <a href="https://github.com/pavly-remon/" target="_blank">
        <img src="../assets/githubLogo.png" class="rounded-full w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12  mx-2"
             alt="Github Logo">
      </a>
      <a href="https://www.linkedin.com/in/pavly-remon/" target="_blank">
        <img src="../assets/LinkedInLogo.png" class="rounded-full w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 mx-2"
             alt="LinkedIn Logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: ["contactInfo"],
  data() {
    return {};
  },
  methods: {
    // getImageUrl(path) {
    //   let url = new URL(path, import.meta.url)
    //   return url.href
    // }
  }
}
</script>

<style scoped>

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.social-sites {
  display: flex;
}
</style>