<template>
  <div class="heading-bckground" :style="{ 'background-image': 'url(' + src + ')' }"></div>
</template>

<script>
export default {
  name: "HeadingBckground",
  props: ["src"],
};
</script>

<style>
.heading-bckground,
.heading-bckground-1,
.heading-bckground-2,
.heading-bckground-3,
.heading-bckground-4,
.heading-bckground-5,
.heading-bckground-6 {
  background-size: 100% 100%;
  height: 212px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}
</style>
