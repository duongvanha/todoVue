<template>
    <h1>{{done}} / {{length}}</h1>
</template>

<script>
    export default {
        name    : 'todo-counter',
        props   : ['value'],
        computed: {
            done  : function () {
                return this.value.countDone();
            },
            length: function () {
                return this.value.length();
            }
        }
    }
</script>
