import { v4 } from 'uuid';
import { computed } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { ITodo, Filter } from '@/types/todos';

export default function useTodos() {
  const DEFAULT_TODOS: ITodo[] = [
    { id: v4(), value: 'Drink water', isComplete: true },
    { id: v4(), value: 'Fix the broken computer', isComplete: false },
    { id: v4(), value: 'Clean the house', isComplete: false },
    { id: v4(), value: 'Update PowerPoint Slides', isComplete: false },
  ];

  const filter = useLocalStorage<Filter>('filter', 'all');
  const todos = useLocalStorage<ITodo[]>('todos', DEFAULT_TODOS);

  const filteredTodos = computed<ITodo[]>(() => {
    switch(filter.value) {
      case 'complete':
        return todos.value.filter((todo) => todo.isComplete);
      case 'incomplete':
        return todos.value.filter((todo) => !todo.isComplete);
    default:
        return todos.value;
    }
  });

  function addTodo(value: string): void {
    const newTodo: ITodo = {
      id: v4(),
      value,
      isComplete: false,
    };

    todos.value.push(newTodo);
  }

  function deleteTodoById(id: string): void {
    const index: number = todos.value.findIndex((todo) => todo.id === id);

    if(index !== -1) todos.value.splice(index, 1);
  }

  return {
    filter,
    filteredTodos,
    addTodo,
    deleteTodoById,
  };
}
