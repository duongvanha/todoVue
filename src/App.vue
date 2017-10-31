<template>
    <div>
        <todo-counter v-model="todos"></todo-counter>
        <todo-view v-model="todos"></todo-view>

        {{todos.toJson()}}
    </div>
</template>

<script>
    import TodoCounter from 'components/TodoCounter';
    import TodoView from 'components/TodoView';

    export default {
        name      : 'app',
        inject    : ['todos'],
        components: {TodoCounter, TodoView}
    }
</script>
