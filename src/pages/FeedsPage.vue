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
        sm="12"
        md="6"
        lg="6"
        xl="6"
        v-for="(item, index) in items"
        :key="item.RecipeID"
      >
        <v-card elevation="2" shaped class="mx-auto my-6">
          <!-- <v-img height="250" :src="imgs[index]"></v-img> -->

          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.creator }} on {{ Date(item.isoDate) }}  </v-card-subtitle>
          <v-card-text>
            <div class="my-4 grey--text" v-html="item.contentSnippet"></div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Categories</v-card-title>

          <v-card-text>
            <v-chip-group column>
              <v-chip
                small
                v-for="category in item.categories"
                :key="category"
                >{{ category.trim() }}</v-chip
              >
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-2 right"
              text
              :href="item['link']"
              target="_blank"
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

              <v-card-text class="rawcontent" v-html="item['content:encoded']">
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
  </v-container>
</template>

<script>
export default {
  name: "FeedsPage",
  data: () => ({
    page: 1,
    pages: 1,
    count: 12,
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
      .get("https://www.saineating.ngx.fi/apiv2/feeds/count")
      .then((response) => {
        console.log(response);
        this.pages = (1 + response.data.count / this.count) >> 0;
      });
        const offset = (this.page - 1) * 12;
    this.axios
      .get(`https://www.saineating.ngx.fi/apiv2/feeds?offset=${offset}&count=${this.count}`)
      .then((response) => {
        console.log(response);
        this.items = response.data.items;
        // let imgs = {};
        // Object.values(this.items).forEach((item, index) => {
        //   imgs[index] = response.data.image.link; // invalid due to src CORS
        // });
        // this.imgs = imgs;
      });
  },
  methods: {
    update_show(index) {
      this.$set(this.show, index, !this.show[index]);
    },
    next_page(page) {
      this.$router.push({ path: "/feeds/", query: { page: page } });
    },
  },
};
</script>
<style scoped>
.rawcontent >>> img {
  max-width: 100%;
  height: auto;
}
</style>