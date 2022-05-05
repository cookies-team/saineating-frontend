<template>
  <div class="dark-field-default">
    <div class="label-1 dmsans-bold-white-12px">{{ label }}</div>
    <div class="overlap-group1-2">
      <div class="placeholder-1 dmsans-normal-mine-shaft-16px">{{ placeholder }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DarkFieldDefault",
  props: ["label", "placeholder"],
};
</script>

<style>
.dark-field-default {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 1042px;
  min-height: 76px;
  position: absolute;
  top: 115px;
  width: 270px;
}

.label-1 {
  letter-spacing: 0;
  min-height: 16px;
}

.overlap-group1-2 {
  align-items: center;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  height: 50px;
  margin-left: -1px;
  margin-top: 11px;
  min-width: 272px;
  padding: 0 17px;
}

.placeholder-1 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 76px;
  white-space: nowrap;
}
</style>
