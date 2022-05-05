<template>
  <div class="container-center-horizontal">
    <div class="recipe-page screen">
      <div class="overlap-group11-1">
        <heading-bckground :src="headingBckgroundProps.src" />
        <div class="page-title worksans-bold-white-72px">{{ pageTitle }}</div>
      </div>
      <div class="flex-row-4">
        <div class="overlap-group9-1">
          <light-field-dropdown
            :label="lightFieldDropdown1Props.label"
            :placeholder="lightFieldDropdown1Props.placeholder"
            :className="lightFieldDropdown1Props.className"
          />
          <div class="categories-1 dmsans-bold-mine-shaft-12px">{{ categories }}</div>
          <div class="flex-row-5">
            <light-checkbox-unchecked :children="lightCheckboxUnchecked1Props.children" />
            <div class="number-4 dmsans-normal-mine-shaft-16px">{{ number1 }}</div>
          </div>
          <div class="flex-row-2">
            <light-checkbox-unchecked
              :children="lightCheckboxUnchecked2Props.children"
              :className="lightCheckboxUnchecked2Props.className"
            />
            <div class="number-4 dmsans-normal-mine-shaft-16px">{{ number2 }}</div>
          </div>
          <div class="flex-row-2">
            <light-checkbox-checked :checked="lightCheckboxCheckedProps.checked" />
            <div class="number-4 dmsans-normal-mine-shaft-16px">{{ number3 }}</div>
          </div>
          <div class="flex-row-2">
            <light-checkbox-unchecked
              :children="lightCheckboxUnchecked3Props.children"
              :className="lightCheckboxUnchecked3Props.className"
            />
            <div class="number-4 dmsans-normal-mine-shaft-16px">{{ number4 }}</div>
          </div>
          <div class="flex-row-2">
            <light-checkbox-unchecked
              :children="lightCheckboxUnchecked4Props.children"
              :className="lightCheckboxUnchecked4Props.className"
            />
            <div class="number-4 dmsans-normal-mine-shaft-16px">{{ number5 }}</div>
          </div>
          <div class="flex-row-2">
            <light-checkbox-unchecked
              :children="lightCheckboxUnchecked5Props.children"
              :className="lightCheckboxUnchecked5Props.className"
            />
            <div class="number-4 dmsans-normal-mine-shaft-16px">{{ number6 }}</div>
          </div>
          <light-field-dropdown
            :label="lightFieldDropdown2Props.label"
            :placeholder="lightFieldDropdown2Props.placeholder"
            :className="lightFieldDropdown2Props.className"
          />
          <div class="calorie-slder">
            <div class="disance-km dmsans-bold-mine-shaft-12px">{{ disanceKm }}</div>
            <div class="overlap-group3-9">
              <div class="rectangle-15"></div>
              <img
                class="oval-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b0cb73a4a391408a970f/img/oval-6@2x.png"
              />
              <div class="number-8 dmsans-normal-white-16px">{{ number7 }}</div>
            </div>
          </div>
          <div class="age-group-title dmsans-bold-mine-shaft-12px">{{ agegrouptitle }}</div>
          <div class="overlap-group4-4 dmsans-normal-white-16px">
            <div class="rectangle-15"></div>
            <div class="rectangle-16"></div>
            <img class="oval-3" :src="oval2" />
            <div class="x20">{{ x20 }}</div>
            <img class="oval-4" :src="oval3" />
            <div class="x150">{{ x150 }}</div>
          </div>
          <br />
          <light-button-primary-text
            :button="lightButtonPrimaryTextProps.button"
            :className="lightButtonPrimaryTextProps.className"
          />
          <div class="restaurants-found worksans-bold-mine-shaft-24px">{{ restaurantsFound1 }}</div>
          <div class="restaurants-found-1 worksans-bold-mine-shaft-24px">{{ restaurantsFound2 }}</div>
        </div>
        <div class="all-recipes">
          <div class="recipes-container">
            <RecipeList recipeID=1 />
            <RecipeList recipeID=2 :className="recipes1Props.className" />
            <RecipeList recipeID=3 :className="recipes2Props.className" />
          </div>
          <div class="recipes-container-1">
            <RecipeList recipeID=4 />
            <RecipeList recipeID=5 :className="recipes3Props.className" />
            <RecipeList recipeID=6 :className="recipes4Props.className" />
          </div>
          <div class="recipes-container-2">
            <RecipeList recipeID=7 />
            <RecipeList recipeID=8 :className="recipes5Props.className" />
            <RecipeList recipeID=9 :className="recipes6Props.className" />
          </div>
        </div>
      </div>
      <div class="page-nav">
        <div class="left-btn">
          <div class="overlap-group-13">
            <light-button-primary-icon />
            <img class="arrow-2" :src="arrow1" />
          </div>
        </div>
        <div class="page-no-1">
          <div class="page-no1 dmsans-normal-mine-shaft-16px-2">{{ pageno1 }}</div>
          <div class="page-no dmsans-normal-mine-shaft-16px">{{ pageno2 }}</div>
          <div class="page-no3 dmsans-normal-mine-shaft-16px">{{ pageno3 }}</div>
          <div class="page-no dmsans-normal-mine-shaft-16px">{{ pageno4 }}</div>
        </div>
        <div class="right-btn">
          <div class="overlap-group-13">
            <light-button-primary-icon />
            <img class="arrow-3" :src="arrow2" />
          </div>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" :group17Props="xFooterProps.group17Props" />
    </div>
  </div>
</template>

