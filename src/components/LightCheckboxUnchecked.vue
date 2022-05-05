<template>
  <div :class="[`light-checkbox-checked-1`, className || ``]">
    <div class="rectangle-17 border-1px-celeste"></div>
    <div class="unchecked dmsans-normal-mine-shaft-16px-2">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "LightCheckboxUnchecked",
  props: ["children", "className"],
};
</script>

<style>
.light-checkbox-checked-1 {
  display: flex;
  height: 24px;
  margin-bottom: 2px;
  /* width: 83px; */
}

.rectangle-17 {
  background-color: var(--white);
  border-radius: 4px;
  height: 16px;
  margin-top: 4px;
  width: 16px;
}

.unchecked {
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 8px;
  margin-top: -3px;
  white-space: nowrap;
  width: 69px;
}

.light-checkbox-checked-1.light-checkbox-checked-2 .unchecked {
  width: 45px;
}

.light-checkbox-checked-1.light-checkbox-checked-3 .unchecked {
  width: 79px;
}

.light-checkbox-checked-1.light-checkbox-checked-4 .unchecked {
  width: 41px;
}

.light-checkbox-checked-1.light-checkbox-checked .unchecked {
  width: 66px;
}
</style>
