<template>
  <div class="container-center-horizontal">
    <form class="submit-page screen" name="form1" action="form1" method="post">
      <div class="overlap-group8-3">
        <heading-bckground :src="headingBckgroundProps.src" />
        <div class="sub-title worksans-bold-white-72px">{{ subtitle }}</div>
      </div>
      <div class="overlap-group9-2">
        <img class="page-background2" :src="pagebackground2" /><img class="page-backgorund1" :src="pagebackgorund1" />
        <div class="submit-section">
          <div class="overlap-group6-4">
            <div class="submit-1 dmsans-normal-white-14px">{{ submit }}</div>
          </div>
          <div class="submit-form worksans-bold-mine-shaft-56px">{{ submitForm }}</div>
          <p class="best-for-active-free-4 dmsans-normal-mine-shaft-16px">{{ bestForActiveFree }}</p>
          <light-field-default
            :label="lightFieldDefault1Props.label"
            :inputType="lightFieldDefault1Props.inputType"
            :inputPlaceholder="lightFieldDefault1Props.inputPlaceholder"
            :className="lightFieldDefault1Props.className"
          />
          <light-field-default
            :label="lightFieldDefault2Props.label"
            :inputType="lightFieldDefault2Props.inputType"
            :inputPlaceholder="lightFieldDefault2Props.inputPlaceholder"
            :className="lightFieldDefault2Props.className"
          />
          <light-field-default
            :label="lightFieldDefault3Props.label"
            :inputType="lightFieldDefault3Props.inputType"
            :inputPlaceholder="lightFieldDefault3Props.inputPlaceholder"
            :className="lightFieldDefault3Props.className"
          />
          <div class="light-field-default">
            <light-field-dropdown3 :children="lightFieldDropdown3Props.children" />
            <div class="drop-down-filled-disabled-yes-primary">
              <div  data-id="anima-widget">
        <!-- <v-select
          :items="selects"
          class="mdc-select mdc-select--outlined demo-width-class"
          label="Restaurant Type"

          solo
        ></v-select> -->
              </div>
            </div>
          </div>
          <light-field-default
            :label="lightFieldDefault4Props.label"
            :inputType="lightFieldDefault4Props.inputType"
            :inputPlaceholder="lightFieldDefault4Props.inputPlaceholder"
            :className="lightFieldDefault4Props.className"
          />
          <light-checkbox-checked
            :checked="lightCheckboxCheckedProps.checked"
            :className="lightCheckboxCheckedProps.className"
          />
          <light-button-primary-text
            :button="lightButtonPrimaryTextProps.button"
            :className="lightButtonPrimaryTextProps.className"
          />
        </div>
        <div class="whatu-get-section">
          <div class="overlap-group-18">
            <div class="tag dmsans-normal-white-14px">{{ tag }}</div>
          </div>
          <div class="big-title-1 worksans-bold-mine-shaft-56px">{{ bigtitle }}</div>
          <p class="details dmsans-normal-mine-shaft-16px">{{ details }}</p>
          <div class="title-container worksans-bold-mine-shaft-24px">
            <div class="attention-title">{{ attentiontitle }}</div>
            <div class="new-customers-title">{{ newCustomerstitle }}</div>
            <div class="support-title">{{ supporttitle }}</div>
          </div>
          <div class="text-container dmsans-normal-mine-shaft-16px">
            <p class="attention-text">{{ attentiontext }}</p>
            <p class="x-text">{{ newcustomertext }}</p>
            <p class="x-text">{{ supporttext }}</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import HeadingBckground from "../components/HeadingBckground";
