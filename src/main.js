import Vue from 'vue'
import App from './App.vue'
import FrontPage from './pages/FrontPage.vue'
import RecipePage from './pages/RecipePage.vue'
import FeedsPage from './pages/FeedsPage.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: FrontPage },
    { path: '/recipe/:id', component: RecipePage },
    { path: '/feeds', component: FeedsPage },
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
