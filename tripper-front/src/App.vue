<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";

export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style>
@import "./css/common.css";
</style>
