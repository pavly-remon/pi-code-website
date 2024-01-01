<template>
  <div class="mt-5" style="width: 100%; display: flex; justify-content: center">
    <ul class="nav-bar w-[100%] xl:w-[70%]">
      <li v-for="tab in tabs"
          :class="'nav-bar-tab text-center h-8 md:h-10 xl:h-12 text-xs md:text-base xl:text-lg' + (tab === currTab ? ' active': '')"
          @click="onClick(tab)">
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "NavBar",
  props: ["tabs", "currTab", "onClick"],
  data() {
    return {}
  },
  methods: {}
}
</script>


<style scoped>
.nav-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #242424;
  border-radius: 30px;
}

.nav-bar-tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-bar-tab.active:nth-child(1), .nav-bar-tab:hover:nth-child(1) {
  --tw-text-opacity: 1;
  color: #242424;
  background-color: rgb(254 243 199 / var(--tw-text-opacity));
  font-weight: bold;
  border-radius: 30px 0 0 30px;
  transition: ease 0.5s;
}

.nav-bar-tab.active:nth-last-child(1), .nav-bar-tab:hover:nth-last-child(1) {
  --tw-text-opacity: 1;
  color: #242424;
  background-color: rgb(254 243 199 / var(--tw-text-opacity));
  font-weight: bold;
  border-radius: 0 30px 30px 0;
  transition: ease 0.5s;
}

.nav-bar-tab.active:not(:nth-last-child(1)):not(:nth-child(1)), .nav-bar-tab:hover:not(:nth-last-child(1)):not(:nth-child(1)) {
  --tw-text-opacity: 1;
  color: #242424;
  background-color: rgb(254 243 199 / var(--tw-text-opacity));
  font-weight: bold;
  transition: ease 0.5s;
}

</style>