<template>
  <div class="container-center-horizontal">
    <div class="recipedetails-page screen">
      <heading-bckground :src="headingBckgroundProps.src" title="Recipe Details"/>
      <v-container class="my-8">
        <v-card elevation="2" shaped class="mx-auto my-6">
          <v-img :src="imgsrc"></v-img>

          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-text>
            <v-row>
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <v-spacer></v-spacer>
              <v-chip
                v-for="type in item.types"
                :key="type"
                >{{ type }} </v-chip
              >
              <div class="grey--text ms-4"></div>
            </v-row>

            <!-- <div class="my-4 grey--text">{{ item.type }}</div> -->
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Ingredients</v-card-title>

          <v-card-text>
            <v-chip-group column>
              <v-chip
                v-for="ingredient in item.ingredients"
                :key="ingredient.id"
                >{{ ingredient.name }} x {{ ingredient.amount }} </v-chip
              >
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2 right"
              text
              @click="show = !show"
            >
              READ MORE
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text v-html="item.details">
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import HeadingBckground from "../components/HeadingBckground";
export default {
  name: "RecipeDetailsPage",
  components: {
    HeadingBckground,
  },
  props: [
    "recipedetails",
    "headingBckgroundProps",
    "xHeaderProps",
    "xFooterProps",
  ],

  data: () => ({
    snackbar: true,
    dialog: false,
    select: null,
    item: null,
    type: "",
    method: "",
    imgsrc: "",
    show: {},
  }),
  mounted() {
    console.log(this.$route.params);
    const id = this.$route.params.id;
    this.axios
      .get(this.$hostname + "/apiv2/recipe_v2/" + id)
      .then((response) => {
        console.log(response);
        this.item = response.data;

        this.imgsrc = require("../assets/Iter2/Recipes/RecipeId" + this.item.id + ".png");
      });
  },
  methods: {
  },
};
</script>
<style>
.recipedetails-page {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.overlap-group5 {
  height: 212px;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

/* .recipe-details {
  left: 135px;
  letter-spacing: 0;
  line-height: 80px;
  position: absolute;
  top: 127px;
  white-space: nowrap;
} */
</style>
