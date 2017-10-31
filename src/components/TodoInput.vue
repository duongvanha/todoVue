<template>
    <div>
        <input
                ref="input"
                v-bind:value="value"
                v-on:input="updateValue($event.target.value)"
                @keyup.enter="triggerEnter($event.target.value)"
        >
    </div>
</template>

<script>
    import Todo from './../todo/Todo'

    export default {
        name   : 'todo-input',
        props  : ['value'],
        methods: {
            updateValue : function (value) {
                this.$emit('input', new Todo(value))
            },
            triggerEnter: function (value) {
                this.$emit('enter', new Todo(value))
            }
        }
    };
</script>
