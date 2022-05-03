<template>
  <div :class="[`light-button-primary-icon`, className || ``]"></div>
</template>

<script>
export default {
  name: "LightButtonPrimaryIcon",
  props: ["className"],
};
</script>

<style>
.light-button-primary-icon {
  background-color: var(--apricot);
  border-radius: 24px;
  height: 48px;
  left: 1202px;
  position: absolute;
  top: 1584px;
  width: 48px;
}

.light-button-primary-icon.light-button-primary-icon-1 {
  left: 1258px;
}
</style>
