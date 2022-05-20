<template>
  <div class="why-page screen">
    <heading-bckground
      :src="headingBckgroundProps.src"
      title="Why Healthy Eating"
    />

    <v-container class="my-16" style="background: #f0f0f0">
      <div class="d-flex justify-space-around ma-2">
        <div
          class="lgBtnInactive ma-2 py-2 px-16"
          :class="{ lgBtnActive: page == 0 }"
          style="border-radius: 10px; text-align: center; cursor: pointer"
          @mouseover="page = 0"
        >
          <h3 class="worksans-mine-shaft-40px">
            The waistline growth in Australian children
          </h3>
        </div>
        <div
          class="lgBtnInactive ma-2 py-2 px-16"
          :class="{ lgBtnActive: page == 1 }"
          style="border-radius: 10px; text-align: center; cursor: pointer"
          @mouseover="page = 1"
        >
          <h3 class="worksans-mine-shaft-40px">
            Why maintaining healthy weight for children
          </h3>
        </div>
      </div>

      <v-window show-arrows draggable v-model="page">
        <v-window-item>
          <v-container class="px-16 my-16">
            <h1 class="worksans-mine-shaft-40px">
              An issue Australian parents have to consider
            </h1>
            <v-row class="my-4">
              <v-col cols="12" sm="6">
                <div
                  :style="`background: url(${fatkid}) center center no-repeat; background-size: contain; height: 100%; border-radius: 20px;min-height:10rem;`"
                ></div>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card-text class="dmsans-normal-mine-shaft-20px py-4">
                  Childhood obesity is always a sensitive topic. However,
                  according to the data given by
                  <a
                    href="https://www.aihw.gov.au/reports/overweight-obesity/overweight-obesity-australian-children-adolescents/summary"
                    target="_blank"
                    >AIHW</a
                  >, in 2017–18, about 25% Australian children and young
                  adolescents were overweight or obese. Children and young
                  people aged 5-14 are more likely to be overweight or obese in
                  2017-18 than their counterparts in 1995, and this proportion
                  is still increasing.
                </v-card-text>
              </v-col>
            </v-row>
            <h1 class="worksans-mine-shaft-40px">
              What causes waistline growth in children?
            </h1>
            <v-row class="my-4">
              <v-col cols="12" sm="6">
                <v-card-text class="dmsans-normal-mine-shaft-20px py-16">
                  As the chart shows, there are a number of factors that
                  contribute to the problem of waistline growth in children,
                  details of which can be found
                  <a
                    href="https://medium.com/@ashfaqareej4/childhood-obesity-is-an-emerging-global-public-health-challenge-10415e258a82"
                    target="_blank"
                    >here</a
                  >. Most of these factors, which can be controlled by us
                  parents, are mainly related to the eating habits of children.
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="6">
                <div
                  :style="`background: url(${require('../assets/Iter3/Why/Factors.jpg')}) center center no-repeat; background-size: contain; height: 100%; width: 100%; border-radius: 20px; min-height:10rem;`"
                ></div
              ></v-col>
            </v-row>

            <v-row class="my-4">
              <v-card-text class="dmsans-normal-mine-shaft-20px py-16">
                In order to provide parents with a more complete understanding
                of the problem of increasing waist sizes in children, the
                following video from YouTube provides details of the causes and
                factors that influence this phenomenon.
              </v-card-text>
            </v-row>
            <div class="video">
              <iframe
                style="border: 0; pointer-events: auto"
                id="ytplayer"
                type="text/html"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CUPBU_mJUtA?rel=0&mute=1&autoplay=0"
                frameborder="0"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
              ></iframe>
            </div>
          </v-container>
        </v-window-item>

        <v-window-item>
          <v-container class="px-16 my-16">
            <h1 class="worksans-mine-shaft-40px">
              Benefits of maintaining a healthy weight for our children
            </h1>
            <v-row>
              <v-col cols="12" sm="6">
                <img
                  style="width: 100%"
                  :src="`${require('../assets/Iter3/Why/risks.png')}`"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                class="dmsans-normal-mine-shaft-20px py-16"
              >
                According to <a href="https://raisingchildren.net.au/school-age/nutrition-fitness/common-concerns/child-obesity" target="_blank">Australian parenting website</a>, maintaining a healthy
                weight is important to your child’s health now and in the
                future. A healthy weight now reduces your child’s chances of:
                <br />being overweight or obese as an adult <br />developing
                serious health disorders during childhood, including type-2
                diabetes, obstructive sleep apnoea and hip and joint problems
                <br />suffering from emotional and social problems like teasing
                and bullying, low self-esteem, depression, poor body image and
                eating disorders <br />suffering physical health problems in
                adulthood, including heart disease, type-2 diabetes, some types
                of cancer, infertility and skin disorders. <br />(Picture
                Source: <a href="https://www.pinterest.com.au/pin/860187597554877936/" target="_blank">Healthy Risks</a>)
              </v-col>
            </v-row>
            <h1 class="worksans-mine-shaft-40px">
              How we can help our children maintain a healthy body shape
            </h1>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                class="dmsans-normal-mine-shaft-20px py-16"
              >
                Among the main causes of weight gain in children, most of them
                are related to their eating habits. Based on healthy eating
                diet, the following ideas will help your children maintain a
                healthy weight: Try to cook for your child instead of eating at
                a restaurant as this will help you control your child's daily
                intake. Parents can follow healthy recipes to cook for your
                child. See the healthy recipes feature on our website to make a
                main meal or dessert for your child. If you must have a meal in
                a restaurant, try to choose a restaurant that offers healthier
                recipes. Our Dining Out feature shows these restaurants with
                healthy recipes on a map. If you are still unsure of what to
                order at a restaurant, please refer to our shopping guide which
                will give you healthier options based on the type of restaurant.
                Try to specify a shopping plan before you shop. If you don't
                know which foods are healthier, you can refer to our shopping
                guide function for knowledge and information. Encourage your
                child to drink plenty of water and eat fruit and vegetables
                regularly, rather than drinking sugary drinks or eating
                high-calorie snacks. (Picture Source: <a href="https://www.helpguide.org/articles/healthy-eating/healthy-eating.htm" target="_blank">Healthy eating</a>, 
                <a href="https://www.eatforhealth.gov.au/eating-well/tips-eating-well/food-shopping-tips" target="_blank">Shopping)
              </v-col>
              <v-col cols="12" sm="6">
                <div
                  :style="`background: url(${require('../assets/Iter3/Why/HealthyEating.png')}) center center no-repeat; background-size: contain; height: 50%; border-radius: 20px;  min-height:10rem;`"
                ></div>
                <div
                class="mt-8"
                  :style="`background: url(${require('../assets/Iter3/Why/HealthySP.jpg')}) center center no-repeat; background-size: contain; height: 50%; border-radius: 20px; min-height:10rem;`"
                ></div>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>

