<template>
  <div class="container title">
    <Header title="Task Tracker" />
    <h3>{{ nombre }}</h3>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctor's appointment",
        day: "March 1 at 4:00pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Walk the dog",
        day: "March 2 at 6:00am",
        reminder: true,
      },
            {
        id: 3,
        text: "Read my new e-book",
        day: "March 3 at 9pm",
        reminder: false,
      },
    ];
  },
};
</script>

//
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container.title {
  padding: 3rem;
  border: 1px solid #2c3e50;
}
</style>
