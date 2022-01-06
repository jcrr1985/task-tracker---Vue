<template>
  <div class="container title">
    <Header title="Task Tracker" />
    <div class="formy">
      <Form  @add-task="addTask"/>
    </div>
  <div class="tasky">
      <Tasks
      :tasks="tasks"
      @delete-task="delTask"
      @toggle-reminder="toggleReminder"
    />
  </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form"
export default {
  name: "App",
  components: {
    Header,
    Tasks,
    Form
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    delTask(id) {
      console.log(id)
      this.tasks = this.tasks.filter( task => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map( task => task.id == id ? {...task, reminder: !task.reminder} : task);
    },
    addTask(task) {
      this.tasks = [...this.tasks, task]
    }
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1.5%;
}
.container.title {
  border: 1px solid #2c3e50;
  width: 70%;
  margin: 0 auto;
}
.container.title .formy{
  background-color:#adcae7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container.title .tasky{
}
</style>
