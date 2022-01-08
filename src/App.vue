<template>
  <div class="container title">
    <Header
      @toggle-add-task-section="toggleAddTaskSection"
      title="Task Tracker"
      :buttonState="showAddTaskSection"
    />
    <div class="formy" v-if="showAddTaskSection">
      <Form @add-task="addTask" />
    </div>
    <div class="tasky">
      <Tasks
        :tasks="tasks"
        @delete-task="delTask"
        @toggle-reminder="toggleReminder"
        @changeImportance="toggleReminder"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
export default {
  name: "App",
  components: {
    Header,
    Tasks,
    Form,
  },
  data() {
    return {
      tasks: [],
      showAddTaskSection: false,
    };
  },
  methods: {
    delTask(id) {
      fetch(`http://localhost:500/tasks/${id}`, {
        method: "DELETE",
      });
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    async toggleReminder(id) {
      const res = await fetch(`http://localhost:500/tasks/${id}`);
      const taskToUpdate = await res.json();
      const updatedTask = { ...taskToUpdate, reminder: !taskToUpdate.reminder };
      fetch(`http://localhost:500/tasks/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      this.tasks = this.tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      );
    },
    async addTask(task) {
      const res = await fetch("http://localhost:500/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      console.log("data posteada:D", data); // res.json() == el metodo .json() extrae el valor resuelto por la promesa?
      this.tasks = [...this.tasks, data];
    },
    toggleAddTaskSection() {
      this.showAddTaskSection = !this.showAddTaskSection;
    },
  },
  async created() {
    const res = await fetch("http://localhost:500/tasks"); // donde trae la data?????
    const data = await res.json();
    this.tasks = data;
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
.container.title .formy {
  background-color: #adcae7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container.title .tasky {
}
</style>
