import Vue from 'vue'
import { Quasar, Loading, Notify, LocalStorage } from 'quasar'

import '@/styles/quasar.scss'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'

import MDI from 'quasar/icon-set/mdi-v5'

Vue.use(Quasar, {
    config: {},
    iconSet: MDI,
    plugins: [Loading, Notify, LocalStorage]
});