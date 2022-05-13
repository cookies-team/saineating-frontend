<template>
  <div class="header">
    <div class="header d-flex justify-space-between">
      <div class="header-left">
        <router-link to="/"
          ><div class="pa-2" :style="`background-image: url(${logo}); background-position: center center; background-size: cover; height: 80px; width: 160px;`"
        /></router-link>
      </div>
      <div class="header-divider"></div>
      <div class="header-right d-flex">
        <router-link to="/">
          <div
            class="
              pa-2
              d-none d-sm-flex
              header-item
              dmsans-normal-white-16px
              mr-auto
            "
          >
            Home
          </div>
        </router-link>

        <router-link to="/res">
          <div
            class="pa-2 d-none d-sm-flex header-item dmsans-normal-white-16px"
          >
            Recipes
          </div>
        </router-link>

        <router-link to="/why">
          <div
            class="
              pa-2
              d-none d-sm-flex
              header-item
              dmsans-normal-white-16px
              mr-auto
            "
          >
            Why Healthy Eating
          </div>
        </router-link>
        <router-link to="/restmap">
          <div
            class="
              pa-2
              d-none d-sm-flex
              header-item
              dmsans-normal-white-16px
              mr-auto
            "
          >
            Eating Out
          </div>
        </router-link>
        <router-link to="/guideline">
          <div
            class="
              pa-2
              d-none d-sm-flex
              header-item
              dmsans-normal-white-16px
              mr-auto
            "
          >
            Shopping Guideline
          </div>
        </router-link>

        <quick-search-bar class="d-none d-sm-none d-md-flex" />
        
        <div
          class="
            pa-2
            d-flex d-sm-none d-lg-none d-md-none d-xl-none
            header-item
            dmsans-normal-white-16px
          "
        >
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-icon dark v-bind="attrs" v-on="on"> mdi-menu </v-icon>
            </template>
            <v-list>
              <router-link to="/">
                <v-list-item>
                  <v-list-item-title> Home </v-list-item-title>
                </v-list-item>
              </router-link>

              <router-link to="/res">
                <v-list-item>
                  <v-list-item-title> Recipes </v-list-item-title>
                </v-list-item>
              </router-link>

              <router-link to="/why">
                <v-list-item>
                  <v-list-item-title> Why Healthy Eating </v-list-item-title>
                </v-list-item>
              </router-link>
              <router-link to="/restmap">
                <v-list-item>
                  <v-list-item-title> Eating Out </v-list-item-title>
                </v-list-item>
              </router-link>
              <router-link to="/guideline">
                <v-list-item>
                  <v-list-item-title> Shopping Guideline </v-list-item-title>
                </v-list-item>
              </router-link>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuickSearchBar from "../components/QuickSearchBar.vue";

const background =
  "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/627226fb8c803af62acc63d1/img/background-4@1x.png";
const pattern =
  "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/62724d3340bba0f337c73873/img/pattern-2@1x.png";

export default {
  name: "XHeader",
  components: {
    QuickSearchBar,
  },
  data: () => ({
    background: background,
    pattern: pattern,
    logo: require("../assets/Iter2/LOGO.png")
  }),
  props: [
    "recipe",
    "place",
    "whyHealthyEating",
    "eatingOut",
    "shoppingGuideline",
    "about",
    "xHeader2Props",
  ],
  methods: {
    showNaviPopup: () => {},
  },
};
</script>

<style>
.header {
  align-items: flex-start;
  display: flex;
  max-height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 1;
}

.header-item {
  display: flex;
  height: 5rem;
  margin-right: auto;
  font-size: 10rem;
  display: flex;
  align-items: center;
}

.pattern {
  height: 79px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 100%;
}

.header-logo {
  height: 80px;
  left: 32px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 189px;
}
</style>
