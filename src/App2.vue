<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: false,
      tasks: ['Task one', 'Task two', 'Task three'],
      link: 'https://google.com'
    }
  },
  methods: {
    toggleStatus() {
      this.status = !this.status
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
  <p v-else="status">User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <div>
    <a v-bind:href="link">Click for Google with bind</a>
    <br>
    <a :href="link">Click for Google no bind</a>
  </div>

  <button v-on:click="toggleStatus">Change Status</button>

</template>

<style scoped>
h1 {
  color: red;
}
</style>