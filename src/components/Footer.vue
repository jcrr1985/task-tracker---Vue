<template>
  <div>
    <p>Task Tracker &copy; 2022</p>
    <router-link class="rl" to="/about">About</router-link>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: -webkit-linear-gradient(black, white, black);
}
p {
  font-weight: bold;
  font-size: 14px;
}
.rl{
  font-weight: bold;
  font-size: 14px;
  color: white;
  margin-bottom: 10px;
}
</style>
