<script lang="ts" setup>
import TodoListItem from './TodoListItem.vue';
import { ITodo } from '@/types/todos';

defineProps<{
  todos: ITodo[];
}>();

const emit = defineEmits<{
  (e: 'delete-todo-by-id', id: string): void;
}>();
</script>

<template>
  <ul class="todo-list">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :value="todo.value"
      :is-complete="todo.isComplete"
      @toggle-complete="todo.isComplete = !todo.isComplete"
      @delete="emit('delete-todo-by-id', todo.id)"
    />
  </ul>
</template>

<style scoped>
.todo-list {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
</style>
