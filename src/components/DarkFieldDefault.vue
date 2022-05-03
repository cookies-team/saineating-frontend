<template>
  <div class="dark-field-default">
    <div class="label dmsans-bold-white-12px"></div>
    <div class="overlap-group1"><div class="placeholder dmsans-normal-mine-shaft-16px">Your email</div></div>
  </div>
</template>

<script>
export default {
  name: "DarkFieldDefault",
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
  top: 4462px;
  width: 270px;
}

.label {
  letter-spacing: 0;
  min-height: 16px;
}

.overlap-group1 {
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

.placeholder {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 76px;
  white-space: nowrap;
}
</style>
