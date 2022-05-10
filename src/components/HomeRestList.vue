<template>
  <v-row class="d-flex justify-space-around">
    <v-col
      cols="12"
      sm="12"
      md="3"
      lg="3"
      xl="3"
      v-for="item in items"
      :key="item.name"
    >
      <router-link :to="item.link">
          <rest-card
            class="rest-card"
            :overlapGroup="item.overlapGroup"
            :bestBurgers="item.bestBurgers"
            :x2030Min="item.x2030Min"
            :burgers="item.burgers"
          />
      </router-link>
    </v-col>
  </v-row>
</template>
<script>
import RestCard from "../components/RestCard";
export default {
  name: "HomeRecipeCategory",
  components: {
    RestCard
  },
  data: () => ({
    items: [
      {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/62725e767f5554a29581270f/img/rectangle-6@2x.png",
    bestBurgers: "SUSHI HUB",
    x2030Min: "5min distance",
    burgers: "Japanese food",
    link: ""
},
     {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/62725e767f5554a29581270f/img/rectangle-7@2x.png",
    bestBurgers: "Guzman y Gomez",
    x2030Min: "10min distance",
    burgers: "Mexico food",
        link: ""
},
      {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/62725e767f5554a29581270f/img/rectangle-8@2x.png",
    bestBurgers: "Ramen & Dumpling",
    x2030Min: "15min distance",
    burgers: "Chinese food",
    className: "rest",
      link: ""
},
      {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/62725e767f5554a29581270f/img/rectangle-9@2x.png",
    bestBurgers: "Kin &Gin Zero's",
    x2030Min: "20min distance",
    burgers: "Cafe",
        link: ""
},
    ],
  }),
};
</script>
<style scoped>
.home-rest-list {
  width: 80%;
}
.rest-card:hover {
  transform: scale(1.1);
}

</style>