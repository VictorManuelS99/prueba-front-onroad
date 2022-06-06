import { useState } from "react";

export const useForm = <T extends object>() => {
  const [values, setValues] = useState<T>({} as T);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
  };
};
