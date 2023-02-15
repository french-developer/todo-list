import { v4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';
import { ITodo } from '@/types/todos';

export default function useTodos() {
  const DEFAULT_TODOS: ITodo[] = [
    { id: v4(), value: 'Drink water', isComplete: false },
    { id: v4(), value: 'Fix the broken computer', isComplete: false },
    { id: v4(), value: 'Clean the house', isComplete: false },
    { id: v4(), value: 'Update PowerPoint Slides', isComplete: false },
  ];

  const todos = useLocalStorage<ITodo[]>('todos', DEFAULT_TODOS);

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
    todos,
    addTodo,
    deleteTodoById,
  };
}
