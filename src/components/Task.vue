<template>
  <div @dblclick="$emit('toggle-reminder', task.id)" class="task">
    <div class="">
      <h4 class="text">
        {{ task.text }}
        <em @click="$emit('delete-task', task.id)" class="fas fa-times"></em>
      </h4>
      <p>{{ task.day }}</p>
    </div>
    <div class="">
      <input @change="changeImportance" type="checKbox" value="mandatory" :id="task.id" />
      <label :for="task.id">Important</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
      changeImportance(){
          console.log('changeImportance', this.task.id)
          this.$emit('changeImportance', this.task.id);
      }
  },
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
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
