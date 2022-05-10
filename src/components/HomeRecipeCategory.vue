<template>
  <v-row class="home-recipe-category my-8">
    <v-col
      cols="12"
      sm="6"
      md="2"
      lg="2"
      xl="2"
      v-for="item in items"
      :key="item.name"
    >
      <router-link :to="item.link">
        <div class="home-recipes-card">
          <img class="item-icon" :src="item.icon" /><img
            class="green-circle"
            src="https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b06334c255a34e4517a0/img/oval@2x.png"
          />
          <div class="item-number dmsans-normal-white-16px">{{ item.number }}</div>

          <div class="item-name dmsans-normal-mine-shaft-20px">
            {{ item.name }}
          </div>
        </div>
      </router-link>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "HomeRecipeCategory",
  data: () => ({
    items: [
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
  }),
};
</script>
<style scoped>
.home-recipe-category {
  width: 80%;
}

.home-recipes-card {
  border-radius: 12px;
  max-height: 240px;
  position: relative;
  max-width: 170px;

  background-color: var(--black-haze);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.home-recipes-card:hover {
  background-color: #f49b3f;
  transform: scale(1.1);
}

.item-icon {
  max-width: 80%;
  flex: 80%;

  margin: 1rem;
  align-content: center;
  align-items: center;
  align-self: center;
}

.item-name {
  align-content: center;
  align-items: bottom;
  align-self: center;
  text-align: center;
  padding-bottom: 1rem;
}

.green-circle {
  position: absolute;
  right: 8%;
  top: 8%;
  height: 16%;
  z-index: 1;
}

.item-number {
  position: absolute;
  right: 12%;
  top: 10%;
  z-index: 2;
}



</style>