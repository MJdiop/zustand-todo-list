/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export const useForm = (callback: any, initialState: { text: string }) => {
  const [value, setValue] = useState(initialState);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    e.preventDefault();
    callback();
  };

  return {
    value,
    onChange,
    onSubmit,
  };
};
