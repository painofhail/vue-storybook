import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ================== Custom Components =======================
import Button from '@/components/UI-ki/Button/Button';

Vue.component('Button', Button);

// ============================================================

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
