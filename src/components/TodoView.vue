<template>
    <div>
        <ul>
            <li v-for="todo in value.toArray()">
                <todo-item :todo="todo"></todo-item>
                <button v-on:click="value.removeTodo(todo)">remove</button>
            </li>
        </ul>
        <button v-on:click="value.clearDone()">CLear todo done</button>
        <button v-on:click="addValue()">Add</button>
        <todo-input v-model="todo" v-on:enter="addValue()"></todo-input>
    </div>
</template>

<script>
    import Todo from './../todo/Todo'
    import TodoInput from 'components/TodoInput';
    import TodoItem from 'components/Todo';

    export default {
        name      : 'todo-view',
        props     : ['value'],
        data      : function () {
            return {
                todo: new Todo()
            };
        },
        components: {TodoInput, TodoItem},
        methods   : {
            updateValue: function (value) {
                this.$emit('input', new Todo(value))
            },
            addValue   : function () {
                this.value.addTodo(this.todo);
                this.todo = new Todo()
            }
        }
    }
</script>
