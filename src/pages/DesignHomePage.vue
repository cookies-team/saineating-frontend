<template>
  <div class="container-center-horizontal">
    <div class="home-page screen">
      <div class="overlap-group15">
        <div class="overlap-group13">
          <div class="seach-bar-content dmsans-normal-mine-shaft-16px">{{ seachbarcontent }}</div>
          <light-button-primary-text :button="lightButtonPrimaryText1Props.button" />
        </div>
        <img class="home-top-pic-1" :src="hometoppic1" />
      </div>
      <div class="recipe-block">
        <div class="flex-col">
          <div class="overlap-group6">
            <div class="categories dmsans-normal-white-14px">{{ categories }}</div>
          </div>
          <h1 class="categoried-recipes worksans-bold-mine-shaft-56px">{{ categoriedrecipes }}</h1>
        </div>
        <div class="overlap-group-container">
          <div class="overlap-group1">
            <div class="rectangle"></div>
            <div class="breakfast dmsans-normal-mine-shaft-20px">{{ breakfast }}</div>
            <img class="group-7-1" :src="group71" /><img
              class="oval"
              src="https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/oval@2x.png"
            />
            <div class="number dmsans-normal-white-16px">{{ number1 }}</div>
          </div>
          <div class="overlap-group">
            <div class="rectangle"></div>
            <img class="group-8-1" :src="group81" /><img class="oval-1" :src="oval2" />
            <div class="number-1 dmsans-normal-white-16px">{{ number2 }}</div>
            <div class="lunch dmsans-normal-mine-shaft-20px">{{ lunch }}</div>
          </div>
          <div class="overlap-group">
            <div class="rectangle"></div>
            <div class="dinner dmsans-normal-mine-shaft-20px">{{ dinner }}</div>
            <img class="group" :src="group91" /><img class="oval" :src="oval3" />
            <div class="number dmsans-normal-white-16px">{{ number3 }}</div>
          </div>
          <div class="overlap-group">
            <div class="rectangle"></div>
            <div class="vegetarian dmsans-normal-mine-shaft-20px">{{ vegetarian }}</div>
            <img class="group" :src="group101" /><img class="oval" :src="oval4" />
            <div class="number dmsans-normal-white-16px">{{ number4 }}</div>
          </div>
          <div class="overlap-group">
            <div class="rectangle"></div>
            <div class="asian dmsans-normal-mine-shaft-20px">{{ asian }}</div>
            <img class="group-11-1" :src="group111" /><img class="oval" :src="oval5" />
            <div class="number-2 dmsans-normal-white-16px">{{ number5 }}</div>
          </div>
          <div class="overlap-group">
            <div class="rectangle-1"></div>
            <div class="desserts dmsans-normal-mine-shaft-20px">{{ desserts }}</div>
            <img class="group-12-2" :src="group122" /><img class="oval" :src="oval6" />
            <div class="number-3 dmsans-normal-white-16px">{{ number6 }}</div>
          </div>
        </div>
      </div>
      <div class="rest-list">
        <div class="flex-row">
          <div class="flex-col-1">
            <div class="overlap-group10">
              <div class="restaurants dmsans-normal-white-14px">{{ restaurants1 }}</div>
            </div>
            <div class="restaurants-1 worksans-bold-mine-shaft-56px">{{ restaurants2 }}</div>
            <p class="best-for-active-free dmsans-normal-mine-shaft-16px">{{ bestForActiveFree1 }}</p>
          </div>
          <div class="view-all dmsans-normal-mine-shaft-16px-2">{{ viewAll1 }}</div>
          <div class="overlap-group12">
            <light-button-primary-icon />
            <img class="arrow" :src="arrow1" />
          </div>
          <div class="overlap-group11">
            <light-button-primary-icon />
            <img class="arrow-1" :src="arrow2" />
          </div>
        </div>
        <div class="rest-container">
          <rest-card
            :overlapGroup="restCard1Props.overlapGroup"
            :bestBurgers="restCard1Props.bestBurgers"
            :x2030Min="restCard1Props.x2030Min"
            :burgers="restCard1Props.burgers"
          />
          <rest-card
            :overlapGroup="restCard2Props.overlapGroup"
            :bestBurgers="restCard2Props.bestBurgers"
            :x2030Min="restCard2Props.x2030Min"
            :burgers="restCard2Props.burgers"
            :className="restCard2Props.className"
          />
          <rest-card
            :overlapGroup="restCard3Props.overlapGroup"
            :bestBurgers="restCard3Props.bestBurgers"
            :x2030Min="restCard3Props.x2030Min"
            :burgers="restCard3Props.burgers"
            :className="restCard3Props.className"
          />
          <rest-card
            :overlapGroup="restCard4Props.overlapGroup"
            :bestBurgers="restCard4Props.bestBurgers"
            :x2030Min="restCard4Props.x2030Min"
            :burgers="restCard4Props.burgers"
            :className="restCard4Props.className"
          />
        </div>
      </div>
      <div class="map-group">
        <div class="overlap-group9" :style="{ 'background-image': 'url(' + overlapGroup9 + ')' }">
          <div class="categoried-recipes-2-1">
            <div class="map dmsans-normal-white-14px">{{ map1 }}</div>
          </div>
          <div class="food-map-with-more-t worksans-bold-mine-shaft-56px" v-html="foodMapWithMoreT"></div>
          <div class="overlap-group3">
            <div class="overlap-group1-1">
              <p class="best-for-active-free-1 dmsans-normal-mine-shaft-16px">{{ bestForActiveFree2 }}</p>
              <light-field-default
                :label="lightFieldDefaultProps.label"
                :inputType="lightFieldDefaultProps.inputType"
                :inputPlaceholder="lightFieldDefaultProps.inputPlaceholder"
              />
              <img class="map-1" :src="map2" />
            </div>
            <light-button-primary-text
              :button="lightButtonPrimaryText2Props.button"
              :className="lightButtonPrimaryText2Props.className"
            />
          </div>
        </div>
      </div>
      <div class="submit-rest-group">
        <div class="overlap-group8" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
          <div class="overlap-group-1">
            <div class="rectangle-2"></div>
            <div class="submit dmsans-normal-white-14px">{{ submit }}</div>
          </div>
          <div class="submit-your-restaura worksans-bold-mine-shaft-56px" v-html="submitYourRestaura"></div>
          <p class="best-for-active-free-2 dmsans-normal-mine-shaft-16px">{{ bestForActiveFree3 }}</p>
          <light-button-primary-text
            :button="lightButtonPrimaryText3Props.button"
            :className="lightButtonPrimaryText3Props.className"
          />
        </div>
      </div>
      <div class="shopping-guidelines">
        <div class="flex-row-1">
          <div class="flex-col-2">
            <div class="overlap-group7">
              <div class="restaurants-2 dmsans-normal-white-14px">{{ restaurants3 }}</div>
            </div>
            <div class="best-deals worksans-bold-mine-shaft-56px">{{ bestDeals }}</div>
            <p class="best-for-active-free-3 dmsans-normal-mine-shaft-16px">{{ bestForActiveFree4 }}</p>
          </div>
          <div class="view-all-1 dmsans-normal-mine-shaft-16px-2">{{ viewAll2 }}</div>
        </div>
        <div class="overlap-group-container-1">
          <div class="overlap-group5-1">
            <div class="rectangle-3"></div>
            <img class="stars-1" :src="stars1" />
            <div class="luxury-restaurant worksans-bold-mine-shaft-24px" v-html="luxuryRestaurant"></div>
            <p class="kennewick-al-41329 dmsans-normal-mine-shaft-16px">{{ kennewickAl41329 }}</p>
          </div>
          <div class="overlap-group6-1">
            <img class="rectangle-4" :src="rectangle" />
            <div class="flex-col-3">
              <div class="italian-cuisine worksans-bold-mine-shaft-24px">{{ italianCuisine }}</div>
              <p class="x8019-facilisis-stree dmsans-normal-mine-shaft-16px">{{ x8019FacilisisStree }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <x-footer
        :why="xFooterProps.why"
        :recipe="xFooterProps.recipe"
        :sg="xFooterProps.sg"
        :about="xFooterProps.about"
        :group17Props="xFooterProps.group17Props"
      /> -->
    </div>
  </div>
</template>

<script>
import LightButtonPrimaryText from "../components/LightButtonPrimaryText";
import LightButtonPrimaryIcon from "../components/LightButtonPrimaryIcon";
import RestCard from "../components/RestCard";
import LightFieldDefault from "../components/LightFieldDefault";
// import xFooter from "./xFooter";
export default {
  name: "HomePage",
  components: {
    LightButtonPrimaryText,
    LightButtonPrimaryIcon,
    RestCard,
    LightFieldDefault,
    // xFooter,
  },
  props: [
    "seachbarcontent",
    "hometoppic1",
    "categories",
    "categoriedrecipes",
    "breakfast",
    "group71",
    "number1",
    "group81",
    "oval2",
    "number2",
    "lunch",
    "dinner",
    "group91",
    "oval3",
    "number3",
    "vegetarian",
    "group101",
    "oval4",
    "number4",
    "asian",
    "group111",
    "oval5",
    "number5",
    "desserts",
    "group122",
    "oval6",
    "number6",
    "restaurants1",
    "restaurants2",
    "bestForActiveFree1",
    "viewAll1",
    "arrow1",
    "arrow2",
    "overlapGroup9",
    "map1",
    "foodMapWithMoreT",
    "bestForActiveFree2",
    "map2",
    "overlapGroup8",
    "submit",
    "submitYourRestaura",
    "bestForActiveFree3",
    "restaurants3",
    "bestDeals",
    "bestForActiveFree4",
    "viewAll2",
    "stars1",
    "luxuryRestaurant",
    "kennewickAl41329",
    "rectangle",
    "italianCuisine",
    "x8019FacilisisStree",
    "lightButtonPrimaryText1Props",
    "xHeaderProps",
    "restCard1Props",
    "restCard2Props",
    "restCard3Props",
    "restCard4Props",
    "lightFieldDefaultProps",
    "lightButtonPrimaryText2Props",
    "lightButtonPrimaryText3Props",
    "xFooterProps",
  ],
};
</script>

<style>
.home-page {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 4300px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.overlap-group15 {
  height: 880px;
  position: relative;
  width: 1440px;
}

.overlap-group13 {
  align-items: center;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  height: 56px;
  justify-content: flex-end;
  left: 131px;
  min-width: 478px;
  padding: 0 4px;
  position: absolute;
  top: 637px;
}

.seach-bar-content {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 141px;
  white-space: nowrap;
}

.home-top-pic-1 {
  height: 880px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1440px;
}

.recipe-block {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-top: 76px;
  min-height: 404px;
  width: 1172px;
}

.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 2px;
  min-height: 113px;
  width: 532px;
}

.overlap-group6 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  margin-right: 31px;
  /* min-width: 213px; */
  width: 213px;
  padding: 0 23px;
}

