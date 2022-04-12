<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <div class="display-1 font-weight-black font-italic">Saineating</div>
      </div>
      <v-spacer></v-spacer>

      <v-text-field
        prepend-icon=""
        solo
        append-icon="mdi-magnify"
        hide-details
        single-line
        placeholder="Search recipe or ingredient"
      ></v-text-field>

      <v-btn href="https://github.com/cookies-team" target="_blank" text>
        <v-icon class="mr-2">mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>COOKies</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
