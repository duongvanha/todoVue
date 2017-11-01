import Vue from 'vue';
import Vuex from 'vuex';
import App from 'components/App';
import Todos from './todo/Todos';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: new Todos()
    },
});

new Vue({
    el        : '#app',
    template  : '<App />',
    components: {App},
    store
});
