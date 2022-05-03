<template>
  <v-app-bar app color="white">
    <div class="d-flex align-center">
      <a href="https://www.saineating.ngx.fi/"
        ><div class="display-1 font-weight-black font-italic">
          Saineating
        </div></a
      >
    </div>
    <v-spacer></v-spacer>

    <QuickSearchBar />

    <v-btn @click="go_home" target="_blank" text>
      <v-icon class="mr-2">mdi-home</v-icon>
    </v-btn>
    <v-btn @click="go_feeds" target="_blank" text>
      <v-icon class="mr-2">mdi-newspaper</v-icon>
    </v-btn>
    <v-btn @click="go_maps" target="_blank" text>
      <v-icon class="mr-2">mdi-map</v-icon>
    </v-btn>
    <v-btn @click="go_recipes" target="_blank" text>
      <v-icon class="mr-2">mdi-food-fork-drink</v-icon>
    </v-btn>
    <v-btn href="/design" target="_blank" text>
      <v-icon class="mr-2">mdi-material-design</v-icon>
    </v-btn>

    <!-- <v-btn href="https://github.com/cookies-team" target="_blank" text>
      <v-icon class="mr-2">mdi-github</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>
<script>
import QuickSearchBar from "./QuickSearchBar";

export default {
  name: "AppHeader",
  components: {
    QuickSearchBar,
  },
  data: () => ({}),
  methods: {
    go_feeds() {
      this.$router.push({ path: "/feeds/" });
    },
    go_maps() {
      this.$router.push({ path: "/map/" });
    },
    go_home() {
      this.$router.push({ path: "/" });
    },
    go_recipes() {
      this.$router.push({ path: "/recipes/" });
    },
  },
};
</script>