import Vue from 'vue';
import App from './App';
import provider from './provider';

import TodoCouter from './components/TodoCouter';
import TodoInput from './components/TodoInput';
import TodoView from './components/TodoView';
import Todo from './components/Todo';

Vue.component('todo-counter', TodoCouter);
Vue.component('todo-input', TodoInput);
Vue.component('todo-view', TodoView);
Vue.component('todo', Todo);

new Vue({
    el        : '#app',
    template  : '<App />',
    components: {App},
    provide() {
        return provider
    }
});