.categories {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 167px;
  text-align: center;
  white-space: nowrap;
}

.categoried-recipes {
  letter-spacing: 0;
  line-height: 64px;
  margin-top: 17px;
  min-height: 64px;
  min-width: 532px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  margin-right: 2px;
  margin-top: 51px;
  min-width: 1170px;
}

.overlap-group1 {
  border-radius: 12px;
  height: 240px;
  position: relative;
  width: 170px;
}

.rectangle,
.rectangle-1 {
  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  height: 240px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 170px;
}

.rectangle:hover {
  background-color: #f49b3f;
}

.breakfast {
  left: 42px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 161px;
  white-space: nowrap;
}

.group-7-1 {
  height: 112px;
  left: 25px;
  position: absolute;
  top: 31px;
  width: 112px;
}

.oval {
  height: 40px;
  left: 109px;
  position: absolute;
  top: 32px;
  width: 40px;
}

.number {
  left: 119px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 36px;
  white-space: nowrap;
}

.group-8-1 {
  height: 112px;
  left: 33px;
  position: absolute;
  top: 36px;
  width: 112px;
}

.oval-1 {
  height: 40px;
  left: 113px;
  position: absolute;
  top: 32px;
  width: 40px;
}

.number-1 {
  left: 122px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 36px;
  white-space: nowrap;
}

