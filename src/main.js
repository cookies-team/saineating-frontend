import Vue from 'vue'
import App from './App.vue'
import RecipeListPage from './pages/RecipeListPage.vue'
import RecipePage from './pages/RecipePage.vue'
import FeedsPage from './pages/FeedsPage.vue'
import MapPage from './pages/MapPage.vue'
import HomePage from './pages/HomePage.vue'
import SearchPage from './pages/AdvancedSearchPage.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router'
import "../styleguide.css"
import "../globals.css"
import { home1440Data } from "./data";

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage, props: { ...home1440Data }, },
    { path: '/search', component: SearchPage },
    { path: '/recipes', component: RecipeListPage },
    { path: '/recipe/:id', component: RecipePage },
    { path: '/feeds', component: FeedsPage },
    { path: '/map', component: MapPage },
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
