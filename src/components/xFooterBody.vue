<template>
  <div class="group-17">
    <div class="overlap-group3-1">
      <div class="overlap-group2-2">
        <div class="group-6" :style="{ 'background-image': 'url(' + group6 + ')' }">
          <div class="overlap-group-5">
            <img class="x775fe071cd3042d99e7d76252d62c702-1-1" :src="x775Fe071Cd3042D99E7D76252D62C70211" />
          </div>
        </div>
        <div class="telegram-plane" :style="{ 'background-image': 'url(' + telegramPlane + ')' }"></div>
      </div>
      <div class="navi dmsans-bold-white-20px">{{ navi }}</div>
      <div class="eatingout dmsans-normal-white-16px">{{ eatingout }}</div>
      <div class="subscribe dmsans-bold-white-16px-2">{{ subscribe }}</div>
      <dark-field-default :label="darkFieldDefaultProps.label" :placeholder="darkFieldDefaultProps.placeholder" />
      <div class="rectangle-6"></div>
      <div class="x2019-foo-d-laaqiq dmsans-normal-white-16px-2">{{ x2019FoodLaaqiq }}</div>
      <div class="privacy dmsans-normal-white-16px">{{ privacy }}</div>
      <div class="terms-and-conditions dmsans-normal-white-16px">{{ termsAndConditions }}</div>
      <router-link to="/home-page">
        <div class="place-1 dmsans-normal-white-16px">{{ place }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import DarkFieldDefault from "./DarkFieldDefault";
export default {
  name: "XFooterBody",
  components: {
    DarkFieldDefault,
  },
  props: [
    "group6",
    "x775Fe071Cd3042D99E7D76252D62C70211",
    "telegramPlane",
    "navi",
    "eatingout",
    "subscribe",
    "x2019FoodLaaqiq",
    "privacy",
    "termsAndConditions",
    "place",
    "darkFieldDefaultProps",
  ],
};
</script>

<style>
.group-17 {
  align-items: flex-start;
  display: flex;
  height: 382px;
  left: 0;
  min-width: 1440px;
  position: absolute;
  top: 0;
}

.overlap-group3-1 {
  height: 382px;
  position: relative;
  width: 1440px;
}

.overlap-group2-2 {
  height: 382px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.group-6 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 382px;
  left: 0;
  min-width: 1440px;
  position: absolute;
  top: 0;
}

.overlap-group-5 {
  align-items: flex-start;
  background-color: var(--mine-shaft);
  display: flex;
  height: 382px;
  min-width: 1440px;
  padding: 24px 118px;
}

.x775fe071cd3042d99e7d76252d62c702-1-1 {
  height: 168px;
  object-fit: cover;
  width: 208px;
}

.telegram-plane {
  background-size: 100% 100%;
  height: 23px;
  left: 1275px;
  position: absolute;
  top: 153px;
  width: 26px;
}

.navi {
  left: 478px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 51px;
  white-space: nowrap;
}

.eatingout {
  cursor: pointer;
  left: 678px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 115px;
  white-space: nowrap;
}

.subscribe {
  left: 1042px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 74px;
  white-space: nowrap;
}

.rectangle-6 {
  background-color: var(--white);
  height: 1px;
  left: 142px;
  opacity: 0.2;
  position: absolute;
  top: 270px;
  width: 1170px;
}

.x2019-foo-d-laaqiq {
  left: 1149px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 314px;
  white-space: nowrap;
}

.privacy {
  left: 1063px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 314px;
  white-space: nowrap;
}

.terms-and-conditions {
  left: 857px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 314px;
  white-space: nowrap;
}

.place-1 {
  cursor: pointer;
  left: 478px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 115px;
  white-space: nowrap;
}
</style>
