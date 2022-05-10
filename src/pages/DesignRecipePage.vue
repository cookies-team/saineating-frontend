<template>
  <div class="container-center-horizontal">
    <div class="recipe-page screen">
      <div class="overlap-group11-1">
        <heading-bckground
          :src="headingBckgroundProps.src"
          :title="pageTitle"
        />
      </div>
      <v-row class="my-8" style="width: 100%">
        <v-col cols="0" sm="3" class="d-flex-none d-sm-flex flex-column my-8">
          <div class="filter-panel ma-1">
            <div>
              <v-select
                label="Select"
                :items="sortOptions"
                v-model="sort"
                :hint="`Sort by ${sort}`"
                solo
                flat
                persistent-hint
              ></v-select>
            </div>

            <div class="type-checkbox">
              <div class="filter-label dmsans-bold-mine-shaft-12px">
                CATEGORIES
              </div>
              <v-checkbox
                class="ma-0"
                v-model="selected"
                label="Breakfast"
                value="breakfast"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="ma-0"
                v-model="selected"
                label="Lunch"
                value="lunch"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="ma-0"
                v-model="selected"
                label="Dinner"
                value="dinner"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="ma-0"
                v-model="selected"
                label="Vegetarian"
                value="vegetarian"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="ma-0"
                v-model="selected"
                label="Asian"
                value="asian"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="ma-0"
                v-model="selected"
                label="Dessert"
                value="dessert"
                hide-details
              ></v-checkbox>
            </div>

            <div class="allergy my-4">
              <div class="filter-label dmsans-bold-mine-shaft-12px">
                ALLERGY
              </div>
              <v-select
                label="Select"
                :items="allergyOptions"
                v-model="allergy"
                :hint="`Exclude ${allergy} recipes`"
                solo
                flat
                persistent-hint
              ></v-select>
            </div>

            <div class="slider-filters">
              <div class="filter-label dmsans-bold-mine-shaft-12px">
                CALORIE LEVEL
              </div>
              <v-slider
                class="mt-8"
                value="20"
                step="10"
                :thumb-size="24"
                thumb-label="always"
                style="width: 100%"
                thumb-color="green"
                color="green"
                track-color="fern"
              />
              <div class="filter-label dmsans-bold-mine-shaft-12px">
                AGE GROUP
              </div>
              <v-range-slider
                class="mt-8"
                step="10"
                :value="ageRange"
                :thumb-size="24"
                thumb-label="always"
                style="width: 100%"
                thumb-color="green"
                color="green"
                track-color="fern"
              />
            </div>

            <v-btn
              color="green px-6 py-5"
              dark
              style="font-style: italic"
              elevation="0"
            >
              Filter <br />
              Recipe</v-btn
            >
          </div>
        </v-col>
        <v-col class="right" cols="12" sm="9">
          <v-row class="all-recipes my-4">
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="item in items"
              :key="item.recipeId"
            >
              <RecipeList
                :id="item.id"
                :name="item.name"
                :img="item.imgsrc"
                :types="item.types"
                shortDesc="short desc"
              />
            </v-col>
          </v-row>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="pages"
              :total-visible="7"
              circle
              color="green"
              @input="next_page"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HeadingBckground from "../components/HeadingBckground";
import RecipeList from "../components/RecipeListItem";

export default {
  name: "RecipePage",
  components: {
    HeadingBckground,
    RecipeList,
  },
  props: [
    "pageTitle",
    "categories",
    "number1",
    "number2",
    "number3",
    "number4",
    "number5",
    "number6",
    "disanceKm",
    "number7",
    "agegrouptitle",
    "oval2",
    "x20",
    "oval3",
    "x150",
    "restaurantsFound1",
    "restaurantsFound2",
    "arrow1",
    "pageno1",
    "pageno2",
    "pageno3",
    "pageno4",
    "arrow2",
    "headingBckgroundProps",
    "xHeaderProps",
    "lightFieldDropdown1Props",
    "lightCheckboxUnchecked1Props",
    "lightCheckboxUnchecked2Props",
    "lightCheckboxCheckedProps",
    "lightCheckboxUnchecked3Props",
    "lightCheckboxUnchecked4Props",
    "lightCheckboxUnchecked5Props",
    "lightFieldDropdown2Props",
    "lightButtonPrimaryTextProps",
    "recipes1Props",
    "recipes2Props",
    "recipes3Props",
    "recipes4Props",
    "recipes5Props",
    "recipes6Props",
    "xFooterProps",
  ],
  data: () => ({
    ageRange: [0, 100],
    sortOptions: ["popularity", "calorie"],
    sort: "popularity",
    allergyOptions: ["all", "milk"],
    allergy: "all",
    page: null,
    pages: null,
    count: 9, //12,
    selected: [],
    items: [],
  }),
  mounted() {
    console.log(this.$route.query);
    this.page = parseInt(this.$route.query.page) || 1;

    this.axios
      .get(this.$hostname + "/apiv2/recipes_v2/count")
      .then((response) => {
        console.log(response);
        this.pages = (1 + response.data.count / this.count) >> 0;
      });

    const offset = (this.page - 1) * this.count;
    this.axios
      .get(
        this.$hostname +
          `/apiv2/recipes_v3?offset=${offset}&count=${this.count}`
      )
      .then((response) => {
        console.log(response);

        response.data.forEach((item) => {
          if (item) {
            item.imgsrc = require("../assets/Iter2/Recipes/RecipeId" +
              item.id +
              ".png");
            this.items.push(item);
          }
        });
      });
  },
  methods: {
    next_page(page) {
      this.$router.push({ path: "/res", query: { page: page } });
    },
  },
};
</script>

<style>
.recipe-page {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.overlap-group11-1 {
  height: 212px;
  position: relative;
  width: 1440px;
}

.page-title {
  left: 135px;
  letter-spacing: 0;
  line-height: 80px;
  position: absolute;
  top: 127px;
  white-space: nowrap;
}

.flex-row-4 {
  align-items: flex-start;
  display: flex;
  margin-left: 2px;
  margin-top: 140px;
  min-width: 1172px;
}

.filter-panel {
  align-items: center;
  background-color: var(--black-haze);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 1vw;
}

.categories-1 {
  align-self: flex-start;
  letter-spacing: 0;
  margin-left: 16px;
  margin-top: 36px;
  min-height: 16px;
}

.type-checkbox {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 68px;
  width: 100%;
}

.slider-filters,
.allergy {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 68px;
  width: 100%;
}
</style>
