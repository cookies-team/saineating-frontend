<template>
  <div class="guideline-page screen">
    <heading-bckground
      :src="headingBckgroundProps.src"
      title="Shopping Guidelines"
    />

    <v-container class="px-16 my-16">
      <div class="my-8">
        <h1 class="worksans-bold-mine-shaft-56px">Healthy Eating Stars</h1>
        <v-card-subtitle class="dmsans-normal-mine-shaft-20px">
          > Helping you avoid childhood obesity caused by unhealthy eating through
          daily shopping habits
        </v-card-subtitle>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <div
            class="ma-1"
            :style="`width: 100%; height: 20rem; background: url(${starpic1}); background-size: cover;`"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <p class="ma-2 worksans-normal-mine-shaft-24px">
            The Health Star Rating is a front-of-pack labelling system that
            rates the overall nutritional profile of packaged food and assigns
            it a rating from ½ a star to 5 stars. It provides a quick, easy,
            standard way to compare similar packaged foods. The more stars, the
            healthier the choice.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <div
            class="ma-2"
            :style="`width: 100%; height: 16rem; background-image: url(${starpic2}); background-size: cover;`"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <div class="worksans-normal-mine-shaft-24px">
            <h3>Details:</h3>
            <div>
              <a
                href="http://www.healthstarrating.gov.au/internet/healthstarrating/publishing.nsf/Content/About-health-stars"
                target="_blank"
              >
                About Health Star Ratings</a
              >
            </div>
            <div>
              <a
                href="http://www.healthstarrating.gov.au/internet/healthstarrating/publishing.nsf/Content/How-to-use-health-stars"
                target="_blank"
                >How to use Health Star Ratings</a
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="px-16 my-16">
      <div class="my-8">
        <h1 class="worksans-bold-mine-shaft-56px">Shopping Guidelines</h1>
        <v-card-subtitle class="dmsans-normal-mine-shaft-20px">
          > Consumption guidelines can help you avoid high-calorie and unhealthy
          foods
        </v-card-subtitle>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <p class="worksans-normal-mine-shaft-24px">
            It’s recommended that we should limit intake of foods containing
            saturated fat, added salt, added sugars and alcohol.<br /><br />Some
            foods and drinks are not necessary for a healthy diet and are too
            high in saturated fat and/or added sugars, added salt or alcohol and
            low in fiber. These foods and drinks can also be too high in energy.
            Many of them tend to have low levels of essential nutrients so are
            often referred to as ‘energy-dense’ but ‘nutrient-poor’ foods.
          </p>
        </v-col>
        <v-col cols="12" sm="6">
          <div
            class="ma-1"
            :style="`width: 100%; height: 20rem; background: url(${sgpic1}); background-size: cover;`"
          />
          <div class="worksans-normal-mine-shaft-24px">
            <h3>Details:</h3>
            <a
              href="https://www.eatforhealth.gov.au/food-essentials/fat-salt-sugars-and-alcohol"
              >https://www.eatforhealth.gov.au/food-essentials/fat-salt-sugars-and-alcohol</a
            ><a
              href="https://www.eatforhealth.gov.au/food-essentials/discretionary-food-and-drink-choices"
              >https://www.eatforhealth.gov.au/food-essentials/discretionary-food-and-drink-choices</a
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeadingBckground from "../components/HeadingBckground";

export default {
  name: "GuidelinePage",
  components: {
    HeadingBckground,
  },
  props: [
    "sgtitle",
    "pagebackground",
    "tag2",
    "bigtitle2",
    "featuredetails2",
    "pra11",
    "sgpic1",
    "pra21",
    "featurestag",
    "bigtitle",
    "featuredetails",
    "starpic1",
    "starpic2",
    "pra3",
    "pra22",
    "pra12",
    "headingBckgroundProps",
    "xHeaderProps",
    "xFooterProps",
  ],
};
</script>

<style>
.guideline-page {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.overlap-group5-5 {
  height: 212px;
  position: relative;
  width: 1440px;
}

.sg-title {
  left: 135px;
  letter-spacing: 0;
  line-height: 80px;
  position: absolute;
  top: 127px;
  white-space: nowrap;
}

.overlap-group6-3 {
  height: 2300px;
  margin-top: 103px;
  position: relative;
  width: 1440px;
}

.page-background-1 {
  height: 1297px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 196px;
  width: 1440px;
}

.sg-section {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 76px;
  min-height: 1075px;
  position: absolute;
  top: 1225px;
  width: 1287px;
}

.sg-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 17px;
  min-height: 228px;
  width: 716px;
}

.overlap-group-16 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  min-width: 90px;
  padding: 0 29px;
}

.tag2-1,
.features-tag {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 32px;
  text-align: center;
  white-space: nowrap;
}

.big-title2 {
  letter-spacing: 0;
  line-height: 64px;
  margin-top: 18px;
  min-height: 64px;
  white-space: nowrap;
}

.feature-details2 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 78px;
  min-height: 36px;
  white-space: nowrap;
}

.sg-deatils {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 73px;
  min-height: 774px;
  width: 1291px;
}

.flex-row-6 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 641px;
  margin-right: 4px;
  min-width: 1278px;
}

.pra1-1 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 32px;
  min-height: 597px;
  width: 457px;
}

.sg-pic1 {
  height: 557px;
  margin-left: 21px;
  object-fit: cover;
  width: 800px;
}

.pra2 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 133px;
  width: 1208px;
}

.eating-star-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 225px;
  min-height: 865px;
  position: absolute;
  top: 0;
  width: 1176px;
}

.healthy-eat-star {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 180px;
  min-height: 160px;
  width: 706px;
}

.overlap-group-17 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  margin-right: 6px;
  min-width: 90px;
  padding: 0 29px;
}

.big-title {
  letter-spacing: 0;
  line-height: 64px;
  margin-right: 6px;
  margin-top: 18px;
  min-height: 64px;
  min-width: 566px;
  text-align: center;
  white-space: nowrap;
}

.feature-details {
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 6px;
  margin-top: 14px;
  min-height: 32px;
  min-width: 700px;
  text-align: center;
  white-space: nowrap;
}

.eating-star-deatils {
  align-items: flex-start;
  display: flex;
  height: 646px;
  margin-left: 6px;
  margin-top: 59px;
  min-width: 1182px;
}

.starpic-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 646px;
  width: 596px;
}

.star-pic1 {
  height: 405px;
  object-fit: cover;
  width: 596px;
}

.star-pic2 {
  height: 165px;
  margin-right: 112px;
  margin-top: 76px;
  object-fit: cover;
  width: 306px;
}

.flex-col-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 68px;
  min-height: 645px;
  width: 512px;
}

.pra3 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 236px;
  width: 512px;
}

.pra2-1 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 72px;
  min-height: 130px;
  width: 512px;
}

.pra1-2 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 43px;
  min-height: 164px;
  width: 466px;
}
</style>
