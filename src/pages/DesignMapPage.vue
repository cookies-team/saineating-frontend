<template>
  <div class="container-center-horizontal">
    <div class="map-page screen">
      <div class="overlap-group8-2">
        <heading-bckground :src="headingBckgroundProps.src" />
        <div class="restaurants-map worksans-bold-white-72px">{{ restaurantsMap }}</div>
        <x-header :logo="xHeaderProps.logo" :xHeader2Props="xHeaderProps.xHeader2Props" />
      </div>
      <div class="map-function">
        <div class="overlap-group4-3">
          <div class="rectangle-14"></div>
          <div class="selector">
            <light-field-dropdown
              :label="lightFieldDropdownProps.label"
              :placeholder="lightFieldDropdownProps.placeholder"
            />
            <div class="confirm">
              <div class="confirm-container">
                <light-button-primary-icon />
                <div class="confirm-shape" :style="{ 'background-image': 'url(' + confirmshape + ')' }"></div>
              </div>
            </div>
          </div>
          <div class="rest-info">
            <div  @click="goRest(0)">
            <MapRest @click="goRest(0)"
              :restContainer="rest11Props.restContainer"
              :restname1="rest11Props.restname1"
              :resttype1="rest11Props.resttype1"
            />
            </div>
            <div class="rest2"  @click="goRest(1)">
              <div class="rest-container-1" :style="{ 'background-image': 'url(' + restContainer1 + ')' }">
                <div class="rest-name2 worksans-bold-white-24px">{{ restname2 }}</div>
                <div class="rest-type2 dmsans-normal-white-16px">{{ resttype2 }}</div>
              </div>
            </div>
            <div  @click="goRest(2)">
            <MapRest @click="goRest(2)"
              :restContainer="rest12Props.restContainer"
              :restname1="rest12Props.restname1"
              :resttype1="rest12Props.resttype1"
              :className="rest12Props.className"
            />
            </div>
            <div class="rest4-1" @click="goRest(3)">
              <div class="rest-container-2"  :style="{ 'background-image': 'url(' + restContainer2 + ')' }">
                <div class="rest-name4 worksans-bold-white-24px">{{ restname4 }}</div>
                <div class="rest-type4 dmsans-normal-white-16px">{{ resttype4 }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group6-2">
          <div class="overlap-group5-4">
            <div class="google-maps-hybrid-13">
      <MglMap
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="coordinates"
        @load="onMapLoad"
        ref="map"
        height="100%"
      >
        <MglMarker :coordinates="userCoordinates" color="blue" />
        <MglMarker
          v-for="(item, key) in items"
          :key="key"
          :coordinates="[item.longitude, item.latitude]"
        >
          <MglPopup
            :coordinates="[item.longitude, item.latitude]"
            :closeButton="false"
            :closeOnClick="true"
            anchor="top"
          >
            <v-card max-width="374">
              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>{{ item.Name }}</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-chip-group
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text> Reserve </v-btn>
              </v-card-actions>
            </v-card>
          </MglPopup>
        </MglMarker>
      </MglMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";

import HeadingBckground from "../components/HeadingBckground";
import LightFieldDropdown  from "../components/LightFieldDropdown";
import LightButtonPrimaryIcon  from "../components/LightButtonPrimaryIcon";
import MapRest from "../components/MapRest";
export default {
  name: "MapPage",
  components: {
    HeadingBckground,
    LightFieldDropdown,
    LightButtonPrimaryIcon,
    MapRest,
        MglMap,
    MglMarker,
    MglPopup,
  },
  data: () => ({
    accessToken:
      "pk.eyJ1IjoibWFveHMyIiwiYSI6ImNsMm9oZHZlaDBkNjYzaXBrank0dnM1cjkifQ.a4AEQ9KqKEPzVU_wBnZL2A", // your access token. Needed if you using Mapbox maps
    mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
    userCoordinates: [145.133957, -37.907803],
    items: null,
  }),
  props: [
    "restaurantsMap",
    "confirmshape",
    "restContainer1",
    "restname2",
    "resttype2",
    "restContainer2",
    "restname4",
    "resttype4",
    "map1",
    "map2",
    "map3",
    "map4",
    "map5",
    "headingBckgroundProps",
    "xHeaderProps",
    "lightFieldDropdownProps",
    "rest11Props",
    "rest12Props",
    "xFooterProps",
  ],
  mounted() {
    this.axios.get(this.$hostname + "/apiv2/restaurants").then((response) => {
      console.log(response);
      this.items = response.data;
    });
  },
  created() {
    this.map = Mapbox;
    if (window.navigator.geolocation) {
      // Geolocation available
      window.navigator.geolocation.getCurrentPosition(
        (loc) => {
          console.log(loc.coords.latitude, loc.coords.longitude);
          if (loc.coords)
            this.userCoordinates = [loc.coords.longitude, loc.coords.latitude];
        },
        (e) => {
          console.log(e);
          this.userCoordinates = [145.133957, -37.907803]; // Monash Clyton LonLat
        }
      );
    }
  },
  methods: {
    async onMapLoad(event) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions;

      const newParams = await asyncActions.flyTo({
        center: this.userCoordinates,
        zoom: 12,
        speed: 2,
      });
      console.log(newParams);
    },
    async goRest(index) {
      const newParams = await this.$refs.map.actions.flyTo({
        center: [this.items[index].longitude, this.items[index].latitude],
        zoom: 12,
        speed: 2,
      });
      console.log(newParams);
    },
  },
};
</script>

