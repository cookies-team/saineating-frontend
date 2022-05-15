import Vue from 'vue'
import App from './App.vue'

// old ones
import RecipeListPage from './pages/RecipeListPage.vue'
import RecipePage from './pages/RecipePage.vue'
import FeedsPage from './pages/FeedsPage.vue'
import MapPage from './pages/MapPage.vue'
import SearchPage from './pages/AdvancedSearchPage.vue'

// designed ones
import DesignHomePage from './pages/DesignHomePage.vue'
import DesignGuidelinePage from './pages/DesignGuidelinePage.vue'
import DesignMapPage from './pages/DesignMapPage.vue'
import DesignRecipePage from './pages/DesignRecipePage.vue'
import DesignRecipeDetailPage from './pages/DesignRecipeDetailPage'
import DesignWhyPage from './pages/DesignWhyPage'
import DesignAboutPage from './pages/DesignAboutPage'
import SubmitPage from "./pages/SubmitPage";

// uitls
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router'
import "../styleguide.css"
import "../globals.css"
import { homePageData } from "./homedata";
import { aboutPageData, guidelinePageData, mapPageData, recipePageData, recipeDetailsPageData, whyPageData, submitPageData } from "./projdata";

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // old routers
    { path: '/search', component: SearchPage },
    { path: '/recipes', component: RecipeListPage },
    { path: '/recipe/:id', component: RecipePage },
    { path: '/feeds', component: FeedsPage },
    { path: '/map', component: MapPage },
    // new routers
    { path: '*', component: DesignHomePage, props: { ...homePageData }, },
    { path: '/guideline', component: DesignGuidelinePage, props: { ...guidelinePageData }, },
    { path: '/restmap', name: "RestMap", component: DesignMapPage, props: { ...mapPageData }, },
    { path: '/res', name: "Recipes", component: DesignRecipePage, props: { ...recipePageData }, },
    { path: '/re/:id', component: DesignRecipeDetailPage, props: { ...recipeDetailsPageData }, },
    { path: '/why', component: DesignWhyPage, props: { ...whyPageData }, },
    { path: '/about', component: DesignAboutPage, props: { ...aboutPageData }, },
    { path: '/submit', component: SubmitPage, props: { ...submitPageData }, },
  ]
})

Vue.prototype.$hostname = (Vue.config.productionTip) 
                            ? '/'
                            : 'https://saineating.ml'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
