<template>
  <div>
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
import Tasks from "../components/Tasks";
import Form from "../components/Form";
export default {
  name: "Home",
  components: {
    Tasks,
    Form
  },
  data() {
      return {
          tasks: Array
      }
  },
  props: {
      showAddTaskSection: Boolean
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
    }
  },
  async created() {
    const res = await fetch("http://localhost:500/tasks"); // donde trae la data?????
    const data = await res.json();
    this.tasks = data;
  },
};
</script>