<script>
import HeadingBckground from "../components/HeadingBckground";
export default {
  name: "WhyPage",
  components: {
    HeadingBckground,
  },
  props: [
    "fatkid",
    "cause",
    "apparentlyWeHadRe1",
    "heathyforchild",
    "apparentlyWeHadRe2",
    "headingBckgroundProps",
    "xHeaderProps",
    "xFooterProps",
  ],
  data: () => ({
    lastPage: 0,
    page: 0,
  }),
};
</script>

<style>
.why-page {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.head-container {
  margin-right: 0;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.main-pic {
  align-items: flex-start;
  background-color: var(--mist-gray);
  display: flex;
  flex-direction: column;
}

.fatkid {
  height: 520px;
  object-fit: cover;
  max-width: 1440px;
  width: 100%;
}

.cause {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 47px;
  margin-right: 8px;
  margin-top: 136px;
}

.cause-1,
.heathy-for-child {
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
}

.apparently-we-had-re {
  height: 101px;
  letter-spacing: 0;
  line-height: 32px;
  max-width: 1440px;
  width: 100%;
}

.video {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.video iframe,
.video object,
.video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.healthy-for-child {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 47px;
  margin-right: 85px;
  margin-top: 92px;
}

.lgBtnInactive {
  background: #d0ebcc;
  transition: #d0ebcc 6s ease;
}

.lgBtnActive {
  background: #81c178;
}
</style>
