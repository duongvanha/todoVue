<template>
    <ul>
        <li v-for="(todo, index) in todos">
            {{ todo }}
            <button v-on:click="removeTodo(index)">remove</button>
        </li>
    </ul>
    <input v-model="todo" v-on:keyup.enter="addTodo"/>
</template>

<script>
    export default {
        name   : 'app',
        data() {
            return {
                todo : '',
                todos: []
            }
        },
        methods: {
            addTodo   : function () {
                this.todos.push(this.todo);
                this.todo = ''
            },
            removeTodo: function (index) {
                this.todos.splice(index, 1);
            }
        }
    }
</script>
