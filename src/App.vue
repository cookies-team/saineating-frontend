<template>
  <v-app>
    <AppHeader />

    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>COOKies</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./pages/FrontPage.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "FrontPage",
  components: {
    AppHeader,
  },
};
</script>
<style>
#app {
  background: #88b04b no-repeat center center fixed !important;
  background-size: cover;
}
</style>