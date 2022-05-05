<template>
  <div class="container-center-horizontal">
    <div class="about-page screen">
      <div class="overlap-group7-2">
        <heading-bckground :src="headingBckgroundProps.src" />
        <div class="about-page-title worksans-bold-white-72px">{{ aboutpagetitle }}</div>
      </div>
      <div class="overlap-group8-1">
        <img class="page-background" :src="pagebackground" />
        <div class="who-we-are">
          <div class="overlap-group4-2">
            <div class="tag2 dmsans-normal-white-14px">{{ tag2 }}</div>
          </div>
          <div class="title2 worksans-bold-mine-shaft-56px">{{ title2 }}</div>
          <p class="details2 dmsans-normal-mine-shaft-16px">{{ details2 }}</p>
          <img class="team-photo-1" :src="teamPhoto1" />
        </div>
        <div class="why-we-do">
          <div class="overlap-group5-3">
            <div class="tag1 dmsans-normal-white-14px">{{ tag1 }}</div>
          </div>
          <div class="title1 worksans-bold-mine-shaft-56px">{{ title1 }}</div>
          <p class="details1 dmsans-normal-mine-shaft-16px">{{ details1 }}</p>
          <div class="pra1 worksans-normal-mine-shaft-24px" v-html="pra1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingBckground from "../components/HeadingBckground";
export default {
  name: "AboutPage",
  components: {
    HeadingBckground,

  },
  props: [
    "aboutpagetitle",
    "pagebackground",
    "tag2",
    "title2",
    "details2",
    "teamPhoto1",
    "tag1",
    "title1",
    "details1",
    "pra1",
    "headingBckgroundProps",
    "xHeaderProps",
    "xFooterProps",
  ],
};
</script>

<style>
.about-page {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 2227px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.overlap-group7-2 {
  height: 212px;
  margin-left: 0;
  position: relative;
  width: 1440px;
}

.about-page-title {
  left: 127px;
  letter-spacing: 0;
  line-height: 80px;
  position: absolute;
  top: 132px;
  white-space: nowrap;
}

.overlap-group8-1 {
  height: 1521px;
  margin-top: 75px;
  position: relative;
  width: 1440px;
}

.page-background {
  height: 1297px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 224px;
  width: 1440px;
}

.who-we-are {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 298px;
  min-height: 673px;
  position: absolute;
  top: 674px;
  width: 868px;
}

.overlap-group4-2 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 32px;
  margin-right: 6px;
  min-width: 90px;
  padding: 0 29px;
}

.tag2 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 32px;
  text-align: center;
  white-space: nowrap;
}

.title2 {
  letter-spacing: 0;
  line-height: 64px;
  margin-right: 6px;
  margin-top: 18px;
  min-height: 64px;
  min-width: 334px;
  text-align: center;
  white-space: nowrap;
}

.details2 {
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 6px;
  margin-top: 14px;
  min-height: 32px;
  min-width: 346px;
  text-align: center;
  white-space: nowrap;
}

.team-photo-1 {
  height: 433px;
  margin-right: 6px;
  margin-top: 80px;
  object-fit: cover;
  width: 862px;
}

.why-we-do {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 143px;
  min-height: 583px;
  position: absolute;
  top: 0;
  width: 1193px;
}

.overlap-group5-3 {
  align-items: flex-start;
  background-color: var(--fern);
  border-radius: 8px;
  display: flex;
  height: 50px;
  margin-right: 26.32px;
  min-width: 92px;
  padding: 0 29.5px;
}

.tag1 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 50px;
  text-align: center;
  width: 33px;
}

.title1 {
  letter-spacing: 0;
  line-height: 64px;
  margin-right: 26.32px;
  margin-top: 28px;
  min-height: 100px;
  text-align: center;
  width: 340px;
}

.details1 {
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 26.32px;
  margin-top: 22px;
  min-height: 50px;
  text-align: center;
  width: 352px;
}

.pra1 {
  letter-spacing: 0;
  line-height: 32px;
  margin-right: 8px;
  margin-top: 56px;
  min-height: 277px;
  width: 1185px;
}
</style>
