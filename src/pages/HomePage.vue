<template>
  <div class="container-center-horizontal">
    <div class="home-1440 screen">
      <div class="group-14">
        <img class="pattern" :src="pattern1" />
        <div class="overlap-group3">
          <div class="overlap-group"><img class="rectangle" :src="rectangle1" /><img class="chef" :src="chef" /></div>
          <img class="combined-shape" :src="combinedShape1" /><img class="combined-shape-1" :src="combinedShape2" /><img
            class="coffee"
            :src="coffee"
          />
        </div>
        <img class="group-14_opaque" :src="group14_Opaque" /><img class="map" :src="map1" /><img
          class="pattern-1"
          :src="pattern2"
        />
      </div>
      <div class="overlap-group4">
        <div class="overlap-group-1">
          <img class="group-6_opaque" :src="group6_Opaque" />
          <div class="rectangle-1"></div>
          <img class="x775fe071cd3042d99e7d76252d62c702-1-1" :src="x775Fe071Cd3042D99E7D76252D62C70211" />
        </div>
        <img class="group-5_opaque-1" :src="group5_Opaque1" />
        <p class="about-restaurants-ma dmsans-normal-white-16px">{{ aboutRestaurantsMa }}</p>
        <h1 class="delivery-food-from-t worksans-bold-white-72px" v-html="deliveryFoodFromT"></h1>
        <div class="rectangle-2"></div>
        <div class="food-and-restaurants dmsans-normal-mine-shaft-16px">{{ foodAndRestaurants }}</div>
        <light-button-primary-text :children="lightButtonPrimaryText1Props.children" />
        <img
          class="rectangle-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/rectangle@1x.svg"
        />
        <div class="popular-categories worksans-bold-mine-shaft-56px">{{ popularCategories }}</div>
        <div class="rectangle-4"></div>
        <div class="rectangle-5"></div>
        <div class="pizza dmsans-normal-mine-shaft-20px">{{ pizza1 }}</div>
        <div class="rectangle-6"></div>
        <div class="burgers dmsans-normal-mine-shaft-20px">{{ burgers1 }}</div>
        <div class="rectangle-7"></div>
        <div class="vegetarian dmsans-normal-mine-shaft-20px">{{ vegetarian1 }}</div>
        <div class="rectangle-8"></div>
        <div class="asian dmsans-normal-mine-shaft-20px">{{ asian }}</div>
        <div class="rectangle-9"></div>
        <div class="bakery dmsans-normal-mine-shaft-20px">{{ bakery }}</div>
        <div class="rectangle-10"></div>
        <div class="rectangle-11"></div>
        <div class="restaurants dmsans-normal-white-14px">{{ restaurants1 }}</div>
        <div class="restaurants-1 worksans-bold-mine-shaft-56px">{{ restaurants2 }}</div>
        <p class="best-for-active-free dmsans-normal-mine-shaft-16px">{{ bestForActiveFree1 }}</p>
        <div class="view-all dmsans-normal-mine-shaft-16px-2">{{ viewAll1 }}</div>
        <light-button-primary-icon />
        <img
          class="arrow"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/arrow@2x.svg"
        />
        <light-button-primary-icon :className="lightButtonPrimaryIconProps.className" />
        <img
          class="arrow-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/arrow-1@2x.svg"
        />
        <div class="rectangle-12"></div>
        <img class="rectangle-13" :src="rectangle3" />
        <div class="rectangle-14"></div>
        <img
          class="star"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/star@2x.svg"
        />
        <div class="text-1 dmsans-normal-white-20px">{{ text1 }}</div>
        <div class="surname worksans-bold-mine-shaft-24px">{{ surname }}</div>
        <div class="x20-30-min dmsans-normal-mine-shaft-16px-2">{{ x2030Min }}</div>
        <div class="burgers-1 dmsans-normal-mine-shaft-16px">{{ burgers2 }}</div>
        <div class="rectangle-15"></div>
        <img class="rectangle-16" :src="rectangle4" />
        <div class="rectangle-17"></div>
        <img
          class="star-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/star@2x.svg"
        />
        <div class="text-2 dmsans-normal-white-20px">{{ text2 }}</div>
        <div class="name worksans-bold-mine-shaft-24px">{{ name }}</div>
        <div class="x45-min dmsans-normal-mine-shaft-16px-2">{{ x45Min }}</div>
        <div class="pizza-1 dmsans-normal-mine-shaft-16px">{{ pizza2 }}</div>
        <div class="rectangle-18"></div>
        <img class="rectangle-19" :src="rectangle5" />
        <div class="rectangle-20"></div>
        <img
          class="star-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/star@2x.svg"
        />
        <div class="text-3 dmsans-normal-white-20px">{{ text3 }}</div>
        <div class="place worksans-bold-mine-shaft-24px">{{ place }}</div>
        <div class="x15-20-min dmsans-normal-mine-shaft-16px-2">{{ x1520Min }}</div>
        <div class="sushi dmsans-normal-mine-shaft-16px">{{ sushi }}</div>
        <div class="rectangle-21"></div>
        <img class="rectangle-22" :src="rectangle6" />
        <div class="rectangle-23"></div>
        <img
          class="star-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/star@2x.svg"
        />
        <div class="text-4 dmsans-normal-white-20px">{{ text4 }}</div>
        <div class="grand-restaurant worksans-bold-mine-shaft-24px">{{ grandRestaurant }}</div>
        <div class="x50-min dmsans-normal-mine-shaft-16px-2">{{ x50Min }}</div>
        <div class="vegetarian-1 dmsans-normal-mine-shaft-16px">{{ vegetarian2 }}</div>
        <div class="menu dmsans-normal-white-14px">{{ menu }}</div>
        <div class="map-submit dmsans-normal-white-16px" v-html="mapSubmit"></div>
        <div class="subscribe dmsans-normal-white-14px">{{ subscribe }}</div>
        <dark-field-default />
        <div class="telegram-plane"></div>
        <div class="rectangle-24"></div>
        <div class="x2019-foo-d-laaqiq dmsans-normal-white-16px-2">{{ x2019FoodLaaqiq }}</div>
        <div class="privacy dmsans-normal-white-16px">{{ privacy }}</div>
        <div class="terms-and-conditions dmsans-normal-white-16px">{{ termsAndConditions }}</div>
        <div class="best-deals worksans-bold-mine-shaft-56px">{{ bestDeals }}</div>
        <p class="best-for-active-free-1 dmsans-normal-mine-shaft-16px">{{ bestForActiveFree2 }}</p>
        <div class="view-all-1 dmsans-normal-mine-shaft-16px-2">{{ viewAll2 }}</div>
        <div class="rectangle-25"></div>
        <img class="stars-1" :src="stars1" />
        <div class="luxury-restaurant worksans-bold-mine-shaft-24px" v-html="luxuryRestaurant"></div>
        <p class="kennewick-al-41329 dmsans-normal-mine-shaft-16px" v-html="kennewickAl41329"></p>
        <div class="rectangle-26"></div>
        <img class="rectangle-27" :src="rectangle7" />
        <div class="italian-cuisine worksans-bold-mine-shaft-24px">{{ italianCuisine }}</div>
        <p class="x8019-facilisis-stree dmsans-normal-mine-shaft-16px">{{ x8019FacilisisStree }}</p>
        <img class="x775fe071cd3042d99e7d76252d62c702-2" :src="x775Fe071Cd3042D99E7D76252D62C7022" />
        <div class="about-restaurants dmsans-normal-white-16px" v-html="aboutRestaurants"></div>
        <img
          class="group-11-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb9d2a0d68fa5d9cd3f68/img/group-11-1@2x.svg"
        />
        <img
          class="oval"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/oval-3@2x.svg"
        />
        <div class="number dmsans-normal-white-16px">{{ number1 }}</div>
        <img
          class="group-7-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb9d2a0d68fa5d9cd3f68/img/group-7-1@2x.svg"
        />
        <img
          class="oval-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/oval-3@2x.svg"
        />
        <div class="number-1 dmsans-normal-white-16px">{{ number2 }}</div>
        <img
          class="group-8-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb9d2a0d68fa5d9cd3f68/img/group-8-1@2x.svg"
        />
        <img
          class="oval-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/oval-5@2x.svg"
        />
        <div class="number-2 dmsans-normal-white-16px">{{ number3 }}</div>
        <img
          class="group-9-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb9d2a0d68fa5d9cd3f68/img/group-9-1@2x.svg"
        />
        <img
          class="oval-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/oval-3@2x.svg"
        />
        <div class="number-3 dmsans-normal-white-16px">{{ number4 }}</div>
        <img
          class="group-10-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/group-10-1@2x.svg"
        />
        <img
          class="oval-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/oval-3@2x.svg"
        />
        <div class="number-4 dmsans-normal-white-16px">{{ number5 }}</div>
        <img
          class="group-12-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb9d2a0d68fa5d9cd3f68/img/group-12-2@2x.svg"
        />
        <img
          class="oval-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/oval-3@2x.svg"
        />
        <div class="number-5 dmsans-normal-white-16px">{{ number6 }}</div>
        <div class="rectangle-28"></div>
        <div class="categories dmsans-normal-white-14px">{{ categories }}</div>
        <img class="group-13_opaque-1" :src="group13_Opaque1" />
        <div class="rectangle-29"></div>
        <div class="map-1 dmsans-normal-white-14px">{{ map2 }}</div>
        <div class="food-map-with-more-t worksans-bold-mine-shaft-56px" v-html="foodMapWithMoreT"></div>
        <p class="best-for-active-free-2 dmsans-normal-mine-shaft-16px">{{ bestForActiveFree3 }}</p>
        <light-field-default
          :label="lightFieldDefaultProps.label"
          :inputType="lightFieldDefaultProps.inputType"
          :inputPlaceholder="lightFieldDefaultProps.inputPlaceholder"
        />
        <img
          class="map-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/map-1@2x.svg"
        />
        <light-button-primary-text
          :children="lightButtonPrimaryText2Props.children"
          :className="lightButtonPrimaryText2Props.className"
        />
        <img class="group-14_opaque-1" :src="group14_Opaque1" />
        <div class="rectangle-30"></div>
        <div class="submit dmsans-normal-white-14px">{{ submit }}</div>
        <div class="submit-your-restaura worksans-bold-mine-shaft-56px" v-html="submitYourRestaura"></div>
        <p class="best-for-active-free-3 dmsans-normal-mine-shaft-16px">{{ bestForActiveFree4 }}</p>
        <light-button-primary-text
          :children="lightButtonPrimaryText3Props.children"
          :className="lightButtonPrimaryText3Props.className"
        />
        <div class="rectangle-31"></div>
        <div class="restaurants-2 dmsans-normal-white-14px">{{ restaurants3 }}</div>
        <div class="pizza-2 dmsans-normal-mine-shaft-20px">{{ pizza3 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import LightButtonPrimaryText from "../components/LightButtonPrimaryText";
import LightButtonPrimaryIcon from "../components/LightButtonPrimaryIcon";
import DarkFieldDefault from "../components/DarkFieldDefault";
import LightFieldDefault from "../components/LightFieldDefault";
export default {
  name: "HomePage",
  components: {
    LightButtonPrimaryText,
    LightButtonPrimaryIcon,
    DarkFieldDefault,
    LightFieldDefault,
  },
  props: [
    "pattern1",
    "rectangle1",
    "chef",
    "combinedShape1",
    "combinedShape2",
    "coffee",
    "group14_Opaque",
    "map1",
    "pattern2",
    "group6_Opaque",
    "x775Fe071Cd3042D99E7D76252D62C70211",
    "group5_Opaque1",
    "aboutRestaurantsMa",
    "deliveryFoodFromT",
    "foodAndRestaurants",
    "popularCategories",
    "pizza1",
    "burgers1",
    "vegetarian1",
    "asian",
    "bakery",
    "restaurants1",
    "restaurants2",
    "bestForActiveFree1",
    "viewAll1",
    "rectangle3",
    "text1",
    "surname",
    "x2030Min",
    "burgers2",
    "rectangle4",
    "text2",
    "name",
    "x45Min",
    "pizza2",
    "rectangle5",
    "text3",
    "place",
    "x1520Min",
    "sushi",
    "rectangle6",
    "text4",
    "grandRestaurant",
    "x50Min",
    "vegetarian2",
    "menu",
    "mapSubmit",
    "subscribe",
    "x2019FoodLaaqiq",
    "privacy",
    "termsAndConditions",
    "bestDeals",
    "bestForActiveFree2",
    "viewAll2",
    "stars1",
    "luxuryRestaurant",
    "kennewickAl41329",
    "rectangle7",
    "italianCuisine",
    "x8019FacilisisStree",
    "x775Fe071Cd3042D99E7D76252D62C7022",
    "aboutRestaurants",
    "number1",
    "number2",
    "number3",
    "number4",
    "number5",
    "number6",
    "categories",
    "group13_Opaque1",
    "map2",
    "foodMapWithMoreT",
    "bestForActiveFree3",
    "group14_Opaque1",
    "submit",
    "submitYourRestaura",
    "bestForActiveFree4",
    "restaurants3",
    "pizza3",
    "lightButtonPrimaryText1Props",
    "lightButtonPrimaryIconProps",
    "lightFieldDefaultProps",
    "lightButtonPrimaryText2Props",
    "lightButtonPrimaryText3Props",
  ],
};
</script>

<style>
.home-1440 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 4728px;
  overflow: hidden;
  width: 1440px;
}

.group-14 {
  align-items: flex-start;
  display: flex;
  height: 902px;
  justify-content: flex-end;
  margin-left: -2031px;
  margin-top: 2856px;
  min-width: 1744px;
  padding: 64px 118.2px;
}

.pattern {
  align-self: flex-end;
  height: 1px;
  margin-bottom: 153.25px;
  width: 1px;
}

.overlap-group3 {
  border-radius: 12px;
  height: 464px;
  margin-left: 187px;
  position: relative;
  width: 448px;
}

.overlap-group {
  align-items: center;
  background-color: #ffe9cf;
  border-radius: 12px;
  display: flex;
  height: 464px;
  justify-content: flex-end;
  left: 0;
  min-width: 448px;
  padding: 39.2px 207.5px;
  position: absolute;
  top: 0;
}

.rectangle {
  align-self: flex-end;
  height: 1px;
  width: 1px;
}

.chef {
  height: 1px;
  margin-bottom: 10px;
  margin-left: 15px;
  width: 1px;
}

.combined-shape {
  height: 1px;
  left: 49px;
  position: absolute;
  top: 56px;
  width: 1px;
}

.combined-shape-1 {
  height: 1px;
  left: 49px;
  position: absolute;
  top: 120px;
  width: 1px;
}

.coffee {
  height: 1px;
  left: 26px;
  position: absolute;
  top: 366px;
  width: 1px;
}

.group-14_opaque {
  align-self: center;
  height: 1px;
  margin-left: 18px;
  width: 1px;
}

.map {
  height: 1px;
  margin-left: 5px;
  margin-top: 189.75px;
  width: 1px;
}

.pattern-1 {
  align-self: center;
  height: 1px;
  margin-bottom: 383.5px;
  margin-left: 746px;
  width: 1px;
}

.overlap-group4 {
  height: 4729px;
  margin-left: 286px;
  position: relative;
  width: 1440px;
}

.overlap-group-1 {
  height: 382px;
  left: 0;
  position: absolute;
  top: 4347px;
  width: 1440px;
}

.group-6_opaque {
  height: 381px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.rectangle-1 {
  background-color: var(--mine-shaft);
  height: 382px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.x775fe071cd3042d99e7d76252d62c702-1-1 {
  height: 168px;
  left: 118px;
  object-fit: cover;
  position: absolute;
  top: 24px;
  width: 208px;
}

.group-5_opaque-1 {
  height: 1171px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1440px;
}

.about-restaurants-ma {
  left: 598px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 25px;
  white-space: nowrap;
}

.delivery-food-from-t {
  left: 86px;
  letter-spacing: 0;
  line-height: 80px;
  position: absolute;
  top: 271px;
}

.rectangle-2 {
  background-color: var(--white);
  border-radius: 12px;
  height: 56px;
  left: 132px;
  position: absolute;
  top: 637px;
  width: 478px;
}

.food-and-restaurants {
  left: 152px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 649px;
  white-space: nowrap;
}

.rectangle-3 {
  height: 3466px;
  left: 0;
  position: absolute;
  top: 883px;
  width: 1439px;
}

.popular-categories {
  left: 454px;
  letter-spacing: 0;
  line-height: 64px;
  position: absolute;
  text-align: center;
  top: 1005px;
  white-space: nowrap;
}

.rectangle-4 {
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  height: 240px;
  left: 136px;
  position: absolute;
  top: 1120px;
  transition: all 0.2s ease;
  width: 170px;
}

.rectangle-4:hover,
.rectangle-5:hover,
.rectangle-6:hover,
.rectangle-7:hover,
.rectangle-8:hover {
  background-color: #f49b3f;
}

.rectangle-5 {
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  height: 240px;
  left: 332px;
  position: absolute;
  top: 1120px;
  transition: all 0.2s ease;
  width: 170px;
}

.pizza {
  left: 178px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1281px;
  white-space: nowrap;
}

.rectangle-6 {
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  height: 240px;
  left: 536px;
  position: absolute;
  top: 1120px;
  transition: all 0.2s ease;
  width: 170px;
}

.burgers {
  left: 592px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1281px;
  white-space: nowrap;
}

.rectangle-7 {
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  height: 240px;
  left: 736px;
  position: absolute;
  top: 1120px;
  transition: all 0.2s ease;
  width: 170px;
}

.vegetarian {
  left: 772px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1281px;
  white-space: nowrap;
}

.rectangle-8 {
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  height: 240px;
  left: 936px;
  position: absolute;
  top: 1120px;
  transition: all 0.2s ease;
  width: 170px;
}

.asian {
  left: 996px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1281px;
  white-space: nowrap;
}

.rectangle-9 {
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  height: 240px;
  left: 1136px;
  position: absolute;
  top: 1120px;
  transition: all 0.2s ease;
  width: 170px;
}

.rectangle-9:hover {
  transform: scale(1.1);
}

.bakery {
  left: 1180px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1281px;
  white-space: nowrap;
}

.rectangle-10 {
  background-color: var(--white);
  height: 2874px;
  left: 0;
  position: absolute;
  top: 1472px;
  width: 1440px;
}

.rectangle-11 {
  background-color: var(--fern);
  border-radius: 8px;
  height: 32px;
  left: 136px;
  position: absolute;
  top: 1483px;
  width: 122px;
}

.restaurants {
  left: 154px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1483px;
  white-space: nowrap;
}

.restaurants-1 {
  left: 136px;
  letter-spacing: 0;
  line-height: 64px;
  position: absolute;
  top: 1533px;
  white-space: nowrap;
}

.best-for-active-free {
  left: 136px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1611px;
  white-space: nowrap;
}

.view-all {
  left: 1116px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 1595px;
  white-space: nowrap;
}

.arrow {
  height: 23px;
  left: 1218px;
  position: absolute;
  top: 1596px;
  width: 13px;
}

.arrow-1 {
  height: 23px;
  left: 1276px;
  position: absolute;
  top: 1596px;
  width: 13px;
}

.rectangle-12 {
  background-color: var(--black-haze);
  border-radius: 12px;
  height: 320px;
  left: 136px;
  position: absolute;
  top: 1680px;
  width: 270px;
}

.rectangle-13 {
  height: 208px;
  left: 136px;
  object-fit: cover;
  position: absolute;
  top: 1680px;
  width: 270px;
}

.rectangle-14 {
  background-color: var(--apricot);
  border-radius: 8px;
  height: 48px;
  left: 152px;
  position: absolute;
  top: 1696px;
  width: 92px;
}

.star {
  height: 27px;
  left: 160px;
  position: absolute;
  top: 1706px;
  width: 29px;
}

.text-1 {
  left: 198px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1704px;
  white-space: nowrap;
}

.surname {
  left: 160px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1912px;
  white-space: nowrap;
}

.x20-30-min {
  left: 160px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1947px;
  white-space: nowrap;
}

.burgers-1 {
  left: 282px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 1947px;
  white-space: nowrap;
}

.rectangle-15 {
  background-color: var(--black-haze);
  border-radius: 12px;
  height: 320px;
  left: 436px;
  position: absolute;
  top: 1680px;
  width: 270px;
}

.rectangle-16 {
  height: 208px;
  left: 436px;
  object-fit: cover;
  position: absolute;
  top: 1680px;
  width: 270px;
}

.rectangle-17 {
  background-color: var(--apricot);
  border-radius: 8px;
  height: 48px;
  left: 452px;
  position: absolute;
  top: 1696px;
  width: 92px;
}

.star-1 {
  height: 27px;
  left: 460px;
  position: absolute;
  top: 1706px;
  width: 29px;
}

.text-2 {
  left: 498px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1704px;
  white-space: nowrap;
}

.name {
  left: 460px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1912px;
  white-space: nowrap;
}

.x45-min {
  left: 460px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1947px;
  white-space: nowrap;
}

.pizza-1 {
  left: 582px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 1947px;
  white-space: nowrap;
}

.rectangle-18 {
  background-color: var(--black-haze);
  border-radius: 12px;
  height: 320px;
  left: 736px;
  position: absolute;
  top: 1680px;
  width: 270px;
}

.rectangle-19 {
  height: 208px;
  left: 736px;
  object-fit: cover;
  position: absolute;
  top: 1680px;
  width: 270px;
}

.rectangle-20 {
  background-color: var(--apricot);
  border-radius: 8px;
  height: 48px;
  left: 752px;
  position: absolute;
  top: 1696px;
  width: 92px;
}

.star-2 {
  height: 27px;
  left: 760px;
  position: absolute;
  top: 1706px;
  width: 29px;
}

.text-3 {
  left: 798px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1704px;
  white-space: nowrap;
}

.place {
  left: 760px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1912px;
  white-space: nowrap;
}

.x15-20-min {
  left: 760px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1947px;
  white-space: nowrap;
}

.sushi {
  left: 942px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 1947px;
  white-space: nowrap;
}

.rectangle-21 {
  background-color: var(--black-haze);
  border-radius: 12px;
  height: 320px;
  left: 1036px;
  position: absolute;
  top: 1680px;
  width: 270px;
}

.rectangle-22 {
  height: 208px;
  left: 1036px;
  object-fit: cover;
  position: absolute;
  top: 1680px;
  width: 270px;
}

.rectangle-23 {
  background-color: var(--apricot);
  border-radius: 8px;
  height: 48px;
  left: 1052px;
  position: absolute;
  top: 1696px;
  width: 92px;
}

.star-3 {
  height: 27px;
  left: 1060px;
  position: absolute;
  top: 1706px;
  width: 29px;
}

.text-4 {
  left: 1098px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1704px;
  white-space: nowrap;
}

.grand-restaurant {
  left: 1060px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1912px;
  white-space: nowrap;
}

.x50-min {
  left: 1060px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 1947px;
  white-space: nowrap;
}

.vegetarian-1 {
  left: 1202px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 1947px;
  white-space: nowrap;
}

.menu {
  left: 478px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 4398px;
  white-space: nowrap;
}

.map-submit {
  left: 678px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 4462px;
}

.subscribe {
  left: 1042px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 4421px;
  white-space: nowrap;
}

.telegram-plane {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/626fb6a81a5ac69f828de3ce/releases/626fb6be78c6cf77f13f539f/img/shape-9@2x.svg);
  background-size: 100% 100%;
  height: 23px;
  left: 1275px;
  position: absolute;
  top: 4500px;
  width: 26px;
}

.rectangle-24 {
  background-color: var(--white);
  height: 1px;
  left: 142px;
  opacity: 0.2;
  position: absolute;
  top: 4617px;
  width: 1170px;
}

.x2019-foo-d-laaqiq {
  left: 1150px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 4661px;
  white-space: nowrap;
}

.privacy {
  left: 1064px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 4661px;
  white-space: nowrap;
}

.terms-and-conditions {
  left: 858px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 4661px;
  white-space: nowrap;
}

.best-deals {
  left: 150px;
  letter-spacing: 0;
  line-height: 64px;
  position: absolute;
  top: 3825px;
  white-space: nowrap;
}

.best-for-active-free-1 {
  left: 150px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 3903px;
  white-space: nowrap;
}

.view-all-1 {
  left: 1262px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: right;
  top: 3903px;
  white-space: nowrap;
}

.rectangle-25 {
  background-color: var(--black-haze);
  border-radius: 12px;
  height: 208px;
  left: 158px;
  position: absolute;
  top: 3965px;
  width: 570px;
}

.stars-1 {
  height: 218px;
  left: 156px;
  object-fit: cover;
  position: absolute;
  top: 3967px;
  width: 278px;
}

.luxury-restaurant {
  left: 458px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 3986px;
}

.kennewick-al-41329 {
  left: 446px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 4069px;
}

.rectangle-26 {
  background-color: var(--black-haze);
  border-radius: 12px;
  height: 208px;
  left: 758px;
  position: absolute;
  top: 3965px;
  width: 570px;
}

.rectangle-27 {
  height: 208px;
  left: 758px;
  object-fit: cover;
  position: absolute;
  top: 3965px;
  width: 270px;
}

.italian-cuisine {
  left: 1044px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 3996px;
  white-space: nowrap;
}

.x8019-facilisis-stree {
  left: 1058px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 4072px;
  white-space: nowrap;
}

.x775fe071cd3042d99e7d76252d62c702-2 {
  height: 100px;
  left: 14px;
  object-fit: cover;
  position: absolute;
  top: 5px;
  width: 193px;
}

.about-restaurants {
  left: 478px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 4462px;
}

.group-11-1 {
  height: 112px;
  left: 964px;
  position: absolute;
  top: 1157px;
  width: 112px;
}

.oval {
  height: 40px;
  left: 1044px;
  position: absolute;
  top: 1152px;
  width: 40px;
}

.number {
  left: 1056px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1156px;
  white-space: nowrap;
}

.group-7-1 {
  height: 112px;
  left: 160px;
  position: absolute;
  top: 1151px;
  width: 112px;
}

.oval-1 {
  height: 40px;
  left: 244px;
  position: absolute;
  top: 1152px;
  width: 40px;
}

.number-1 {
  left: 254px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1156px;
  white-space: nowrap;
}

.group-8-1 {
  height: 112px;
  left: 364px;
  position: absolute;
  top: 1156px;
  width: 112px;
}

.oval-2 {
  height: 40px;
  left: 444px;
  position: absolute;
  top: 1152px;
  width: 40px;
}

.number-2 {
  left: 454px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1156px;
  white-space: nowrap;
}

.group-9-1 {
  height: 112px;
  left: 564px;
  position: absolute;
  top: 1156px;
  width: 112px;
}

.oval-3 {
  height: 40px;
  left: 644px;
  position: absolute;
  top: 1152px;
  width: 40px;
}

.number-3 {
  left: 654px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1156px;
  white-space: nowrap;
}

.group-10-1 {
  height: 112px;
  left: 764px;
  position: absolute;
  top: 1156px;
  width: 112px;
}

.oval-4 {
  height: 40px;
  left: 844px;
  position: absolute;
  top: 1152px;
  width: 40px;
}

.number-4 {
  left: 854px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1156px;
  white-space: nowrap;
}

.group-12-2 {
  height: 112px;
  left: 1166px;
  position: absolute;
  top: 1156px;
  width: 112px;
}

.oval-5 {
  height: 40px;
  left: 1244px;
  position: absolute;
  top: 1152px;
  width: 40px;
}

.number-5 {
  left: 1258px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1156px;
  white-space: nowrap;
}

.rectangle-28 {
  background-color: var(--fern);
  border-radius: 8px;
  height: 32px;
  left: 598px;
  position: absolute;
  top: 956px;
  width: 213px;
}

.categories {
  left: 624px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 954px;
  white-space: nowrap;
}

.group-13_opaque-1 {
  height: 564px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 2142px;
  width: 1440px;
}

.rectangle-29 {
  background-color: var(--fern);
  border-radius: 8px;
  height: 32px;
  left: 836px;
  position: absolute;
  top: 2235px;
  width: 58px;
}

.map-1 {
  left: 850px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 2235px;
  white-space: nowrap;
}

.food-map-with-more-t {
  left: 782px;
  letter-spacing: 0;
  line-height: 64px;
  position: absolute;
  top: 2288px;
}

.best-for-active-free-2 {
  left: 836px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 2491px;
  width: 470px;
}

.map-2 {
  height: 19px;
  left: 1080px;
  position: absolute;
  top: 2590px;
  width: 13px;
}

.group-14_opaque-1 {
  height: 902px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 2915px;
  width: 1440px;
}

.rectangle-30 {
  background-color: var(--fern);
  border-radius: 8px;
  height: 32px;
  left: 842px;
  position: absolute;
  top: 2988px;
  width: 99px;
}

.submit {
  left: 840px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 2988px;
  white-space: nowrap;
  width: 102px;
}

.submit-your-restaura {
  left: 842px;
  letter-spacing: 0;
  line-height: 64px;
  position: absolute;
  top: 3038px;
}

.best-for-active-free-3 {
  left: 842px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 3244px;
  width: 470px;
}

.rectangle-31 {
  background-color: var(--fern);
  border-radius: 8px;
  height: 32px;
  left: 150px;
  position: absolute;
  top: 3775px;
  width: 122px;
}

.restaurants-2 {
  left: 166px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 3775px;
  white-space: nowrap;
}

.pizza-2 {
  left: 392px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 1281px;
  white-space: nowrap;
}
</style>
