<template>
  <a :href="projectUrl" target="_blank">
    <div class="project-tile p-5">
      <div class="h-40 xl:h-40">
        <div v-show="!coverImage" class="img-container">{{ projectTitle }}</div>
        <img class="cover-image" v-show="coverImage" :src="coverImage" :alt="projectTitle"/>

      </div>
      <div class="text-xs xl:text-lg my-2">{{ projectTitle }}</div>
    </div>
  </a>
</template>
<script>
export default {
  name: "ProjectTile",
  props: {
    coverImage: {
      type: String,
      default: null
    },
    projectTitle: {
      type: String,
      default: null
    },
    projectUrl: {
      type: String,
      default: null
    }
  }
}
</script>


<style scoped>
.project-tile {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #242424;
  border-radius: 20px;
}

.img-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1%;
  font-weight: bold;
  background-color: rgba(128, 128, 128, 0.1);
  border-radius: 20px;
}

.cover-image {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;

}

</style>