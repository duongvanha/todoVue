<template>
    <div>
        <todo-counter v-model="listTodo"></todo-counter>
        <todo-view v-model="listTodo"></todo-view>

        {{listTodo.toJson()}}
    </div>
</template>

<script>
    import Todos from './model/Todos';

    const todos = new Todos();

    export default {
        name: 'app',
        data() {
            return {
                listTodo: todos
            }
        }
    }
</script>
