<script setup>
import { ref } from 'vue';

const name = ref('John Doe');
const status = ref(false);
const tasks = ref(['Task one', 'Task two', 'Task three']);
const newTask = ref('')


const link = ref('https://google.com');

//Method
const toggleStatus = () => {
  status.value = !status.value
};

const addTask = () => {
  if (newTask.value.trim() != '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
  <p v-else="status">User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>


  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
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