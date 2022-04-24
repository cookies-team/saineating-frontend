<template>
  <v-container>
    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(pic, i) in pics"
        :key="i"
        :src="pic.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- <v-skeleton-loader
      class="mx-auto"
      v-bind="attrs"
      type="table-heading, list-item-three-line, list-item-three-line, list-item-three-line, table-tfoot, actions"
    ></v-skeleton-loader> -->

    <v-card class="mx-auto" tile>
      <v-card-title>Recipe: {{ food.name }}</v-card-title>
      <v-list-item v-for="(value, key, index) in food" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ key }}</v-list-item-title>
          <v-list-item-subtitle v-if="key != 'variants'">{{
            value
          }}</v-list-item-subtitle>
          <v-list-item v-if="key == 'variants'">
            <v-list-item-content v-for="(variant, index) in value" :key="index">
              <div v-for="(value, key) in variant" :key="key">
                <v-list-item-title>{{ key }}</v-list-item-title>
                <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "RecipePage",
  components: {},
  data() {
    return {
      attrs: {
        boilerplate: true,
        elevation: 2,
      },
      food: null,
      pics: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  mounted() {
    const bfk = this.$route.params.id;
    const url = `https://www.saineating.ngx.fi/api/recipe/id/${bfk}`;
    this.axios.get(url).then((response) => {
      console.log(response);
      this.food = response.data;
    });
    // }).then(()=>{
    //   let imgs = {}
    //   console.log(this.items)
    //   Object.values(this.items).forEach((item)=> {
    //     imgs[item['Food Name']] = require("../assets/Iteration1/R"+(Math.floor(Math.random() * 3) % 3+1).toString()+".png")
    //   })
    //   this.imgs = imgs
    // });
  },
};
</script>

