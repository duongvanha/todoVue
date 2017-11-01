<template>
    <div>
        <todo-counter v-model="listTodo"></todo-counter>
        <todo-view v-model="listTodo"></todo-view>

        {{listTodo.toJson()}}
    </div>
</template>

<script>
    import TodoCounter from 'components/TodoCounter';
    import TodoView from 'components/TodoView';
    import Todos from './../todo/Todos';

    export default {
        name      : 'app',
        computed  : {
            listTodo() {
                return this.$store.state.todos;
            }
        },
        components: {TodoCounter, TodoView}
    }
</script>
