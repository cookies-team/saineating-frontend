<template>
  <div class="d-flex flex-column">
    <div
      class="home-page screen"
      :style="`background: url(${require('../assets/Iter2/MainBackground.png')}); background-size: cover;`"
    >
      <div class="home-large-pic">
        <img class="home-top-pic-1" :src="`${require('../assets/Iter3/Home/HomepageTopBG.png')}`" />
      </div>
      <div class="recipe-block">
        <div class="flex-col">
          <h1 class="worksans-bold-mine-shaft-56px">Categoried Recipes</h1>
        </div>
        <v-row class="home-recipe-category my-8">
          <v-col
            cols="6"
            sm="4"
            md="2"
            lg="2"
            xl="2"
            v-for="item in recipeCategories"
            :key="item.name"
          >
            <router-link :to="item.link">
              <div class="home-recipes-card">
                <img class="item-icon" :src="item.icon" /><img
                  class="green-circle"
                  src="https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/oval@2x.png"
                />
                <div class="item-number dmsans-normal-white-16px">
                  {{ item.number }}
                </div>

                <div class="item-name dmsans-normal-mine-shaft-20px">
                  {{ item.name }}
                </div>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </div>
      <div class="rest-list">
        <div class="d-flex flex-column">
          <!-- <div class="restaurants-label">
            <div class="dmsans-normal-white-14px">EATTING OUT</div>
          </div> -->
          <div class="restaurants-1 worksans-bold-mine-shaft-56px">
            Restaurants List
          </div>
          <div class="d-flex justify-space-between">
            <p class="best-for-active-free dmsans-normal-mine-shaft-16px">
              Take your children to there
            </p>
            <div></div>
            <div class="rest-buttons pa-1" style="align-items: end">
              <v-btn fab elevation="0">
                <v-icon dark @click="prevRests"> mdi-chevron-left </v-icon>
              </v-btn>

              <v-btn fab elevation="0">
                <v-icon dark @click="nextRests"> mdi-chevron-right </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <v-row class="d-flex ma-3 justify-space-around">
          <v-col
            cols="12"
            sm="12"
            md="3"
            lg="3"
            xl="3"
            v-for="item in shownRests"
            :key="item.RestID"
          >
            <router-link :to="item.link">
              <rest-card
                class="rest-card"
                :image="item.imgsrc"
                :restName="item.Name"
                :desc="item.distance"
                :types="item.TypeName"
              />
            </router-link>
          </v-col>
        </v-row>
      </div>
      <v-row class="map-section mt-16 mb-16">
        <v-col cols="12" sm="6">
          <div
            :style="`background-image: url( ${require('../assets/Iter2/ManEatOut.png')}); background-size: contain; width: 100%; height: 100%;`"
          ></div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="d-flex flex-column justify-content-center"
        >
          <!-- <div class="map-label-background">
            <div class="map-label dmsans-normal-white-14px">MAP</div>
          </div> -->
          <h1 class="worksans-bold-mine-shaft-56px">
            Healthy Eating out Map with Recommend Restaurants
          </h1>
          <p class="dmsans-normal-mine-shaft-16px">
            Please go to the Eating out page to get start.
          </p>
          <div class="d-flex justify-center">
            <router-link to="/restmap" target="_blank">
              <v-btn
                class="mr-8"
                color="green px-6 py-5"
                dark
                style="font-style: italic"
                elevation="0"
              >
                Search on Map</v-btn
              >
            </router-link>
          </div>
        </v-col>
      </v-row>
      <v-row class="guideline-section mt-16">
        <v-col cols="12" sm="6">
          <div
            :style="`background-image: url( ${require('../assets/Iter2/WomanRecipe.png')}); background-size: contain; width: 100%; height: 100%;`"
          ></div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="worksans-bold-mine-shaft-56px">
            Healthy Eating Shopping Guidelines
          </div>
          <p class="best-for-active-free-2 dmsans-normal-mine-shaft-16px">
            Helping you avoid childhood obesity caused by unhealthy eating
            through daily shopping habits.
          </p>
          <div class="d-flex justify-center">
            <router-link to="/guideline" target="_blank">
              <v-btn
                class="mr-8"
                color="green px-6 py-5"
                dark
                style="font-style: italic"
                elevation="0"
              >
                View More</v-btn
              >
            </router-link>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-4 mb-16">
        <v-col cols="12" sm="6">
          <div class="guideline-item my-2 mx-6">
            <v-row class="ma-2">
              <v-col cols="12" md="6">
                <img class="rectangle-4" :src="stars1" />
              </v-col>
              <v-col cols="12" md="6">
                <div class="worksans-bold-mine-shaft-24px">
                  Australian Healthy Eating Stars
                </div>
                <p class="dmsans-normal-mine-shaft-16px">
                  The Health Star Rating helps you make healthier food choices
                  when shopping for packaged food products.
                </p>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div class="guideline-item my-2 mx-6">
            <v-row class="ma-2">
              <v-col cols="12" md="6">
                <img class="rectangle-4" :src="rectangle" />
              </v-col>
              <v-col cols="12" md="6">
                <div class="worksans-bold-mine-shaft-24px">
                  Food you should avoid
                </div>
                <p class="dmsans-normal-mine-shaft-16px">
                  Including high calorie foods etc.
                </p>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import RestCard from "../components/RestCard";

