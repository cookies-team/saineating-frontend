<template>
  <div :class="[`rest1-1`, className || ``]">
    <div class="rest-container-3" :style="{ 'background-image': 'url(' + restContainer + ')' }">
      <div class="rest-name worksans-bold-white-24px">{{ restname1 }}</div>
      <div class="rest-type dmsans-normal-white-16px">{{ resttype1 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapRest",
  props: ["restContainer", "restname1", "resttype1", "className"],
};
</script>

<style>
.rest1-1 {
  align-items: flex-start;
  display: flex;
  min-width: 274px;
}

.rest-container-3 {
  background-position: 50% 50%;
  background-size: cover;
  height: 208px;
  position: relative;
  width: 270px;
}

.rest-name {
  left: 24px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 160px;
  white-space: nowrap;
}

.rest-type {
  left: 24px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 131px;
  white-space: nowrap;
}

.rest1-1.rest3 {
  margin-top: 32px;
}
</style>
