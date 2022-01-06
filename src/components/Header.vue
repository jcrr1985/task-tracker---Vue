<template>
    <header>
        <h1>{{ title }}</h1>
            <Button @click="onClick()" texto="Add Task" addColor="green"/>
    </header>

</template>

<script>
import Button from './Button'
    export default {
        name: 'Header',
        props: {
            title:String,
        },
        components: {
            Button
        },
        methods: {
            onClick() {
                 console.log('anything')
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