import Vue from 'vue'
import { Quasar, Loading, Notify, LocalStorage } from 'quasar'

import '@/styles/quasar.scss'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'

const lang = require('quasar/lang/pt-br.js');
const iconSet = require('quasar/icon-set/mdi-v4.js');

Vue.use(Quasar, {
    config: {},
    plugins: [Loading, Notify, LocalStorage],
    lang, iconSet
});