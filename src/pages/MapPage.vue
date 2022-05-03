<template>
  <v-row class="fill-height" no-gutters>
    <v-col class="col-3">
      <v-list height="100%">
      <v-card-title>Restaurants</v-card-title>
          <v-autocomplete
          class="mx-3 my-3"
      chips
      clearable
      hide-details
      hide-selected
      label="Search restaurants"
      solo
      append-icon="mdi-magnify"
      placeholder="Search restaurants"
    />
      <v-divider />
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          link
          @click="goRest(index)"
        >
          <v-list-item-icon>
            <v-icon>mdi-silverware</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.Name }}</v-list-item-title>
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
            <v-list-item-subtitle>{{ item.Address }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col class="col-9">
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
          <MglPopup :coordinates="[item.longitude, item.latitude]" :closeButton=false :closeOnClick=true anchor="top">
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
                <v-btn color="deep-purple lighten-2" text>
                  Reserve
                </v-btn>
              </v-card-actions>
            </v-card>
          </MglPopup>
        </MglMarker>
      </MglMap>
    </v-col>
  </v-row>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker,
    MglPopup,
  },
  data: () => ({
    accessToken:
      "pk.eyJ1IjoibWFveHMyIiwiYSI6ImNsMm9oZHZlaDBkNjYzaXBrank0dnM1cjkifQ.a4AEQ9KqKEPzVU_wBnZL2A", // your access token. Needed if you using Mapbox maps
    mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
    userCoordinates: [145.133957, -37.907803],
    drawer: true,
    items: null,
  }),
  mounted() {
    this.axios
      .get("https://www.saineating.ngx.fi/apiv2/restaurants")
      .then((response) => {
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