import React, { ChangeEvent, FormEvent, useState } from "react";

export type AddTodo = (newTodo: string) => void;

export default function TodoForm(addTodo: AddTodo) {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="">
      <input
        type="text"
        value={newTodo}
        className=""
        placeholder="新增代办事项"
        onChange={handleChange}
      ></input>
      <button type="submit" className="" onClick={handleSubmit}>
        新增
      </button>
    </form>
  );
}
