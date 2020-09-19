import Vue from 'vue';

import router from './routes/router';
import store from './store/store';

import App from './App.vue';

Vue.config.devtools = true; 

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');