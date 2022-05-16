<template>
  <div class="guideline-page screen">
    <heading-bckground
      :src="headingBckgroundProps.src"
      title="Shopping Guidelines"
    />

    <v-container
      class="px-16 my-16 pb-16"
      style="background: #81c178; border-radius: 20px"
    >
      <div class="my-8">
        <v-card-subtitle class="dmsans-normal-mine-shaft-20px">
          If your child's waistline is growing, then you need to manage this
          problem in every way and, in particular, don't shop without a plan.
          This chapter helps you to get a quick guide to shopping in different
          situations.
        </v-card-subtitle>
      </div>
      <v-row>
        <v-col cols="12" sm="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="rounded-xl tab-img-btn"
                :style="`background: url(${sgbtn1}) center center no-repeat; background-size: contain;`"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn @click="show = 'hsr'">See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="rounded-xl tab-img-btn"
                :style="`background: url(${sgbtn2}) center center no-repeat; background-size: contain;`"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn @click="show = 'hesg'">See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="rounded-xl tab-img-btn"
                :style="`background: url(${sgbtn3}) center center no-repeat; background-size: contain;`"
              >
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn @click="show = 'eosh'">See more info</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      v-if="show == 'hsr'"
      class="hsr px-16 my-16"
      :style="`background: ${hsr.bgcolor}; border-radius: 50px;`"
    >
      <div class="my-8">
        <h1 class="worksans-bold-mine-shaft-56px">Healthy Star Rating</h1>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <div
            class="ma-1"
            :style="`width: 100%; height: 20rem; background: url(${hsr.starpic1}) center center no-repeat; background-size: contain;`"
          ></div>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="dmsans-normal-mine-shaft-20px my-16">
            In order to buy healthy food for your children, first you need to
            understand a front-of-pack labelling system in Australia, the Health
            Star, which rates packaged foods on a scale of ½ to 5 stars for
            their overall nutritional content. It provides a quick, easy and
            standard way to compare similar packaged foods. The more stars, the
            healthier the choice.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <div
            class="ma-1"
            :style="`width: 100%; height: 20rem; background: url(${hsr.starpic2}) center center no-repeat; background-size: contain;`"
          ></div>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="dmsans-normal-mine-shaft-20px my-16">
            As shown in the picture on the left. Most of the products carry
            these health stars and the labels come with a concise panel of
            nutritional information. You can choose foods for your child that
            are lower in nutrients associated with the risk of obesity
            (including saturated fat, sodium (salt), sugars and energy) by
            simply browsing.
          </p>
          <a
            href="http://www.healthstarrating.gov.au/internet/healthstarrating/publishing.nsf/Content/How-to-use-health-stars"
            target="_blank"
          >
            <v-btn class="ma-8" outlined elevation="0"
              >Find more about Health Star Ratings</v-btn
            >
          </a>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      v-if="show == 'hesg'"
      class="hesg px-16 my-16"
      :style="`background: ${hesg.bgcolor}; border-radius: 50px;`"
    >
      <div class="my-8">
        <h1 class="worksans-bold-mine-shaft-56px">
          Healthy Eating Shopping Guide
        </h1>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <p class="dmsans-normal-mine-shaft-20px my-16">
            As a parent and consumer, you may not have a lot of time to delve
            into the ingredients of your food. Don't worry, here's a healthy
            eating shopping guide based on the Australian Dietary Guidelines and
            the 2020 Food Labelling Literature Review.
          </p>
          <p class="dmsans-normal-mine-shaft-20px my-16">
            The foods listed in this guide can be purchased from major
            Australian supermarket such as Coles, Woolworths, ALDI and/or
            Foodland/Drake/IGA.
          </p>
          <p class="dmsans-normal-mine-shaft-20px my-16">
            This dietary guide includes: bread, biscuits, rice/pasta/pasta,
            breakfast cereals, vegetables/pulses, fruit, yoghurt, milk, cheese,
            meat/poultry, fish/seafood, nuts and seeds, fats and oils,
            frozen/quick meals, jams/fruit sauces/pastilles, ice cream/desserts,
            lollipops and chewing gum, soft drinks/sweet wine, salad
            dressings/dressings, flavoured drinks.
          </p>
          <a
            href="https://www.chsa-diabetes.org.au/consumer/Shopping%20Guide%202020%20Shopping%20Guide%20Final%20June%202020.pdf"
            target="_blank"
          >
            <v-btn class="ma-8" outlined elevation="0"
              >Click here to read <br />the "Shopping Guide to Healthy
              Eating"</v-btn
            ></a
          >
        </v-col>
        <v-col cols="12" sm="6">
          <div
            class="ma-1"
            :style="`width: 100%; height: 100%; min-height: 600px; background: url(${hesg.magz}) center center no-repeat; background-size: contain;`"
          ></div>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      v-if="show == 'eosh'"
      class="eosh px-16 my-16"
      :style="`background: ${eosh.bgcolor}; border-radius: 50px;`"
    >
      <div class="my-8">
        <h1 class="worksans-bold-mine-shaft-56px">Eating Out Stay Healthy</h1>
      </div>
      <v-row>
        <p class="dmsans-normal-mine-shaft-20px">
          This section will help parents make healthy meal choices for their
          children, no matter which kind of restaurant you take them to, skim
          through this guide and make healthier choices.
        </p>
      </v-row>
      <v-row class="my-8">
        <v-col
          cols="12"
          sm="6"
          md="2"
          lg="2"
          xl="2"
          v-for="item in eosh.recipeCategories"
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
  data: () => ({
    sgbtn1:
      "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6280e4a3857b1ba3d2a988ba/img/heathyeatingstarbtn-1@2x.png",
    sgbtn2:
      "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6280e4a3857b1ba3d2a988ba/img/sgbtn2-opaque-1@2x.png",
    sgbtn3:
      "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6280e4a3857b1ba3d2a988ba/img/sgbtn3@2x.png",
    show: null,
    hsr: {
      bgcolor: "#D0EBCC",
      starpic1:
        "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6280e4a3857b1ba3d2a988ba/img/starpic1@1x.png",
      starpic2:
        "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6280e4a3857b1ba3d2a988ba/img/starpic2@2x.png",
    },
    hesg: {
      bgcolor: "#B1E4AA",
      magz: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6280e4a3857b1ba3d2a988ba/img/n55-agthe-large-1@1x.png",
    },
    eosh: {
      bgcolor: "#8EEB81",
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
    },
  }),
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

.tab-img-btn {
  background-color: var(--mist-gray);
  height: 208px;
}
</style>
