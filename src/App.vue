<template>
  <v-app class="screen">
    <v-app-bar elevation="0" absolute top>
      <x-header v-bind="xHeaderProps" />
    </v-app-bar>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>

    <x-footer
      :why="xFooterProps.why"
      :recipe="xFooterProps.recipe"
      :sg="xFooterProps.sg"
      :about="xFooterProps.about"
      :group17Props="xFooterProps.group17Props"
    />
  </v-app>
</template>

<script>
// import HelloWorld from "./pages/FrontPage.vue";
import xHeader from "./components/xHeader.vue";
import xFooter from "./components/xFooter";

const xHeader2Data = {
    background: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/627226fb8c803af62acc63d1/img/background@1x.png",
    pattern: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/62724d3340bba0f337c73873/img/pattern-9@1x.png",
};
const xHeaderData = {
    recipe: "Recipe",
    place: "Home",
    whyHealthyEating: "Why Healthy Eating",
    eatingOut: "Eating-out",
    shoppingGuideline: "Shopping Guideline",
    about: "About",
    logo: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/62724d3340bba0f337c73873/img/775fe071cd3042d99e7d76252d62c702--2--1-5@2x.png",
    xHeader2Props: xHeader2Data,
};

const darkFieldDefaultData = {
    label: "label",
    placeholder: "Your email",
};

const group17Data = {
    group6: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/group-6-opaque@1x.png",
    x775Fe071Cd3042D99E7D76252D62C70211: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/775fe071cd3042d99e7d76252d62c702--1--1@2x.png",
    telegramPlane: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/shape@2x.png",
    navi: "NAVIGATION",
    eatingout: "Eating-out",
    subscribe: "SUBSCRIBE",
    x2019FoodLaaqiq: "© 2022 Team Cookies",
    privacy: "Privacy",
    termsAndConditions: "Terms and conditions",
    place: "Home",
    darkFieldDefaultProps: darkFieldDefaultData,
};

const xFooterData = {
    why: "Why Healthy Eating",
    recipe: "Recipe",
    sg: "Shopping Guideline",
    about: "About",
    group17Props: group17Data,
};


export default {
  name: "FrontPage",
  data: () => ({
    xHeaderProps: xHeaderData,
    xFooterProps: xFooterData
}),
  components: {
    xHeader,
    xFooter,
  },
  props: {},
};
</script>
<style>
html,
#app {
  background: #5eae53 no-repeat center center fixed !important;
  background-size: cover;
}
.screen {
  width: 1440px;
  margin: 0 auto;
}
</style>