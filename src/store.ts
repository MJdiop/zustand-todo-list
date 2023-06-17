import { create } from 'zustand';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
export interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
  toggleAll: () => void;
  clearDone: () => void;
}

const useTodoStore = create<TodoStore>()((set) => ({
  todos: [
    { id: 1, text: 'Create a todo list', done: true },
    { id: 2, text: 'Add ability to edit todos', done: false },
    { id: 3, text: 'Style the todo list', done: false },
  ],
  addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo: Todo) => set((state) => ({ todos: state.todos.filter((t: Todo) => t !== todo) })),
  toggleTodo: (todo: Todo) => set((state) => ({ todos: state.todos.map((t: Todo) => (t === todo ? { ...t, done: !t.done } : t)) })),
  toggleAll: () => set((state) => ({ todos: state.todos.map((t: Todo) => ({ ...t, done: !state.todos.every((t: Todo) => t.done) })) })),
  clearDone: () => set((state) => ({ todos: state.todos.filter((t: Todo) => !t.done) })),

}));

export default useTodoStore;