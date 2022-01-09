<template>
  <div class="container title">
    <Header
      @toggle-add-task-section="toggleAddTaskSection"
      title="Task Tracker"
      :buttonState="showAddTaskSection"
    />
    <router-view :showAddTaskSection="showAddTaskSection"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTaskSection: false,
    };
  },
  methods: {
    toggleAddTaskSection() {
      this.showAddTaskSection = !this.showAddTaskSection;
    }
  }
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