.lunch,
.asian {
  left: 61px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 161px;
  white-space: nowrap;
}

.dinner {
  left: 56px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 161px;
  white-space: nowrap;
}

.group {
  height: 112px;
  left: 29px;
  position: absolute;
  top: 36px;
  width: 112px;
}

.overlap-group {
  border-radius: 12px;
  height: 240px;
  margin-left: 30px;
  position: relative;
  width: 170px;
}

.vegetarian {
  left: 37px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 161px;
  white-space: nowrap;
}

.group-11-1 {
  height: 112px;
  left: 28px;
  position: absolute;
  top: 37px;
  width: 112px;
}

.number-2 {
  left: 121px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 36px;
  white-space: nowrap;
}

.rectangle-1:hover {
  transform: scale(1.1);
}

.desserts {
  left: 45px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 161px;
  white-space: nowrap;
}

.group-12-2 {
  height: 112px;
  left: 30px;
  position: absolute;
  top: 36px;
  width: 112px;
}

.number-3 {
  left: 123px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 36px;
  white-space: nowrap;
}

.rest-list {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 123px;
  min-height: 517px;
  width: 1268px;
}

.flex-row {
  align-items: flex-end;
  display: flex;
  height: 160px;
  margin-right: 8px;
  min-width: 1170px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 160px;
  width: 458px;
}

