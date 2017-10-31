<template>
    <input
            ref="input"
            v-bind:value="value"
            v-on:input="updateValue($event.target.value)">
</template>

<script>
    import Todo from './../model/Todo'

    export default {
        name   : 'todo-input',
        props  : ['value'],
        methods: {
            updateValue: function (value) {
                this.$emit('input', new Todo(value))
            }
        }
    }
</script>