<style>
.map-page {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 1959px;
  position: relative;
  width: 1440px;
}

.overlap-group8-2 {
  height: 212px;
  position: relative;
  width: 1440px;
}

.restaurants-map {
  left: 135px;
  letter-spacing: 0;
  line-height: 80px;
  position: absolute;
  top: 127px;
  white-space: nowrap;
}

.map-function {
  align-items: flex-start;
  display: flex;
  height: 1203px;
  margin-top: 46px;
  min-width: 1408px;
}

.overlap-group4-3 {
  height: 1168px;
  position: relative;
  width: 318px;
}

.rectangle-14 {
  background-color: var(--white);
  height: 1152px;
  left: 0;
  position: absolute;
  top: 0;
  width: 318px;
}

.selector {
  align-items: flex-start;
  background-color: var(--black-haze);
  border-radius: 12px;
  display: flex;
  height: 112px;
  left: 24px;
  min-width: 270px;
  padding: 4px 24px;
  position: absolute;
  top: 96px;
}

.confirm {
  align-items: flex-start;
  align-self: center;
  display: flex;
  margin-left: 16px;
  min-width: 48px;
}

.confirm-container {
  border-radius: 24px;
  height: 48px;
  position: relative;
  width: 48px;
}

.confirm-shape {
  background-size: 100% 100%;
  height: 15px;
  left: 16px;
  position: absolute;
  top: 16px;
  width: 15px;
}

.rest-info {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 24px;
  min-height: 928px;
  position: absolute;
  top: 240px;
  width: 270px;
}

.rest2 {
  align-items: flex-start;
  display: flex;
  height: 208px;
  margin-top: 32px;
  min-width: 274px;
}

.rest-container-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 224px;
  margin-left: -8px;
  margin-top: -8px;
  position: relative;
  width: 286px;
}

.rest-name2 {
  left: 32px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 168px;
  white-space: nowrap;
}

.rest-type2 {
  left: 32px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 139px;
  white-space: nowrap;
}

.rest4-1 {
  align-items: flex-start;
  display: flex;
  margin-top: 32px;
  min-width: 274px;
}

.rest-container-2 {
  background-position: 50% 50%;
  background-size: cover;
  height: 208px;
  position: relative;
  width: 270px;
}

.rest-name4 {
  left: 24px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 168px;
  white-space: nowrap;
}

.rest-type4 {
  left: 24px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 139px;
  white-space: nowrap;
}

.overlap-group6-2 {
  align-self: flex-end;
  height: 1143px;
  margin-left: 20px;
  position: relative;
  width: 1070px;
}

.overlap-group5-4,
.google-maps-hybrid-13 {
  height: 1143px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1070px;
}

.map-place-holder {
  background-color: var(--mist-gray);
  height: 1143px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1070px;
}

.mark-on-map {
  align-items: flex-start;
  display: flex;
  height: 661px;
  left: 120px;
  min-width: 779px;
  position: absolute;
  top: 286px;
}

.map-2 {
  align-self: flex-end;
  height: 50px;
  width: 40px;
}

.map-3 {
  height: 50px;
  margin-left: 21px;
  margin-top: 4px;
  width: 40px;
}

.map-4 {
  align-self: center;
  height: 50px;
  margin-bottom: 139px;
  margin-left: 294px;
  width: 40px;
}

.map-5 {
  align-self: flex-end;
  height: 50px;
  margin-bottom: 70px;
  margin-left: 145px;
  width: 40px;
}

.map-6 {
  height: 50px;
  margin-left: 119px;
  width: 40px;
}
</style>
