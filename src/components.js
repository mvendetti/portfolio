import Vue from 'vue';

export const Components = {
    Home : Vue.component('mike-home', require('./components/Home.vue').default),
    About : Vue.component('mike-about', require('./components/About.vue').default),
    Header : Vue.component('mike-header', require('./components/Header.vue').default),
    Contact : Vue.component('mike-contact', require('./components/Contact.vue').default),
    Portfolio : Vue.component('mike-portfolio', require('./components/Portfolio.vue').default),
};
