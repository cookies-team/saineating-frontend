<template>
  <div class="light-field-default-7">
    <div class="label-11 dmsans-bold-mine-shaft-12px">{{ children }}</div>
    <div class="rectangle-18 border-1px-alto"></div>
  </div>
</template>

<script>
export default {
  name: "LightFieldDropdown3",
  props: ["children"],
};
</script>

<style>
.light-field-default-7 {
  display: flex;
  flex-direction: column;
  height: 76px;
  left: 0;
  position: absolute;
  top: 0;
  width: 370px;
}

.label-11 {
  height: 16px;
  letter-spacing: 0;
  width: 108px;
}

.rectangle-18 {
  background-color: var(--white);
  border-radius: 12px;
  flex: 1;
  margin-top: 12px;
}
</style>
