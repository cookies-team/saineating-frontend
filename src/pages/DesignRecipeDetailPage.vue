<template>
  <div class="container-center-horizontal">
    <div class="recipedetails-page screen">
      <div class="overlap-group5">
        <heading-bckground :src="headingBckgroundProps.src" />
        <h1 class="recipe-details worksans-bold-white-72px">Recipe Details</h1>
      </div>
    <v-container>
        <v-card elevation="2" shaped class="mx-auto my-6" 
          >
          <v-img
            :src="imgs[item.name]"
          ></v-img>

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
              <div class="grey--text ms-4">{{ item.type }}</div>
            </v-row>

            <!-- <div class="my-4 grey--text">{{ item.type }}</div> -->
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Ingredients</v-card-title>

          <v-card-text>
            <v-chip-group
              column
            >
              <v-chip v-for="ingredients in item.ingredients" :key="ingredients">{{ ingredients }}</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2 right" text @click="update_show(item)">
              READ MORE
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="update_show(item)"
            >
              <v-icon>{{ show[item.name] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show[item.name]">
              <v-divider></v-divider>

              <v-card-text>
                {{ item.details }}
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
  props: ["recipedetails", "headingBckgroundProps", "xHeaderProps", "xFooterProps"],

  data: () => ({
    snackbar: true,
    dialog: false,
    select: null,
    items: null,
    item: null,
    type: "",
    method: "",
    imgsrc: "",
    show: {},
    imgs: {}
  }),
  mounted() {
    console.log(this.$route.params);
    const id = this.$route.params.id
    this.axios.get(this.$hostname+ "/api/recipes").then((response) => {
      console.log(response);
      this.items = response.data;
        Object.values(this.items).forEach((item)=> {
        if (item.id == id) this.item = item
      })
    }).then(()=>{
      let imgs = {}
      console.log(this.items)
      Object.values(this.items).forEach((item)=> {
        imgs[item.name] = require("../assets/Iteration1/R"+item.id+".png")
      })
      this.imgs = imgs
    });
  },
  methods: {
    update_show(item) {
      this.$set(this.show, item.name, !this.show[item.name])
    }
  },
};
</script>
<style>
.recipedetails-page {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 1400px;
  position: relative;
  width: 1440px;
}

.overlap-group5 {
  height: 212px;
  position: relative;
  width: 1440px;
}

.recipe-details {
  left: 135px;
  letter-spacing: 0;
  line-height: 80px;
  position: absolute;
  top: 127px;
  white-space: nowrap;
}
</style>
