/** @format */

const { useState } = require("react");

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const updateState = () => {
    setValues(initialState);
  };

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChanges, updateState];
};
