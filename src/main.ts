import Vue from 'vue'
import App from '@/App.vue'

import Service from '@/modules/api-service'
import router from '@/router'
import '@/quasar'

Vue.config.productionTip = false;
Vue.prototype.$service = Service;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
