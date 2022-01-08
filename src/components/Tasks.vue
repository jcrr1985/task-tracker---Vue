<template>
  <div v-for="task in tasks" :key="task.id">
    <Task
      :task="task"
      :class="[task.reminder ? 'reminder' : 'not-reminder']"
      @delete-task="$emit('delete-task', task.id)"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @changeImportance="$emit('changeImportance', task.id)"
    />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-reminder", "changeImportance"],
};
</script>

<style scoped>
.reminder {
  border-left: 5px solid green;
  border-bottom: 5px solid green;
}
.not-reminder {
  border-left: 5px solid rgb(203, 214, 223);
  border-bottom: 5px solid rgb(203, 214, 223);
}
</style>
