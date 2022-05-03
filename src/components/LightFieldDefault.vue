<template>
  <div class="light-field-default">
    <div class="label-1 dmsans-bold-mine-shaft-12px">{{ label }}</div>
    <div class="overlap-group2 border-1px-alto">
      <input
        class="placeholder-1 dmsans-normal-mine-shaft-16px"
        name="placeholder"
        :placeholder="inputPlaceholder"
        :type="inputType"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LightFieldDefault",
  props: ["label", "inputType", "inputPlaceholder"],
};
</script>

<style>
.light-field-default {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 836px;
  min-height: 76px;
  position: absolute;
  top: 2548px;
  width: 270px;
}

.label-1 {
  letter-spacing: 0;
  min-height: 16px;
}

.overlap-group2 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  height: 48px;
  margin-top: 12px;
  min-width: 270px;
  padding: 7px 15px;
}

.placeholder-1 {
  background-color: transparent;
  border: 0;
  height: 32px;
  letter-spacing: 0;
  line-height: 32px;
  padding: 0;
  white-space: nowrap;
  width: 107px;
}

.placeholder-1::placeholder {
  color: #3333334d;
}
</style>
