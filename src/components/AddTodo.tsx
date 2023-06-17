/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Spinner } from '@material-tailwind/react';

export default function AddTodo({
  addTodo,
  value,
  onChange,
  loading,
}: {
  addTodo: (e: any) => void;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  loading: boolean;
}) {
  return (
    <>
      <Input
        name="text"
        label="Content"
        value={value}
        onChange={onChange}
        className="w-full mb-8"
      />

      <Button
        size="sm"
        color={value ? 'blue' : 'blue-gray'}
        disabled={!value || loading}
        className="!absolute right-1 top-1 rounded"
        onClick={addTodo}
      >
        {!loading ? 'Add' : <Spinner className="h-4 w-4" />}
      </Button>
    </>
  );
}
