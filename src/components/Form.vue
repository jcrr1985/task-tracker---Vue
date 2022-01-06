<template>
    <form>
        <input v-model="id" type="text" placeholder="id">
        <input v-model="text" type="text" placeholder="text">
        <input v-model="day" type="text" placeholder="day">
        <input v-model="reminder" type="checkbox" placeholder="reminder">
        <input type="submit" value="submit" @click="createTask">
    </form>
</template>

<script>
    export default {
        name: "Form",
        data(){
            return {
                id:'',
                text:'',
                day:'',
                reminder:false
            } 
        },
        methods: {
            createTask(e){
                e.preventDefault();
                this.$emit('add-task', {id:parseInt(this.id),text: this.text, day: this.day, reminder: this.reminder})
            }
        }
    }
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
input{
    padding:.5rem;
    width: 100%;
    margin-bottom: .5rem;
    margin-top: .5rem;

}
input[type="submit"]{
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    font-size: 1.2rem;
}
</style>