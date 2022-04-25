<template>
  <v-container>
    <v-row>
      <br />
      <!-- <v-select
        :items="items"
        v-model="select"
        item-text="garbageName"
        filled
        return-object
        label="Please Select Your Garbage Name"
        dense
      ></v-select> -->
      <v-col
        xs="12"
        sm="6"
        md="6"
        lg="4"
        xl="3"
        v-for="item in items"
        :key="item.RecipeID"
      >
        <v-card elevation="2" shaped class="mx-auto my-6">
          <v-img height="250" :src="imgs[item.name]"></v-img>

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
            <v-chip-group column>
              <v-chip
                v-for="ingredients in item.ingredients"
                :key="ingredients"
                >{{ ingredients }}</v-chip
              >
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2 right"
              text
              @click="update_show(item)"
            >
              READ MORE
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="update_show(item)">
              <v-icon>{{
                show[item.name] ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
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
      </v-col>
    </v-row>

    <v-snackbar
      :timeout="7000"
      color="primary"
      v-model="snackbar"
      shaped
      right
      bottom
    >
      <div class="text-center text-h7">Welcome to Saineating</div>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    snackbar: true,
    dialog: false,
    select: null,
    items: null,
    type: "",
    method: "",
    imgsrc: "",
    show: {},
    imgs: {},
  }),
  mounted() {
    console.log(this.flexsearch);
    this.axios
      .get("/api/recipes")
      .then((response) => {
        console.log(response);
        this.items = response.data;
      })
      .then(() => {
        let imgs = {};
        console.log(this.items);
        Object.values(this.items).forEach((item) => {
          imgs[item.name] = require("../assets/Iteration1/R" +
            item.id +
            ".png");
        });
        this.imgs = imgs;
      });
  },
  methods: {
    update_show(item) {
      this.$set(this.show, item.name, !this.show[item.name]);
    },
  },
};
</script>
