<template>
  <div :class="[`search-btn`, className || ``]">
    <div class="button dmsans-bold-white-16px">{{ button }}</div>
  </div>
</template>

<script>
export default {
  name: "LightButtonPrimaryText",
  props: ["button", "className"],
};
</script>

<style>
.search-btn {
  background-color: var(--apricot);
  border-radius: 12px;
  display: flex;
  height: 48px;
  /* margin-left: 197px; */
  width: 116px;
}

.button {
  flex: 1;
  height: 21px;
  letter-spacing: 0;
  margin-left: 26.65%;
  margin-right: 26.8%;
  margin-top: -1px;
  text-align: center;
  width: 54px;
}

.search-btn.light-button-primary-text {
  cursor: pointer;
  left: 300px;
  margin-left: unset;
  position: absolute;
  top: 85px;
  width: 170px;
}

.search-btn.light-button-primary-text .button {
  margin-left: 16.18%;
  margin-right: 16.18%;
  width: 115px;
}

.search-btn.light-button-primary-text-1 {
  align-self: center;
  cursor: pointer;
  height: 44px;
  margin-left: 416px;
  margin-top: 5px;
  width: 170px;
}

.search-btn.light-button-primary-text-1 .button {
  margin-left: 33.24%;
  margin-right: 33.82%;
  margin-top: -0.8px;
  width: 56px;
}
</style>
