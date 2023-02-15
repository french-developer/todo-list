<script lang="ts" setup>
import { Filter } from '@/types/todos';

interface IFilterBtn {
  text: string;
  value: Filter;
}

defineProps<{
  modelValue: Filter;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Filter): void;
}>();

const filterBtns: IFilterBtn[] = [
  { text: 'All', value: 'all' },
  { text: 'Complete', value: 'complete' },
  { text: 'Incomplete', value: 'incomplete' },
];
</script>

<template>
  <div class="todo-filter">
    <button
      :class="[
        'todo-filter-btn',
        { 'is-selected': filterBtn.value === modelValue },
      ]"
      v-for="filterBtn in filterBtns"
      :key="filterBtn.value"
      @click="emit('update:modelValue', filterBtn.value)"
    >
      {{ filterBtn.text }}
    </button>
  </div>
</template>

<style scoped>
.todo-filter {
  margin-top: 12px;
  display: flex;
}

.todo-filter-btn {
  padding: 12px 0;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  flex-grow: 1;
}

.todo-filter-btn.is-selected {
  border-color: #000;
  font-weight: 500;
}
</style>
