<template>
  <div @dblclick="$emit('toggle-reminder', task.id)" class="task">
    <h4 class="text">
      {{ task.text }}
      <em @click="$emit('delete-task', task.id)" class="fas fa-times"></em>
    </h4>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {},
};
</script>

<style scoped>
em.fas {
  margin-left: 0.5rem;
  font-size: 12px;
  color: red;
  font-weight: bold;
}

h4,
p {
  text-align: left;
  margin-left: 5px;
}

.task {
  background-color: lightyellow;
}
</style>
