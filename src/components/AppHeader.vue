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

    <SearchBar />

    <v-btn href="https://github.com/cookies-team" target="_blank" text>
      <v-icon class="mr-2">mdi-github</v-icon>
    </v-btn>
    </v-app-bar>
</template>
<script>
import SearchBar from './SearchBar'

export default {
  name: "AppHeader",
  components: {
    SearchBar,
  },
  data: () => ({}),
};
</script>