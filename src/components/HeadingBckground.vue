<template>
<div class="page-heading">
  <div class="heading-bckground" :style="`background: url(${src}) center center; background-size: cover;`"></div>
  <div class="head-title worksans-bold-white-72px" style="font-size: 8vmin;">{{ title }}</div>
</div>
</template>

<script>
export default {
  name: "HeadingBckground",
  props: ["src", "title"],
};
</script>

<style>
.head-title {
  line-height: 80px;
  position: absolute;
  bottom: 0;
white-space: initial;
}

.page-heading {
  height: 212px;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

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
  max-width: 1440px;
  width: 100%;
}
</style>
