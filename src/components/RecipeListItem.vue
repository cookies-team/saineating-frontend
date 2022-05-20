<template>
  <router-link :to="`/re/${id}`">
    <div class="recipes">
      <div
        class="recipe-img"
        :style="`
          background-image: url(${img}); 
        `"
      ></div>
      <div class="recipe-type dmsans-normal-mine-shaft-20px">
        {{ types.join(",") }}
      </div>
      <div class="recipe-name worksans-bold-mine-shaft-24px">{{ name }}</div>
      <!-- <div class="diffcultiy-level dmsans-normal-mine-shaft-16px">
        {{ shortDesc }}
      </div> -->
      <div class="cooking-time dmsans-normal-mine-shaft-16px-2">
        {{ cookingTime }}
      </div>
    </div></router-link
  >
</template>

<script>
export default {
  name: "RecipeList",
  props: ["id", "name", "img", "types", "shortDesc", "cookingTime"],
};
</script>

<style>
.recipes {
  align-items: flex-start;
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 416px;
}

.recipe-img {
  background-position: center center;
  background-size: cover;
  border-radius: 12px 12px 0 0;
  height: 208px;
  position: relative;
  width: 100%;
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
