import Vue from 'vue';
import App from './App';

Vue.component('todo-counter', require('./components/TodoCouter').default);
Vue.component('todo-input', require('./components/TodoInput').default);
Vue.component('todo-view', require('./components/TodoView').default);
Vue.component('todo', require('./components/Todo').default);


new Vue({
    el        : '#app',
    template  : '<App />',
    components: {App}
});
