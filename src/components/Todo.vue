<template>
    <div>
        <input type="checkbox" v-model="todo.done"/>
        <span :class="{'todo-done': todo.done, 'todo-not-done': !todo.done}">{{todo.toString()}}</span>
    </div>
</template>


<script>
    export default {
        name : 'todo',
        props: ['todo']
    }
</script>