<script>
import HeadingBckground from "../components/HeadingBckground";
import LightFieldDropdown  from "../components/LightFieldDropdown";
import LightCheckboxUnchecked from "../components/LightCheckboxUnchecked";
import LightCheckboxChecked from "../components/LightCheckboxChecked";
import LightButtonPrimaryText from "../components/LightButtonPrimaryText";
import RecipeList from "../components/RecipeList";
import LightButtonPrimaryIcon  from "../components/LightButtonPrimaryIcon";

export default {
  name: "RecipePage",
  components: {
    HeadingBckground,
    LightFieldDropdown,
    LightCheckboxUnchecked,
    LightCheckboxChecked,
    LightButtonPrimaryText,
    RecipeList,
    LightButtonPrimaryIcon,
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
};
</script>

<style>
.recipe-page {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2202px;
  position: relative;
  width: 1440px;
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

.overlap-group9-1 {
  align-items: center;
  background-color: var(--black-haze);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  min-height: 960px;
  padding: 4px 8px;
  position: relative;
  width: 258px;
}

.categories-1 {
  align-self: flex-start;
  letter-spacing: 0;
  margin-left: 16px;
  margin-top: 36px;
  min-height: 16px;
}

.flex-row-5 {
  align-items: center;
  display: flex;
  height: 32px;
  margin-right: 4px;
  margin-top: 7px;
  width: 222px;
  position: relative;
}

.number-4 {
  margin-left: auto;
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 0px;
  min-height: 32px;
  min-width: 19px;
  text-align: right;
  white-space: nowrap;
}

.flex-row-2 {
  align-items: center;
  display: flex;
  height: 32px;
  margin-right: 4px;
  width: 222px;
  position: relative;
}

.number-5 {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 119px;
  min-height: 32px;
  min-width: 20px;
  text-align: right;
  white-space: nowrap;
}

.number-6 {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 124px;
  min-height: 32px;
  min-width: 15px;
  text-align: right;
  white-space: nowrap;
}

.number-7 {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 129px;
  min-height: 32px;
  min-width: 10px;
  text-align: right;
  white-space: nowrap;
}

.calorie-slder {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  min-height: 68px;
  width: 226px;
}

.disance-km {
  letter-spacing: 0;
  min-height: 16px;
}

.overlap-group3-9 {
  height: 40px;
  margin-top: 12px;
  position: relative;
  width: 222px;
}

.rectangle-15 {
  background-color: var(--gray-nurse);
  border-radius: 8px;
  height: 8px;
  left: 0;
  position: absolute;
  top: 16px;
  width: 222px;
}

.oval-2 {
  height: 40px;
  left: 45px;
  position: absolute;
  top: 0;
  width: 40px;
}

.number-8 {
  left: 55px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 4px;
  white-space: nowrap;
}

.age-group-title {
  align-self: flex-start;
  letter-spacing: 0;
  margin-left: 16px;
  margin-top: 44px;
  min-height: 16px;
}

.overlap-group4-4 {
  height: 40px;
  margin-right: 4px;
  margin-top: 12px;
  position: relative;
  width: 222px;
}

.rectangle-16 {
  background-color: #b0dcaa;
  border-radius: 8px;
  height: 8px;
  left: 40px;
  position: absolute;
  top: 16px;
  width: 102px;
}

.oval-3 {
  height: 40px;
  left: 29px;
  position: absolute;
  top: 0;
  width: 40px;
}

.x20 {
  left: 44px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 4px;
  white-space: nowrap;
}

.oval-4 {
  height: 40px;
  left: 125px;
  position: absolute;
  top: 0;
  width: 40px;
}

.x150 {
  left: 138px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 4px;
  white-space: nowrap;
}

.restaurants-found {
  align-self: center;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 1px;
  margin-top: 64px;
  min-height: 32px;
  min-width: 15px;
  white-space: nowrap;
}

.restaurants-found-1 {
  align-self: center;
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 7px;
  margin-top: 26px;
  min-height: 32px;
  min-width: 169px;
  white-space: nowrap;
}

.all-recipes {
  align-items: flex-start;
  display: flex;
  height: 1312px;
  margin-left: 42px;
  min-width: 872px;
}

.recipes-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1312px;
  position: relative;
  width: 270px;
}

.recipes-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  min-height: 1312px;
  position: relative;
  width: 270px;
}

.recipes-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  min-height: 1312px;
  position: relative;
  width: 270px;
}

.page-nav {
  align-items: center;
  display: flex;
  margin-left: 300px;
  margin-top: 48px;
  min-width: 238px;
}

.left-btn {
  align-items: flex-start;
  display: flex;
  min-width: 48px;
}

.overlap-group-13 {
  border-radius: 24px;
  height: 48px;
  position: relative;
  width: 48px;
}

.arrow-2 {
  height: 23px;
  left: 17px;
  position: absolute;
  top: 12px;
  width: 13px;
}

.page-no-1 {
  align-items: flex-start;
  display: flex;
  height: 32px;
  margin-left: 24px;
  margin-top: 2px;
  min-width: 104px;
}

.page-no1 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 5px;
  text-align: center;
  white-space: nowrap;
}

.page-no {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 20px;
  min-height: 32px;
  min-width: 10px;
  text-align: center;
  white-space: nowrap;
}

.page-no3 {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 21px;
  min-height: 32px;
  min-width: 10px;
  text-align: center;
  white-space: nowrap;
}

.right-btn {
  align-items: flex-start;
  display: flex;
  margin-left: 14px;
  min-width: 48px;
}

.arrow-3 {
  height: 23px;
  left: 18px;
  position: absolute;
  top: 12px;
  width: 13px;
}
</style>
