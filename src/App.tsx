import { ChangeEvent, useState } from 'react';

import useTodoStore from './store';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { Card } from '@material-tailwind/react';
import { useForm } from './hooks/useForm';

function App() {
  const todos = useTodoStore((state) => state.todos);

  const handleAddTodo = useTodoStore((state) => state.addTodo);
  const handleToggleAllTodos = useTodoStore((state) => state.toggleAll);
  const handleClearCompletedTodos = useTodoStore((state) => state.clearDone);

  const [loading, setLoading] = useState(false);

  function handleClick(e: ChangeEvent<HTMLInputElement>) {
    onSubmit(e);
  }

  const onAdd = async () => {
    setLoading(true);
    setTimeout(async () => {
      await handleAddTodo({
        id: todos.length + 1,
        text: value.text,
        done: false,
      });
      value.text = '';
      setLoading(false);
    }, 500);
  };

  const { value, onChange, onSubmit } = useForm(onAdd, {
    text: '',
  });

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <h1 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit antialiased">
        Zustand Todo List
      </h1>

      <Card className="w-96 my-8">
        <AddTodo
          addTodo={handleClick}
          value={value?.text}
          onChange={onChange}
          loading={loading}
        />
      </Card>

      {todos.length ? (
        <Card className="w-96">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Card>
      ) : (
        <p className="text-center">No todos yet</p>
      )}

      {todos.length > 0 && (
        <div className="font-normal flex justify-between items-center w-96 mt-4">
          <div
            className="cursor-pointer text-gray-500 hover:text-gray-600 transition-all duration-150"
            children="Toggle all"
            onClick={handleToggleAllTodos}
          />

          <div
            className="cursor-pointer text-gray-400 hover:text-gray-600 transition-all duration-150"
            onClick={handleClearCompletedTodos}
            children="Clear completed"
          />
        </div>
      )}
    </div>
  );
}

export default App;