.overlap-group10 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  justify-content: flex-end;
  min-width: 122px;
  padding: 0 17px;
}

.restaurants {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 87px;
  text-align: center;
  white-space: nowrap;
}

.restaurants-1 {
  letter-spacing: 0;
  line-height: 64px;
  margin-top: 18px;
  min-height: 64px;
  white-space: nowrap;
}

.best-for-active-free {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 14px;
  min-height: 32px;
  white-space: nowrap;
}

.view-all {
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: 16px;
  margin-left: 522px;
  min-height: 32px;
  min-width: 58px;
  text-align: right;
  white-space: nowrap;
}

.overlap-group12 {
  border-radius: 24px;
  height: 48px;
  margin-bottom: 11px;
  margin-left: 28px;
  position: relative;
  width: 48px;
}

.arrow {
  height: 23px;
  left: 17px;
  position: absolute;
  top: 12px;
  width: 13px;
}

.overlap-group11 {
  border-radius: 24px;
  height: 48px;
  margin-bottom: 11px;
  margin-left: 8px;
  position: relative;
  width: 48px;
}

.arrow-1 {
  height: 23px;
  left: 18px;
  position: absolute;
  top: 12px;
  width: 13px;
}

.rest-container {
  align-items: flex-end;
  display: flex;
  height: 329px;
  margin-right: 8px;
  margin-top: 28px;
  min-width: 1260px;
  position: relative;
}

.map-group {
  align-items: flex-start;
  display: flex;
  height: 564px;
  margin-left: 6px;
  margin-top: 142px;
  min-width: 1446px;
}

.overlap-group9 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 564px;
  padding: 82px 22px;
  width: 1440px;
}

.categoried-recipes-2-1 {
  align-items: flex-start;
  align-self: center;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  margin-left: 288px;
  margin-top: 11px;
  min-width: 58px;
  padding: 0 14px;
}

