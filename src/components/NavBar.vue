<template>
  <div class="mt-10" style="width: 100%">
    <ul class="nav-bar">
      <li v-for="tab in tabs" :class="'nav-bar-tab text-center h-30 sm:h-20 md:text-sm sm:text-xs' + (tab === currTab ? ' active': '')"
           @click="changeTab(tab)">
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      currTab: "Work Experience",
      tabs: ["Work Experience", "Projects", "Education & Courses"]
    }
  },
  methods: {
    changeTab(tabName) {
      this.currTab = tabName;
    }
  }
}
</script>


<style scoped>
.nav-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.nav-bar-tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-bar-tab.active, .nav-bar-tab.active:hover{
  --tw-text-opacity: 1;
  color: rgb(254 243 199 / var(--tw-text-opacity));
  border-bottom: 4px solid rgb(254 243 199 / var(--tw-text-opacity));
  font-weight: bold;
  transition: ease 0.5s;
}

.nav-bar-tab:hover {
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}

</style>