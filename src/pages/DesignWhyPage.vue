<template>
  <div class="why-page screen">
    <heading-bckground
      :src="headingBckgroundProps.src"
      title="Why Healthy Eating"
    />

    <div class="main-pic mt-8"><img class="fatkid" :src="fatkid" /></div>
    <v-container class="px-16 my-16">
      <h1 class="worksans-bold-mine-shaft-72px">
        What cause Childhood obesity
      </h1>
      <v-card-text class="dmsans-normal-mine-shaft-20px">
        The following short video illustrates the main causes of childhood
        obesity. It lists causes that include mainly dietary problems, which
        shows the important role that a healthy diet plays in this. From
        YouTube.
      </v-card-text>
      <div class="video">
        <iframe
          style="border: 0; pointer-events: auto"
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/CUPBU_mJUtA?rel=0&mute=1&autoplay=0"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </div>
    </v-container>
    <v-container class="px-16 my-16">
      <h1 class="worksans-bold-mine-shaft-72px">Healthy Eating for Children</h1>
      <p class="dmsans-normal-mine-shaft-20px">
        The following block is an educational video for children to learn what
        it means to have healthy eating habits. From YouTube.
      </p>
      <div class="video">
        <iframe
          style="border: 0; pointer-events: auto"
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/a-084pqI05U?rel=0&mute=1&autoplay=0"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </div>
    </v-container>
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
  overflow: hidden;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.head-container {
  margin-right: 0;
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.main-pic {
  align-items: flex-start;
  background-color: var(--mist-gray);
  display: flex;
  flex-direction: column;
}

.fatkid {
  height: 520px;
  object-fit: cover;
  max-width: 1440px;
  width: 100%;
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
  max-width: 1440px;
  width: 100%;
}

.video {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.video iframe,
.video object,
.video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
