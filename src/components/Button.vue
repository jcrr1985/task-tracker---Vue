<template>
    <button :style="{background:addColor}" class="btn">{{texto}}</button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            texto:String,
            addColor:String
        }
    }
</script>

<style>
    .btn {
        display: inline-block;
        text-decoration: none;
        font-size: 15px;
        cursor: pointer;
        padding: 10px 20px;
        background-color:#333; 
        color: #fff;
    }
</style>