.map {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 30px;
  text-align: center;
  white-space: nowrap;
}

.food-map-with-more-t {
  letter-spacing: 0;
  line-height: 64px;
  margin-top: 21px;
  min-height: 192px;
  min-width: 636px;
}

.overlap-group3 {
  height: 133px;
  margin-right: 113px;
  margin-top: 11px;
  position: relative;
  width: 470px;
}

.overlap-group1-1 {
  height: 133px;
  left: 0;
  position: absolute;
  top: 0;
  width: 470px;
}

.best-for-active-free-1 {
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 0;
  width: 470px;
}

.map-1 {
  height: 19px;
  left: 244px;
  position: absolute;
  top: 99px;
  width: 13px;
}

.submit-rest-group {
  align-items: flex-start;
  display: flex;
  height: 806px;
  margin-left: 2px;
  margin-top: 208px;
  min-width: 1450px;
  padding: 0 2px;
}

.overlap-group8 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 806px;
  padding: 67.5px 126px;
  position: relative;
  width: 1440px;
}

.overlap-group-1 {
  align-self: center;
  height: 31px;
  margin-left: 344px;
  position: relative;
  width: 102px;
}

.rectangle-2 {
  background-color: var(--fern);
  border-radius: 8px;
  height: 29px;
  left: 3px;
  position: absolute;
  top: 0;
  width: 99px;
}

.submit {
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 2px;
  white-space: nowrap;
  width: 102px;
}

.submit-your-restaura {
  letter-spacing: 0;
  line-height: 64px;
  margin-right: 133px;
  margin-top: 15px;
  min-height: 175px;
  width: 337px;
}

.best-for-active-free-2 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 13px;
  min-height: 88px;
  width: 470px;
}

.shopping-guidelines {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 47px;
  margin-top: 36px;
  min-height: 419px;
  width: 1201px;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  height: 179px;
  margin-left: 3px;
  min-width: 1174px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 155px;
  width: 736px;
}

.overlap-group7 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  min-width: 123px;
  padding: 0 15px;
}

.restaurants-2 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  text-align: center;
  white-space: nowrap;
  width: 93px;
}

.best-deals {
  letter-spacing: 0;
  line-height: 64px;
  margin-bottom: -1px;
  margin-top: 17px;
  min-height: 63px;
  white-space: nowrap;
}

.best-for-active-free-3 {
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: -3px;
  margin-top: 14px;
  min-height: 29px;
  white-space: nowrap;
}

.view-all-1 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 380px;
  min-height: 32px;
  min-width: 58px;
  text-align: right;
  white-space: nowrap;
}

.overlap-group-container-1 {
  align-items: flex-start;
  display: flex;
  height: 219px;
  margin-left: -3px;
  margin-top: 30px;
  min-width: 1188px;
}

.overlap-group5-1 {
  align-self: flex-end;
  height: 216px;
  position: relative;
  width: 576px;
}

.rectangle-3 {
  background-color: var(--black-haze);
  border-radius: 12px;
  height: 204px;
  left: 3px;
  position: absolute;
  top: 0;
  width: 572px;
}

.stars-1 {
  height: 214px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 2px;
  width: 279px;
}

.luxury-restaurant {
  left: 304px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 21px;
  width: 228px;
}

.kennewick-al-41329 {
  left: 292px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 102px;
  width: 284px;
}

.overlap-group6-1 {
  align-items: center;
  background-color: var(--black-haze);
  border-radius: 12px;
  display: flex;
  margin-left: 42px;
  min-width: 570px;
}

.rectangle-4 {
  height: 208px;
  object-fit: cover;
  width: 270px;
}

.flex-col-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
  margin-left: 15px;
  min-height: 108px;
  width: 264px;
}

.italian-cuisine {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 264px;
  white-space: nowrap;
}

.x8019-facilisis-stree {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 44px;
  min-height: 32px;
  min-width: 234px;
  white-space: nowrap;
}
</style>
