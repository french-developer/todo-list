<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'add-todo', value: string): void;
}>();

const todoValue = ref<string>('');

function addTodo(): void {
  emit('add-todo', todoValue.value), (todoValue.value = '');
}
</script>

<template>
  <form class="todo-add" @submit.prevent="addTodo">
    <input
      type="text"
      class="todo-add-input"
      placeholder="Add new todo"
      v-model="todoValue"
    />
    <button class="todo-add-btn">Add</button>
  </form>
</template>

<style scoped>
.todo-add {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.todo-add-input,
.todo-add-btn {
  padding: 12px 16px;
  border: 1px solid #000;
}

.todo-add-input {
  flex-grow: 1;
}

.todo-add-btn {
  padding-inline: 24px;
  background-color: #000;
  font-weight: 500;
  color: #fff;
}

@media screen and (min-width: 480px) {
  .todo-add {
    flex-direction: row;
  }
}
</style>
