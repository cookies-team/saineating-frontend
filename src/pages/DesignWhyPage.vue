<template>
  <div class="container-center-horizontal">
    <div class="why-page screen">
      <div class="head-container">
        <heading-bckground :src="headingBckgroundProps.src" />
      </div>
      <div class="main-pic"><img class="fatkid" :src="fatkid" /></div>
      <div class="cause">
        <div class="cause-1 worksans-bold-mine-shaft-72px">{{ cause }}</div>
        <p class="apparently-we-had-re dmsans-normal-mine-shaft-16px">{{ apparentlyWeHadRe1 }}</p>
        <div class="video">
          <iframe
            style="border: 0; pointer-events: auto"
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/CUPBU_mJUtA?rel=0&mute=1&autoplay=1"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
      </div>
      <div class="healthy-for-child">
        <div class="heathy-for-child worksans-bold-mine-shaft-72px">{{ heathyforchild }}</div>
        <p class="apparently-we-had-re dmsans-normal-mine-shaft-16px">{{ apparentlyWeHadRe2 }}</p>
        <div class="video">
          <iframe
            style="border: 0; pointer-events: auto"
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/a-084pqI05U?rel=0&mute=1&autoplay=1"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
      </div>
      <x-footer :className="xFooterProps.className" :group17Props="xFooterProps.group17Props" />
    </div>
  </div>
</template>

<script>
import HeadingBckground from "../components/HeadingBckground";
export default {
  name: "WhyPage",
  components: {
    HeadingBckground,
  },
  props: [
    "fatkid",
    "cause",
    "apparentlyWeHadRe1",
    "heathyforchild",
    "apparentlyWeHadRe2",
    "headingBckgroundProps",
    "xHeaderProps",
    "xFooterProps",
  ],
};
</script>

<style>
.why-page {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 3600px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.head-container {
  height: 212px;
  margin-right: 0;
  position: relative;
  width: 1440px;
}

.main-pic {
  align-items: flex-start;
  background-color: var(--mist-gray);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 1px;
  margin-top: 111px;
}

.fatkid {
  height: 520px;
  object-fit: cover;
  width: 1085px;
}

.cause {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 47px;
  margin-right: 8px;
  margin-top: 136px;
}

.cause-1,
.heathy-for-child {
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
}

.apparently-we-had-re {
  height: 101px;
  letter-spacing: 0;
  line-height: 32px;
  width: 770px;
}

.video {
  height: 652px;
  width: 1001px;
}

.healthy-for-child {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 47px;
  margin-right: 85px;
  margin-top: 92px;
}
</style>
