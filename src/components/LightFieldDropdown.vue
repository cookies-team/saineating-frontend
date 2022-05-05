<template>
  <div :class="[`dropdown-list`, className || ``]">
    <div class="side-bar dmsans-bold-mine-shaft-12px">{{ label }}</div>
    <div class="overlap-group-15 border-1px-alto">
      <div class="hit dmsans-normal-mine-shaft-16px">{{ placeholder }}</div>
      <img
        class="dropdown"
        src="https://anima-uploads.s3.amazonaws.com/projects/6270b051e7f834ba80d02b2b/releases/6270b0cb73a4a391408a970f/img/triangle-1@2x.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LightFieldDropdown",
  props: ["label", "placeholder", "className"],
};
</script>

<style>
.dropdown-list {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 76px;
  width: 158px;
}

.side-bar {
  letter-spacing: 0;
  min-height: 16px;
}

.overlap-group-15 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  height: 48px;
  margin-top: 12px;
  min-width: 158px;
  padding: 7px 15px;
}

.hit {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 32px;
  min-width: 108px;
  white-space: nowrap;
}

.dropdown {
  align-self: center;
  height: 6px;
  margin-bottom: 2px;
  margin-left: 8px;
  width: 10px;
}

.dropdown-list.light-field-default-5 {
  margin-right: 4px;
  width: 222px;
}

.dropdown-list.light-field-default-5 .overlap-group-15,
.dropdown-list.light-field-default-6 .overlap-group-15 {
  min-width: 222px;
}

.dropdown-list.light-field-default-5 .hit {
  min-width: 132px;
}

.dropdown-list.light-field-default-5 .dropdown {
  margin-left: 48px;
}

.dropdown-list.light-field-default-6 {
  margin-right: 4px;
  margin-top: 41px;
  width: 222px;
}

.dropdown-list.light-field-default-6 .hit {
  min-width: 29px;
}

.dropdown-list.light-field-default-6 .dropdown {
  margin-left: 151px;
}
</style>
