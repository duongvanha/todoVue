import Vue from 'vue';
import App from './App';
import Todos from './todo/Todos';

new Vue({
    el        : '#app',
    template  : '<App />',
    components: {App},
    provide() {
        return {
            todos: new Todos()
        }
    }
});
