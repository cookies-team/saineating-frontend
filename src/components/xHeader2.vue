<template>
  <div class="header-1">
    <div class="overlap-group-2">
      <img class="background" :src="background" /><img class="pattern" :src="pattern" />
      <div class="about-restaurants-ma dmsans-normal-white-16px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XHeader2",
  props: ["background", "pattern"],
};
</script>

<style>
.header-1 {
  align-items: flex-start;
  display: flex;
  height: 79px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  position: absolute;
  top: 0;
}

.overlap-group-2 {
  height: 79px;
  margin-top: -0.01px;
  position: relative;
  width: 1440px;
}

.background {
  height: 79px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.pattern {
  height: 79px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 1440px;
}

.about-restaurants-ma {
  left: 1003px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 24px;
  white-space: nowrap;
}
</style>
