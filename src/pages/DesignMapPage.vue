<template>
  <div class="container-center-horizontal">
    <div class="map-page screen">
      <heading-bckground :src="headingBckgroundProps.src" title="Restaurants" />
      <p class="dmsans-normal-mine-shaft-20px mt-8 mx-2" :style="{ width: $vuetify.breakpoint.mobile ? '100%' : '80%' }">
        We have researched the recipes posted online by these restaurants and
        determined that the recipes offered by these restaurants are healthier.
        If you are taking your children out to eat, please try to choose these
        restaurants.
      </p>
      <v-row class="mb-16" style="width: 100%">
        <v-col cols="12" sm="12" md="3">
          <div>
            <v-text-field
              label="Search Restaurant"
              @input="searchRest"
            ></v-text-field>
          </div>

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

          <div
            class="rest-info my-4 mx-2"
            style="max-height: 1000px; overflow: scroll"
          >
            <div
              v-for="(item, index) in leftItems"
              :key="index"
              @click="goRest(index)"
              style="width: 100%"
            >
              <div class="map-rest mt-4">
                <div
                  class="map-rest-container"
                  :class="{ mapRestActive: selectedIndex == index }"
                  :style="`background-image: url(${require('../assets/Iter2/Rests/RestId' +
                    item.RestID +
                    '.png')});`"
                >
                  <div class="map-rest-midlayer">
                    <div class="map-rest-name worksans-bold-white-24px">
                      {{ item.Name }}
                    </div>
                    <div class="map-rest-type dmsans-normal-white-16px">
                      {{ item.RestTypeName }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="9" style="height: 100%">
          <MglMap
            :accessToken="accessToken"
            :mapStyle="mapStyle.value"
            :center="userCoordinates"
            @load="onMapLoad"
            ref="map"
            height="100%"
          >
            <MglNavigationControl position="top-right" />
            <MglMarker :coordinates="userCoordinates" color="blue" />
            <MglMarker
              v-for="(item, index) in items"
              :key="item.Name + index"
              :coordinates="[item.longitude, item.latitude]"
            >
              <MglPopup
                :coordinates="[item.longitude, item.latitude]"
                :closeButton="false"
                :closeOnClick="true"
                anchor="top"
                :ref="`popup_${item.RestID}`"
              >
                <v-card max-width="374">
                  <v-img
                    height="250"
                    :src="`${require('../assets/Iter2/Rests/RestId' +
                      item.RestID +
                      '.png')}`"
                  ></v-img>

                  <v-card-title>{{ item.Name }}</v-card-title>

                  <v-card-text>
                    <v-row align="center" class="mx-0"> </v-row>

                    <div class="my-4 text-subtitle-1">
                      {{ item.RestTypeName }}
                    </div>

                    <div>
                      <!-- Small plates, salads & sandwiches - an intimate setting
                      with 12 indoor seats plus patio seating. -->
                      {{ item.Address }}
                    </div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>
                  <v-card-actions>
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      @click="navi(item, index, 'walking')"
                    >
                      🚶
                    </v-btn>
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      @click="navi(item, index, 'cycling')"
                    >
                      🚴
                    </v-btn>
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      @click="navi(item, index, 'driving')"
                    >
                      🚗
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </MglPopup>
            </MglMarker>
            <v-card class="instrs" v-show="showInstrs" ref="instrs">
              <v-card-title
                >{{ instrTitle }}
                <v-spacer />
                <v-icon @click="showInstrs = false" style="cursor: pointer"
                  >mdi-close</v-icon
                >
              </v-card-title>
              <v-divider></v-divider>
              <v-timeline>
                <v-timeline-item v-for="step in steps" :key="step.id">
                  {{ step.id + 1 }}. {{ step.instr }}
                </v-timeline-item>
              </v-timeline>
            </v-card>
            <v-menu class="style-selector" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="rounded-0"
                  elevation="0"
                  rounded="0"
                >
                  {{ mapStyle.name }}
                </v-btn>
              </template>
              <v-list elevation="0">
                <v-list-item
                  v-for="(style, index) in styles"
                  :key="index"
                  open-on-hover
                >
                  <v-list-item-content
                    @click="mapStyle = style"
                    style="cursor: pointer"
                    >{{ style.name }}</v-list-item-content
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </MglMap>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglNavigationControl,
  // MglGeojsonLayer,
} from "vue-mapbox";

let map = null;

import HeadingBckground from "../components/HeadingBckground";
export default {
  name: "MapPage",
  components: {
    HeadingBckground,
    MglMap,
    MglMarker,
    MglPopup,
    MglNavigationControl,
    // MglGeojsonLayer,
  },
  data: () => ({
    accessToken:
      "pk.eyJ1IjoibWFveHMyIiwiYSI6ImNsMm9oZHZlaDBkNjYzaXBrank0dnM1cjkifQ.a4AEQ9KqKEPzVU_wBnZL2A", // your access token. Needed if you using Mapbox maps
    styles: [
      {
        name: "street",
        value: "mapbox://styles/mapbox/streets-v11",
      },
      {
        name: "outdoors",
        value: "mapbox://styles/mapbox/outdoors-v11",
      },
      {
        name: "satellite",
        value: "mapbox://styles/mapbox/satellite-v9",
      },
      {
        name: "satellite streets",
        value: "mapbox://styles/mapbox/satellite-streets-v11",
      },
      {
        name: "navigation",
        value: "mapbox://styles/mapbox/navigation-day-v1",
      },
    ],
    mapStyle: {
      name: "street",
      value: "mapbox://styles/mapbox/streets-v11",
    }, // your map style
    userCoordinates: [145.133957, -37.907803],
    items: null,
    allItems: null,
    leftItems: null,
    selectedIndex: 0,
    sortOptions: ["id", "alphabet", "distance"],
    sort: "id",
    search: "",
    // map: null, // issue: https://github.com/soal/vue-mapbox/issues/217
    mapbox: null,
    showInstrs: false,
    steps: [],
    instrTitle: null,
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
    this.update();
  },
  async created() {
    this.mapbox = Mapbox;
    if (window.navigator.geolocation) {
      // Geolocation available
      window.navigator.geolocation.getCurrentPosition(
        async (loc) => {
          console.log(loc.coords.latitude, loc.coords.longitude);
          if (loc.coords)
            this.userCoordinates = [loc.coords.longitude, loc.coords.latitude];
          if (map) {
            await map.flyTo({
              center: this.userCoordinates,
              zoom: 15,
              speed: 10,
            });
          }
        },
        async (e) => {
          console.log(e);
          this.userCoordinates = [145.133957, -37.907803]; // Monash Clyton LonLat
          if (map) {
            await map.flyTo({
              center: this.userCoordinates,
              zoom: 15,
              speed: 10,
            });
          }
        }
      );
    }
  },
  methods: {
    update() {
      this.axios
        .get(this.$hostname + "/apiv3/restaurants", {
          params: { sort: this.sort },
        })
        .then((response) => {
          console.log(response);
          this.allItems = response.data;
          this.items = [...this.allItems];
          this.leftItems = [...this.allItems];
        });
    },
    async onMapLoad(event) {
      const asyncActions = event.component.actions;
      if (this.$route.params.restId) {
        this.items.forEach(async (rest, index) => {
          if (rest.RestID == this.$route.params.restId) {
            await this.goRest(index);
          }
        });
      } else {
        await asyncActions.flyTo({
          center: this.userCoordinates,
          zoom: 15,
          speed: 3,
        });
      }

      map = event.map;

      event.map.resize();
    },
    async goRest(index) {
      const newParams = await this.$refs.map.actions.flyTo({
        center: [this.items[index].longitude, this.items[index].latitude],
        zoom: 15,
        speed: 3,
      });
      console.log(newParams);

      console.log(this.$refs[`popup_${this.items[index].RestID}`][0]);
      this.$refs[`popup_${this.items[index].RestID}`][0].showed = true;

      this.selectedIndex = index;
    },
    async searchRest(input) {
      // console.log(event)
      this.leftItems = this.allItems.filter((item) => {
        return item.Name.toLowerCase().includes(input.toLowerCase());
      });
    },
    navi(rest, index, type) {
      this.$refs[`popup_${this.items[index].RestID}`][0].remove();

      const start = this.userCoordinates;
      const end = [rest.longitude, rest.latitude];
      // console.log(event)
      this.axios
        .get(
          `https://api.mapbox.com/directions/v5/mapbox/${type}/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${this.accessToken}`
        )
        .then((response) => {
          this.showInstrs = true;

          console.log(response.data);
          const route = response.data.routes[0];
          const steps = route.legs[0].steps;
          steps.forEach((step, index) => {
            this.steps.push({ id: index, instr: step.maneuver.instruction });
          });
          this.instrTitle = `Duration: ${(route.duration / 60) >> 0} min`;

          const routeCoords = route.geometry.coordinates;
          const geojson = {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: routeCoords,
            },
          };
          console.log(geojson);

          // if the route already exists on the map, we'll reset it using setData
          if (map.getSource("route")) {
            map.getSource("route").setData(geojson);
          }
          // otherwise, we'll make a new request
          else {
            const rtn = map.addLayer({
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: geojson,
              },
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "#0000FF",
                "line-width": 5,
                "line-opacity": 0.75,
              },
            });
            console.log("add layer", rtn);
          }
        });
    },
  },
  watch: {
    sort: function () {
      this.update();
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
  position: relative;
  max-width: 1440px;
  width: 100%;
}

.map-function {
  align-items: flex-start;
  display: flex;
  height: 1203px;
  margin-top: 46px;
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

.map-rest {
  align-items: flex-start;
  display: flex;
}

.mapRestActive {
  border-style: solid;
  border-width: 1vh;
  border-color: #f49b3f;
}

.map-rest-container {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 8px;
  height: 210px;
  width: 100%;
  position: relative;
  display: inline-block;
  /* width: 270px; */
}

.map-rest-midlayer {
  background: linear-gradient(to bottom, transparent, #000);
  border-radius: 8px;
  height: 100%;
  width: 100%;
}

.map-rest-name {
  left: 24px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 140px;
  /* white-space: nowrap; */
  overflow: hidden;
}

.map-rest-type {
  left: 24px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 120px;
}

.instrs {
  position: absolute;
  margin: 20px;
  width: 50%;
  top: 50%;
  right: 0;
  bottom: 0;
  padding: 20px;
  background-color: #fff;
  overflow-y: scroll;
}

.style-selector {
  position: absolute;
  top: 1vmin;
  left: 1vmin;
}
</style>
