<template>
  <div class="header">
    <div class="overlap-group14">
      <x-header2
        :background="xHeader2Props.background"
        :pattern="xHeader2Props.pattern"
      />
      <router-link to="/res">
        <div class="recipe dmsans-normal-white-16px">{{ recipe }}</div>
      </router-link>
      <router-link to="/">
        <div class="place dmsans-normal-white-16px">{{ place }}</div>
      </router-link>
      <router-link to="/why">
        <div class="why-healthy-eating dmsans-normal-white-16px">
          {{ whyHealthyEating }}
        </div>
      </router-link>
      <router-link to="/restmap">
        <div class="eating-out dmsans-normal-white-16px">{{ eatingOut }}</div>
      </router-link>
      <router-link to="/guideline">
        <div class="shopping-guideline dmsans-normal-white-16px">
          {{ shoppingGuideline }}
        </div>
      </router-link>
      <router-link to="/about">
        <div class="about dmsans-normal-white-16px">{{ about }}</div>
      </router-link>
      <router-link to="/"><img class="logo" :src="logo" /></router-link>
    </div>
  </div>
</template>

<script>
import XHeader2 from "./xHeader2";
export default {
  name: "XHeader",
  components: {
    XHeader2,
  },
  props: [
    "recipe",
    "place",
    "whyHealthyEating",
    "eatingOut",
    "shoppingGuideline",
    "about",
    "logo",
    "xHeader2Props",
  ],
};
</script>

<style>
.header {
  align-items: flex-start;
  display: flex;
  height: 79px;
  /* left: 2px; */
  left: 0px;
  min-width: 1440px;
  position: absolute;
  top: 0;
}

.overlap-group14 {
  height: 79px;
  position: relative;
  width: 1440px;
}

.recipe {
  cursor: pointer;
  left: 900px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 24px;
  white-space: nowrap;
  width: 51px;
}

.place {
  cursor: pointer;
  left: 599px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 24px;
  white-space: nowrap;
  width: 44px;
}

.why-healthy-eating {
  cursor: pointer;
  left: 690px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 24px;
  white-space: nowrap;
  width: 154px;
}

.eating-out {
  cursor: pointer;
  left: 1005px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 24px;
  white-space: nowrap;
  width: 79px;
}

.shopping-guideline {
  cursor: pointer;
  left: 1134px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 24px;
  white-space: nowrap;
  width: 166px;
}

.about {
  cursor: pointer;
  left: 1348px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 24px;
  white-space: nowrap;
  width: 46px;
}

.logo {
  height: 79px;
  left: 32px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 189px;
}
</style>
