<template>
    <header>
        <h1>{{ title }}</h1>
            <Button @click="toggleAddTaskSection" :texto="buttonState? 'close': 'Add New Task' " :addColor="buttonState ? 'red' : 'green'"/>
    </header>
</template>

<script>
import Button from './Button'
    export default {
        name: 'Header',
        props: {
            title:String,
            buttonState: Boolean,
        },
        components: {
            Button
        },
        methods: {
            toggleAddTaskSection() {
                 this.$emit('toggle-add-task-section');
            }
        }
    }
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
    background: -webkit-linear-gradient(black,white,black);
}
</style>