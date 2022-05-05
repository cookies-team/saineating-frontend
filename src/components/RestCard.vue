<template>
  <div :class="[`rest1`, className || ``]">
    <div class="overlap-group-3" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
      <div class="rectangle-5"></div>
      <img
        class="icon-star"
        src="https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/star@2x.png"
      />
      <div class="text dmsans-normal-white-20px">9.8</div>
    </div>
    <div class="best-burgers worksans-bold-mine-shaft-24px">{{ bestBurgers }}</div>
    <div class="flex-row-3">
      <div class="x20-30-min dmsans-normal-mine-shaft-16px-2">{{ x2030Min }}</div>
      <div class="burgers dmsans-normal-mine-shaft-16px">{{ burgers }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestCard",
  props: ["overlapGroup", "bestBurgers", "x2030Min", "burgers", "className"],
};
</script>

<style>
.rest1 {
  align-items: flex-start;
  background-color: var(--black-haze);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  min-height: 320px;
  width: 270px;
}

.overlap-group-3 {
  background-position: 50% 50%;
  background-size: cover;
  height: 208px;
  position: relative;
  width: 270px;
}

.rectangle-5 {
  background-color: var(--apricot);
  border-radius: 8px;
  height: 48px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 92px;
}

.icon-star {
  height: 27px;
  left: 25px;
  position: absolute;
  top: 26px;
  width: 29px;
}

.text {
  left: 63px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 24px;
  white-space: nowrap;
}

.best-burgers {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 24px;
  margin-top: 24px;
  min-height: 32px;
  white-space: nowrap;
}

.flex-row-3 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  height: 32px;
  margin-top: 3px;
  min-width: 222px;
}

.x20-30-min {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 106px;
  white-space: nowrap;
}

.burgers {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 7px;
  min-height: 32px;
  min-width: 109px;
  text-align: right;
  white-space: nowrap;
}

.rest1.rest,
.rest1.rest-1 {
  align-items: center;
  margin-left: 60px;
}

.rest1.rest-1 .best-burgers {
  margin-left: unset;
  margin-right: 19px;
  min-width: 203px;
}

.rest1.rest-1 .flex-row-3,
.rest1.rest .flex-row-3,
.rest1.rest4 .flex-row-3 {
  align-self: unset;
}

.rest1.rest-1 .x20-30-min {
  min-width: 112px;
}

.rest1.rest-1 .burgers {
  margin-left: 19px;
  min-width: 91px;
}

.rest1.rest .best-burgers {
  margin-left: 2px;
  min-width: 224px;
}

.rest1.rest .x20-30-min {
  min-width: 110px;
}

.rest1.rest .burgers {
  margin-left: 13px;
  min-width: 99px;
}

.rest1.rest4 {
  align-items: center;
  align-self: flex-start;
  margin-left: 60px;
}

.rest1.rest4 .best-burgers {
  margin-left: unset;
  margin-right: 43px;
  min-width: 179px;
}

.rest1.rest4 .x20-30-min {
  min-width: 116px;
}

.rest1.rest4 .burgers {
  margin-left: 71px;
  min-width: 35px;
}
</style>
