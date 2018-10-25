import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

window.Vue = require('vue');

const app = new Vue({
    el: '#mike-app',
    router
});
