<template>
  <div class="footer d-flex flex-column footer-background">
    <div class="footer d-flex justify-space-around pa-8">
      <div class="footer-left">
        <img
          class="footer-logo"
          :src="x775Fe071Cd3042D99E7D76252D62C70211"
        />
      </div>
      <div class="footer-divider"></div>
      <div class="footer-right">
        <div class="dmsans-bold-white-20px ma-2">{{ navi }}</div>
        <div class="footer-navi d-flex">
        <div class="d-flex flex-column footer-navigation-line ma-2">
          <div class="dmsans-normal-white-16px" style="cursor: pointer;" @click="$router.push({path: '/'})">Home</div>
          <div class="dmsans-normal-white-16px" style="cursor: pointer;" @click="$router.push({path: '/why'})">Why Healthy Eating</div>
          <div class="dmsans-normal-white-16px" style="cursor: pointer;" @click="$router.push({path: '/res'})">Recipe</div>
        </div>
        <div class="d-flex flex-column footer-navigation-line ma-2">
          <div class="dmsans-normal-white-16px" style="cursor: pointer;" @click="$router.push({path: '/restmap'})">Eating-out</div>
          <div class="dmsans-normal-white-16px" style="cursor: pointer;" @click="$router.push({path: '/guideline'})">Shopping Guideline</div>
        </div>
      </div>
      </div>
    </div>
    <div class="footer-v-divider" ></div>
    <div class="footer d-flex justify-end pa-8">
          <!-- <div class="dmsans-normal-white-16px mx-3">Terms and conditions</div> -->
          <div class="dmsans-normal-white-16px mx-3">Privacy</div>
          <div class="dmsans-normal-white-16px mx-3">© 2022 Team Cookies</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "xFooter",
  components: {},
  data: () => ({
    group6:
      "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/group-6-opaque@1x.png",
    x775Fe071Cd3042D99E7D76252D62C70211:
      "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/775fe071cd3042d99e7d76252d62c702--1--1@2x.png",
    telegramPlane:
      "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/shape@2x.png",
    navi: "NAVIGATION",
    eatingout: "Eating-out",
    subscribe: "SUBSCRIBE",
    x2019FoodLaaqiq: "© 2022 Team Cookies",
    privacy: "Privacy",
    termsAndConditions: "Terms and conditions",
    place: "Home",
  }),
  props: ["why", "recipe", "sg", "about", "group17Props"],
};
</script>

<style>
.footer {
  display: flex;
  max-width: 1440px;
  width: 100%;
}

.footer-background {
  background-color: var(--mine-shaft);
  display: flex;
  height: 382px;
  max-width: 1440px;
  width: 100%;
  padding: 24px 0px;
}

.footer-logo {
  height: 168px;
  object-fit: cover;
  width: 208px;
}

.footer-v-divider {
  background-color: var(--white);
  height: 1px;
  opacity: 0.2;
  align-self: center;
  width: 90%;
}
</style>
