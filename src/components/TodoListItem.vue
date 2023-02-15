<script lang="ts" setup>
defineProps<{
  value: string;
  isComplete: boolean;
}>();

const emit = defineEmits<{
  (e: 'delete'): void;
  (e: 'toggle-complete'): void;
}>();
</script>

<template>
  <li class="todo-list-item">
    <input
      type="checkbox"
      class="todo-list-item-toggleComplete"
      :checked="isComplete"
      @change="emit('toggle-complete')"
    />
    <span class="todo-list-item-value">{{ value }}</span>
    <button class="todo-list-item-btnDelete" @click="emit('delete')">
      Delete
    </button>
  </li>
</template>

<style scoped>
.todo-list-item {
  display: flex;
  column-gap: 8px;
}

.todo-list-item-value {
  flex-grow: 1;
}

.todo-list-item-btnDelete {
  background-color: transparent;
  border: none;
  font-weight: 500;
  cursor: pointer;
}
</style>
