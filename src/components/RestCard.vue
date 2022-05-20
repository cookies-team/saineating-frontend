<template>
  <div class="rest">
    <div
      class="overlap-group-3"
      :style="`background-image: url(${image});`"
    ></div>
    <div class="best-types worksans-bold-mine-shaft-24px">
      {{ restName }}
    </div>
    <div class="flex-row-3 ma-3 justify-end">
      <!-- <div class="x20-30-min dmsans-normal-mine-shaft-16px-2">
        {{ desc }}
      </div> -->
      <div class="types">
        <p class="dmsans-normal-mine-shaft-16px">{{ types }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestCard",
  props: ["image", "restName", "desc", "types"],
};
</script>

<style scoped>
.rest {
  align-items: flex-start;
  background-color: var(--black-haze);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.overlap-group-3 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 12px 12px 0 0;
  min-height: 14rem;
  position: relative;
  width: 100%;
}

.rectangle-5 {
  background-color: var(--apricot);
  border-radius: 8px;
  height: 48px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 92px;
}

.icon-star {
  height: 27px;
  left: 25px;
  position: absolute;
  top: 26px;
  width: 29px;
}

.text {
  left: 63px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 24px;
}

.best-types {
  letter-spacing: 0;
  line-height: 32px;
  margin-left: 24px;
  margin-top: 24px;
  min-height: 32px;
}

.flex-row-3 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  height: 32px;
  margin-top: 3px;
  min-width: 222px;
}

.x20-30-min {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 106px;
  white-space: nowrap;
}

.types {
  display: flex;
  align-self: flex-end;
}
</style>