export default {
  name: "HomePage",
  components: {
    RestCard,
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
  data: () => ({
    recipeCategories: [
      {
        icon: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/group-7-1@2x.png",
        name: "Breakfast",
        number: 42,
        link: "",
      },
      {
        icon: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/group-8-1@2x.png",
        name: "Lunch",
        number: 35,
        link: "",
      },
      {
        icon: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/group-9-1@2x.png",
        name: "Dinner",
        number: 35,
        link: "",
      },
      {
        icon: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/group-10-1@2x.png",
        name: "Vegetarian",
        number: 35,
        link: "",
      },
      {
        icon: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/group-11-1@2x.png",
        name: "Asian",
        number: 35,
        link: "",
      },
      {
        icon: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/group-12-2@2x.png",
        name: "Desserts",
        number: 9,
        link: "",
      },
    ],
    rests: [],
    maxShow: 4,
    curRestPos: 0,
    shownRests: [],
  }),
  mounted() {
    this.axios
      .get(this.$hostname + "/apiv3/recipes/types/count")
      .then((response) => {
        console.log(response);
        const types = response.data;
        types.forEach((row) => {
          this.recipeCategories.forEach((item) => {
            if (item.name == row.TypeName) {
              item.number = row.count;
              item.link = { name: "Recipes", params: { types: row.TypeId } };
            }
          });
        });
      });

    this.axios.get(this.$hostname + `/apiv3/restaurants`).then((response) => {
      console.log(response);
      response.data.forEach((rest) => {
        rest.imgsrc = require("../assets/Iter2/Rests/RestId" +
          rest.RestID +
          ".png");
        rest.link = { name: "RestMap", params: { restId: rest.RestID } };
        console.log(rest);
        this.rests.push(rest);
      });

      this.shownRests = this.rests.slice(
        this.curRestPos,
        this.curRestPos + this.maxShow
      );
    });
  },
  methods: {
    nextRests() {
      if (this.curRestPos + this.maxShow <= this.rests.length) {
        this.curRestPos += this.maxShow;
        this.shownRests = this.rests.slice(
          this.curRestPos,
          this.curRestPos + this.maxShow
        );
      }
    },
    prevRests() {
      if (this.curRestPos - this.maxShow >= 0) {
        this.curRestPos -= this.maxShow;
        this.shownRests = this.rests.slice(
          this.curRestPos,
          this.curRestPos + this.maxShow
        );
      }
    },
  },
};
</script>

<style>
.home-page {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.home-large-pic {
  max-width: 1440px;
  width: 100%;
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
  max-width: 1440px;
  width: 100%;
}

.recipe-block {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-top: 76px;
  min-height: 404px;
  width: 100%;
}

.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 113px;
}

.recipes-label {
  align-items: flex-start;
  background-color: var(--fern);
  opacity: 50%;
  border-radius: 8px;
  display: flex;
  height: 32px;
  max-width: 220px;
  padding: 0 23px;
}

.rest-list {
  align-self: center;
  display: flex;
  margin-top: 8rem;
  flex-direction: column;
  width: 80%;
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
  width: 100%;
}

.restaurants-label {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  opacity: 50%;
  display: flex;
  height: 32px;
  max-width: 122px;
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

.map-label-background {
  align-items: flex-start;
  align-self: center;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: 32px;
  min-width: 58px;
}

.map-label {
  align-self: center;
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 30px;
  text-align: center;
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

.guideline-item {
  background-color: var(--black-haze);
  border-radius: 12px;
  position: relative;
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

.home-recipe-category {
  width: 80%;
}

.home-recipes-card {
  border-radius: 12px;
  max-height: 240px;
  position: relative;
  /* max-width: 170px; */

  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.home-recipes-card:hover {
  background-color: #f49b3f;
  transform: scale(1.1);
}

.home-recipes-card:hover > .green-circle {
  transform: scale(1.1);
  content:url("https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/oval-2@2x.png"); /* = src */
}

.item-icon {
  max-width: 80%;
  flex: 80%;

  margin: 1rem;
  align-content: center;
  align-items: center;
  align-self: center;
}

.item-name {
  align-content: center;
  align-items: bottom;
  align-self: center;
  text-align: center;
  padding-bottom: 1rem;
}

.green-circle {
  position: absolute;
  right: 8%;
  top: 8%;
  height: 16%;
  z-index: 1;
}

.item-number {
  position: absolute;
  right: 12%;
  top: 10%;
  z-index: 2;
}

.home-rest-list {
  width: 80%;
}
.rest-card:hover {
  transform: scale(1.1);
}
</style>