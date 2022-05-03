<template>
  <div :class="[`light-button-primary-text`, className || ``]">
    <div class="button dmsans-bold-white-16px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "LightButtonPrimaryText",
  props: ["children", "className"],
};
</script>

<style>
.light-button-primary-text {
  align-items: flex-start;
  background-color: var(--apricot);
  border-radius: 12px;
  display: flex;
  height: 48px;
  left: 490px;
  min-width: 116px;
  padding: 13px 30.9px;
  position: absolute;
  top: 641px;
}

.button {
  letter-spacing: 0;
  min-height: 21px;
  min-width: 54px;
  text-align: center;
}

.light-button-primary-text.light-button-primary-text-1 {
  left: 1136px;
  min-width: 170px;
  padding: 13px 27.5px;
  top: 2576px;
}

.light-button-primary-text.light-button-primary-text-1 .button {
  min-width: 115px;
}

.light-button-primary-text.light-button-primary-text-2 {
  left: 842px;
  min-width: 170px;
  padding: 13px 56.5px;
  top: 3345px;
}

.light-button-primary-text.light-button-primary-text-2 .button {
  min-width: 56px;
}
</style>
