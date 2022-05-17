<template>
  <v-container style="max-width: 250px">
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="searchSuggestions"
      chips
      clearable
      hide-details
      hide-selected
      item-text="name"
      item-value="id"
      label="Quick search recipe or ingredient"
      solo
      flat
      append-icon="mdi-magnify"
      placeholder="Quick search recipe or ingredient"
      @keyup.enter="search"
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            Search for your favorite
            <strong>Recipe</strong> or
            <strong>Ingredients</strong>
          </v-list-item-title>
        </v-list-item>
      </template>
      <template v-slot:selection="{ attr, on, item, selected }">
        <v-chip
          v-bind="attr"
          :input-value="selected"
          color="blue-grey"
          class="white--text"
          v-on="on"
        >
          <v-icon left>
            mdi-{{ item.type == "food" ? "food" : "newspaper" }}
          </v-icon>
          <span v-text="item.fullname">selected</span>
        </v-chip>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-avatar
          color="indigo"
          class="text-h5 font-weight-light white--text"
          ><!--TODO-->
          {{ item.name.charAt(0) }}
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle v-text="item.fullname"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-{{ item.type == "food" ? "food" : "newspaper" }}</v-icon>
          <!--TODO-->
        </v-list-item-action>
      </template>
    </v-autocomplete>
  </v-container>
</template>
<script>
export default {
  name: "SearchBar",
  data: () => ({
    isLoading: false,
    items: [],
    model: null,
    searchSuggestions: null,
    tab: null,
  }),

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    searchSuggestions() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;
      let url = this.$hostname + `/apiv3/search/suggestions`;
      // Lazily load input items
      this.axios
        .get(url) //TODO
        .then((response) => {
          this.items = response.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
  methods: {
    search() {
      if (this.model == null) {
        return; // TODO: add a popup for notif
      }

      const item = this.model;
      console.log(item)
      this.$router.push({ path: "/re/" + item });
    },
  },
};
</script>