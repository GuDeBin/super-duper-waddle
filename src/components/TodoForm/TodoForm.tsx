import React, { ChangeEvent, FormEvent, useState } from "react";

export type AddTodo = (newTodo: string) => void;

interface TodoFormProps {
  addTodo: AddTodo;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
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
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="新增代办事项"
        onChange={handleChange}
      ></input>
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        新增
      </button>
    </form>
  );
}
