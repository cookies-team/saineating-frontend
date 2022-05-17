<template>
  <div class="container-center-horizontal">
    <div class="recipe-page screen">
      <heading-bckground :src="headingBckgroundProps.src" :title="pageTitle" />
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
                v-for="type in types"
                :key="type.TypeId"
                v-model="selectedTypes"
                :label="type.TypeName"
                :value="type.TypeId"
                hide-details
              ></v-checkbox>
            </div>

            <div class="allergy my-4">
              <div class="filter-label dmsans-bold-mine-shaft-12px">
                ALLERGY
              </div>
              <v-checkbox
                class="ma-0"
                v-for="allergy in allergies"
                :key="allergy.IngredientId"
                v-model="selectedAllergies"
                :label="allergy.IngredientName"
                :value="allergy.IngredientId"
                hide-details
              ></v-checkbox>
            </div>

            <div class="slider-filters">
              <div class="filter-label dmsans-bold-mine-shaft-12px">
                CALORIE LEVEL
              </div>
              <v-slider
                class="mt-8"
                v-model="maxCal"
                :thumb-size="24"
                thumb-label="always"
                style="width: 100%"
                thumb-color="green"
                color="green"
                track-color="fern"
              />
              <div class="filter-label dmsans-bold-mine-shaft-12px">AGE</div>
              <v-slider
                class="mt-8"
                v-model="minAge"
                :thumb-size="24"
                max="10"
                min="5"
                thumb-label="always"
                style="width: 100%"
                thumb-color="green"
                color="fern"
                track-color="green"
              />
            </div>

            <v-btn
              color="green px-6 py-5"
              dark
              style="font-style: italic"
              elevation="0"
              @click="update"
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
                :id="item.RecipeId"
                :name="item.RecipeName"
                :img="item.imgsrc"
                :types="item.TypeNames"
                shortDesc=""
                :cookingTime="item.CookingTime"
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
    sortOptions: ["id", "alphabet", "calorie"],
    sort: "id",
    allergies: [],
    selectedAllergies: [],
    predefinedAllergyIds: [84, 24, 49, 10, 56, 35, 41, 20],
    page: null,
    pages: null,
    count: 9, //12,
    selectedTypes: [],
    items: [],
    types: [],
    totalCount: 0,
    minAge: 0,
    maxCal: 100,
  }),
  beforeMount() {
    if (this.$route.params.types && this.selectedTypes.length == 0)
      this.selectedTypes.push(this.$route.params.types);
  },
  mounted() {
    console.log(this.$route.query);
    this.page = parseInt(this.$route.query.page) || 1;

    // load predefined allergies
    this.axios
      .get(
        this.$hostname +
          `/apiv3/ingredients?ids=${this.predefinedAllergyIds.join(",")}`
      )
      .then((response) => {
        console.log(response);
        this.allergies = response.data;
      });

    // load all types
    this.axios.get(this.$hostname + "/apiv3/recipes/types").then((response) => {
      console.log(response);
      this.types = response.data;
    });

    this.getCount().then((response) => {
      console.log(response);
      this.totalCount = response.data.count;
    });

    this.getRecipes().then((response) => {
      console.log(response);

      response.data.forEach((item) => {
        if (item) {
          item.imgsrc = require("../assets/Iter2/Recipes/RecipeId" +
            item.RecipeId +
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
    getCount() {
      return this.axios.get(this.$hostname + `/apiv3/recipes/count`, {
        params: {
          types: this.selectedTypes.join(","),
          allergies: this.selectedAllergies.join(","),
          min_age: this.minAge,
          max_cal: this.maxCal,
        },
      });
    },
    getRecipes() {
      const offset = (this.page - 1) * this.count;
      return this.axios.get(this.$hostname + `/apiv3/recipes`, {
        params: {
          offset: offset,
          count: this.count,
          types: this.selectedTypes.join(","),
          allergies: this.selectedAllergies.join(","),
          min_age: this.minAge,
          max_cal: this.maxCal,
        },
      });
    },
    update() {
      this.getRecipes().then((response) => {
        console.log(response);
        const items = [];
        response.data.forEach((item) => {
          if (item) {
            item.imgsrc = require("../assets/Iter2/Recipes/RecipeId" +
              item.RecipeId +
              ".png");
            items.push(item);
          }
        });

        this.items = items;
      });
      this.getCount().then((response) => {
        this.totalCount = response.data.count;
      });
    },
  },
  watch: {
    totalCount: function (val) {
      this.pages = (1 + val / this.count) >> 0;
    },
    selectedTypes: function () {
      this.update();
    },
    selectedAllergies: function () {
      this.update();
    },
    minAge: function () {
      console.log("minAge changed", this.minAge);
      this.update();
    },
    maxCal: function () {
      console.log("maxCal changed", this.maxCal);
      this.update();
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
