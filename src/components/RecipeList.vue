<template>
  <router-link :to="`/re/${recipeID}`">
    <div :class="[`recipes-3`, className || ``]">
      <div class="star-container">
        <div class="star-placeholder"></div>
        <img
          class="icon-star-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/star@2x.png"
        />
        <div class="recomeond-star dmsans-normal-white-20px">9.8</div>
      </div>
      <div class="recipe-type dmsans-normal-mine-shaft-20px">Vegetarian</div>
      <div class="recipe-name worksans-bold-mine-shaft-24px">Best Burgers</div>
      <div class="diffcultiy-level dmsans-normal-mine-shaft-16px">
        Beginners
      </div>
      <div class="cooking-time dmsans-normal-mine-shaft-16px-2">20-30 min</div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "RecipeList",
  props: ["className", "recipeID"],
};
</script>

<style>
.recipes-3 {
  align-items: flex-start;
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 416px;
  width: 270px;
}

.star-container {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/rectangle-2@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 208px;
  position: relative;
  width: 270px;
}

.star-placeholder {
  background-color: var(--apricot);
  border-radius: 8px;
  height: 48px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 92px;
}

.icon-star-1 {
  height: 27px;
  left: 25px;
  position: absolute;
  top: 26px;
  width: 29px;
}

.recomeond-star {
  left: 63px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 24px;
  white-space: nowrap;
}

.recipe-type {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 24px;
  margin-top: 25px;
  min-height: 32px;
  white-space: nowrap;
}

.recipe-name {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 24px;
  margin-top: 15px;
  min-height: 32px;
  white-space: nowrap;
}

.diffcultiy-level {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 24px;
  margin-top: 3px;
  min-height: 32px;
  white-space: nowrap;
}

.cooking-time {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 24px;
  margin-top: 16px;
  min-height: 32px;
  white-space: nowrap;
}

.recipes-3.recipes-1 {
  margin-top: 30px;
}

.recipes-3.recipes-2 {
  margin-top: 34px;
}
</style>
