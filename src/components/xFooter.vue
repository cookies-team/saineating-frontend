<template>
  <div class="footer">
    <div class="overlap-group4">
      <group17 v-bind="group17Props" />
      <div class="why dmsans-normal-white-16px">{{ why }}</div>
      <div class="recipe-1 dmsans-normal-white-16px">{{ recipe }}</div>
      <div class="sg dmsans-normal-white-16px">{{ sg }}</div>
      <div class="about-1 dmsans-normal-white-16px">{{ about }}</div>
    </div>
  </div>
</template>

<script>
import Group17 from "./xFooterBody";
export default {
  name: "xFooter",
  components: {
    Group17,
  },
  props: ["why", "recipe", "sg", "about", "group17Props"],
};
</script>

<style>
.footer {
  align-items: flex-start;
  display: flex;
  min-width: 1440px;
}

.overlap-group4 {
  height: 382px;
  position: relative;
  width: 1440px;
}

.why {
  cursor: pointer;
  left: 478px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 147px;
  white-space: nowrap;
}

.recipe-1 {
  cursor: pointer;
  left: 478px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 176px;
  white-space: nowrap;
}

.sg {
  cursor: pointer;
  left: 678px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 147px;
  white-space: nowrap;
}

.about-1 {
  cursor: pointer;
  left: 678px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 179px;
  white-space: nowrap;
}
</style>
