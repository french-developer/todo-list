<script lang="ts" setup>
import TodoAdd from './components/TodoAdd.vue';
import TodoList from './components/TodoList.vue';
import useTodos from './composables/useTodos';

const { todos, addTodo, deleteTodoById } = useTodos();
</script>

<template>
  <div class="container">
    <TodoAdd @add-todo="addTodo" />
    <TodoList :todos="todos" @delete-todo-by-id="deleteTodoById" />
  </div>
</template>

<style scoped>
.container {
  max-width: 550px;
  padding: 0 8px;
  margin: 40px auto;
}
</style>
