<template>
  <div>
    <h1>메인페이지</h1>
    <menu-bar></menu-bar>
    <router-link to="/signup"></router-link>
  </div>
</template>

<script>
import menuBar from "@/components/common/MenuBar.vue";

export default {
  components: {
    menuBar,
  },
};
</script>

<style></style>
