<script lang="ts" setup>
import TodoAdd from './components/TodoAdd.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
import useTodos from './composables/useTodos';

const { filter, filteredTodos, addTodo, deleteTodoById } = useTodos();
</script>

<template>
  <div class="container">
    <TodoAdd @add-todo="addTodo" />
    <TodoFilter v-model="filter" />
    <TodoList :todos="filteredTodos" @delete-todo-by-id="deleteTodoById" />
  </div>
</template>

<style scoped>
.container {
  max-width: 550px;
  padding: 0 8px;
  margin: 40px auto;
}
</style>
