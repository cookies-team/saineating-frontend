<template>
  <div :class="[`light-checkbox-checked-5`, className || ``]">
    <div class="overlap-group1-10">
      <img
        class="icon-check_mark"
        src="https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b0cb73a4a391408a970f/img/check@2x.png"
      />
    </div>
    <div class="checked dmsans-normal-mine-shaft-16px-2">{{ checked }}</div>
  </div>
</template>

<script>
export default {
  name: "LightCheckboxChecked",
  props: ["checked", "className"],
};
</script>

<style>
.light-checkbox-checked-5 {
  align-items: flex-start;
  display: flex;
  height: 24px;
  margin-bottom: 2px;
  min-width: 83px;
}

.overlap-group1-10 {
  align-items: flex-start;
  align-self: center;
  background-color: var(--orange-soda);
  border-radius: 4px;
  display: flex;
  height: 16px;
  min-width: 16px;
  padding: 3.9px 2.8px;
}

.icon-check_mark {
  height: 8px;
  width: 10px;
}

.checked {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 8px;
  margin-top: -3px;
  min-height: 32px;
  white-space: nowrap;
}

.light-checkbox-checked-5.light-checkbox-checked-6 {
  align-self: flex-start;
  margin-bottom: unset;
  margin-left: 100px;
  margin-top: 28px;
}
</style>
