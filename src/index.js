import Vue from 'vue';
import App from './App';

Vue.component('todo-counter', require('./components/TodoCouter').default);
Vue.component('todo-view', require('./components/Todos').default);


new Vue({
    el        : '#app',
    template  : '<App />',
    components: {App}
});
