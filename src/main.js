import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import { taskStore } from '@/stores/task'

Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  vuetify,
  store: taskStore,
  render: () => h(App)
})

app.mount('#app')