import LightFieldDefault from "../components/LightFieldDefault";
import LightFieldDropdown3 from "../components/LightFieldDropdown3";
import LightCheckboxChecked from "../components/LightCheckboxChecked";
import LightButtonPrimaryText from "../components/LightButtonPrimaryText";
import * as mdc from "material-components-web";
export default {
  name: "SubmitPage",
  data: ()=>({
    selects: [
      "Chinese food", "Sushi", "Thai food", "Mexican food"
    ]
  }),
  components: {
    HeadingBckground,
    LightFieldDefault,
    LightFieldDropdown3,
    LightCheckboxChecked,
    LightButtonPrimaryText,
  },
  props: [
    "subtitle",
    "pagebackground2",
    "pagebackgorund1",
    "submit",
    "submitForm",
    "bestForActiveFree",
    "tag",
    "bigtitle",
    "details",
    "attentiontitle",
    "newCustomerstitle",
    "supporttitle",
    "attentiontext",
    "newcustomertext",
    "supporttext",
    "headingBckgroundProps",
    "xHeaderProps",
    "lightFieldDefault1Props",
    "lightFieldDefault2Props",
    "lightFieldDefault3Props",
    "lightFieldDropdown3Props",
    "lightFieldDefault4Props",
    "lightCheckboxCheckedProps",
    "lightButtonPrimaryTextProps",
    "xFooterProps",
  ],
  mounted: () => {
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-disabled-yes-primary .mdc-select"));
  },
};
</script>

<style>
.submit-page {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2368px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.overlap-group8-3 {
  height: 212px;
  position: relative;
  width: 1440px;
}

.sub-title {
  left: 135px;
  letter-spacing: 0;
  line-height: 80px;
  position: absolute;
  top: 127px;
  white-space: nowrap;
}

.overlap-group9-2 {
  height: 1615px;
  margin-top: 71px;
  position: relative;
  width: 1440px;
}

.page-background2 {
  height: 976px;
  left: 249px;
  object-fit: cover;
  position: absolute;
  top: 639px;
  width: 941px;
}

.page-backgorund1 {
  height: 667px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1440px;
}

.submit-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 435px;
  min-height: 837px;
  position: absolute;
  top: 708px;
  width: 576px;
}

.overlap-group6-4 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  justify-content: flex-end;
  margin-right: 6px;
  min-width: 74px;
  padding: 0 12px;
}

.submit-1 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 49px;
  text-align: center;
  white-space: nowrap;
}

.submit-form {
  letter-spacing: 0;
  line-height: 64px;
  margin-right: 4px;
  margin-top: 18px;
  min-height: 64px;
  min-width: 358px;
  text-align: center;
  white-space: nowrap;
}

.best-for-active-free-4 {
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 6px;
  margin-top: 14px;
  min-height: 32px;
  text-align: center;
  white-space: nowrap;
  width: 570px;
}

.overlap-group5-6 {
  height: 84px;
  margin-right: 6px;
  margin-top: 20px;
  position: relative;
  width: 370px;
}

.drop-down-filled-disabled-yes-primary {
  height: 56px;
  left: 8px;
  position: absolute;
  top: 28px;
  width: 200px;
}

.whatu-get-section {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 167px;
  min-height: 546px;
  position: absolute;
  top: 32px;
  width: 1122px;
}

.overlap-group-18 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  margin-right: 16px;
  min-width: 90px;
  padding: 0 19px;
}

.tag {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 52px;
  text-align: center;
  white-space: nowrap;
}

.big-title-1 {
  letter-spacing: 0;
  line-height: 64px;
  margin-right: 15px;
  margin-top: 18px;
  min-height: 64px;
  min-width: 373px;
  text-align: center;
  white-space: nowrap;
}

.details {
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 15px;
  margin-top: 14px;
  min-height: 32px;
  min-width: 603px;
  text-align: center;
  white-space: nowrap;
}

.title-container {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 32px;
  margin-top: 205px;
  min-width: 896px;
}

.attention-title {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 111px;
  white-space: nowrap;
}

.new-customers-title {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 289px;
  min-height: 32px;
  min-width: 188px;
  white-space: nowrap;
}

.support-title {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 212px;
  min-height: 32px;
  white-space: nowrap;
}

.text-container {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 130px;
  margin-top: 19px;
  min-width: 1106px;
}

.attention-text {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 130px;
  width: 306px;
}

.x-text {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 94px;
  min-height: 130px;
  width: 306px;
}

.mdc-list-item {
  align-items: center;
  display: flex;
  height: 48px;
  position: relative;
}

.drop-down-filled-disabled-yes-primary .custom-enhanced-select-width {
  width: 200px;
}

.drop-down-filled-disabled-yes-primary .mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label {
  color: var(--mdc-theme-primary);
}
</style>
