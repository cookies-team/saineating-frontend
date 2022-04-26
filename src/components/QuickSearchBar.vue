<template>
  <v-container>
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
      item-value="fullname"
      label="Quick search recipe or ingredient"
      solo
      append-icon="mdi-magnify"
      placeholder="Quick search recipe or ingredient"
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
          <v-icon left> mdi-food </v-icon>
          <span v-text="item.fullname"></span>
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
          <v-icon>mdi-food</v-icon>
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
      let url = `https://www.saineating.ngx.fi/apiv2/search/suggestions`;
      // Lazily load input items
      fetch(url) //TODO
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>