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
        v-for="(item, index) in items"
        :key="item.RecipeID"
      >
        <v-card elevation="2" shaped class="mx-auto my-6">
          <v-img height="250" :src="imgs[item['Food Name']]"></v-img>

          <v-card-title>{{ item["Food Name"] }}</v-card-title>

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
              <!-- <div class="grey--text ms-4">{{ item['Food Name'].spilt(',')[0].trim() }}</div> -->
            </v-row>

            <!-- <div class="my-4 grey--text">{{ item.type }}</div> -->
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Ingredients</v-card-title>

          <v-card-text>
            <!-- <v-chip-group
              column
            >
              <v-chip v-for="ingredients in item['IN'].split(',')" :key="ingredients">{{ ingredients.trim() }}</v-chip>
            </v-chip-group> -->
            <v-chip>{{ item["IN"] }}</v-chip>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2 right"
              text
              @click="update_show(index)"
            >
              READ MORE
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="update_show(index)">
              <v-icon>{{
                show[index] ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show[index]">
              <v-divider></v-divider>

              <v-card-text>
                {{ item.details }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="pages"
        :total-visible="7"
        circle
        @input="next_page"
      ></v-pagination>
    </div>

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
  name: "FrontPage",
  data: () => ({
    page: 1,
    pages: 1,
    count: 12,
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
    this.page = parseInt(this.$route.query.page) || 1;
    this.axios
      .get("https://www.saineating.ngx.fi/api/recipes/count")
      .then((response) => {
        console.log(response);
        this.pages = 1+(response.data.count / this.count) >> 0 ;
      });
    const offset =(this.page-1)*12;
    this.axios
      .get(`https://www.saineating.ngx.fi/api/recipes?offset=${offset}&count=${this.count}`)
      .then((response) => {
        console.log(response);
        this.items = response.data;
      })
      .then(() => {
        let imgs = {};
        Object.values(this.items).forEach((item, index) => {
          imgs[index] = require("../assets/Iteration1/R" +
            ((Math.floor(Math.random() * 3) % 3) + 1).toString() +
            ".png");
        });
        this.imgs = imgs;
      });
  },
  methods: {
    update_show(index) {
      this.$set(this.show, index, !this.show[index]);
    },
    next_page(page) {
      this.$router.push({ path: '/' , query: { page: page }})
    }
  },
};
</script>
