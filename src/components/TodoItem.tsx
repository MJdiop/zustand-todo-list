import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSuffix,
} from '@material-tailwind/react';
import { TrashIcon } from '@heroicons/react/24/solid';
import useTodoStore, { Todo } from '../store';

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const handleToggleTodo = useTodoStore((state) => state.toggleTodo);
  const handleDeleteTodo = useTodoStore((state) => state.removeTodo);

  return (
    <>
      <List>
        <ListItem ripple={false} className="py-1 pr-1 pl-4">
          <Checkbox
            name="done"
            checked={todo.done}
            onChange={() => handleToggleTodo(todo)}
            ripple={true}
          />

          <span className={`${todo.done && 'line-through'}`}>{todo.text}</span>
          <ListItemSuffix>
            <IconButton variant="text" color="blue-gray">
              <TrashIcon
                onClick={() => handleDeleteTodo(todo)}
                className="h-5 w-5"
                color="red"
              />
            </IconButton>
          </ListItemSuffix>
        </ListItem>
      </List>
      <hr />
    </>
  );
}
