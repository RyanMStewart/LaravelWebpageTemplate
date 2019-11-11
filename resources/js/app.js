require('./bootstrap.js');

import Vue from 'vue';
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

var app = new Vue({
    el: '#test',
    data: {
        message: 'This is a test message'
    },
    mounted() {
        console.log('The element was mounted.')
    }
});
