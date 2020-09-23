import Vue from 'vue';

import router from './routes/router';
import store from './store/store';

//GLOBAL COMPONENTS
import Input from '@/components/ui-kit/Input.vue';
Vue.component('v-input', Input)
import Button from '@/components/ui-kit/Button.vue';
Vue.component('v-button', Button)
import RadioButton from '@/components/ui-kit/RadioButton.vue';
Vue.component('v-radio-button', RadioButton)
import Checkbox from '@/components/ui-kit/Checkbox.vue';
Vue.component('v-checkbox', Checkbox)
import Textarea from '@/components/ui-kit/Textarea.vue';
Vue.component('v-textarea', Textarea)
//------------------


import App from './App.vue';

Vue.config.devtools = true; 

new Vue({
    router,
		store,
    render: h => h(App),
}).$mount('#app');

