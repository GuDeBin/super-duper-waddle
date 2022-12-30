import React, { useState } from "react";
import Dropdown, { Option } from "../Dropdown";

export type Todo = {
  text: string;
  complete: boolean;
};

export type ToggleComplete = (selectedTodo: Todo) => void;

export type RemoveTodo = (todoToRemove: Todo) => void;

export type EditTodo = (todoToEdit: Todo) => void;

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export default function TodoListItem({
  todo,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}: TodoListItemProps) {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const onEdit = () => {
    console.log("edit");
  };

  const onTodoUpdate = (e: any) => {
    let text = e.target.value;
    setInputText(text);
    editTodo(text);
  };

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    },
  ];

  return (
    <li className="edit-input">
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        ></input>
        {isEditOn ? (
          <input
            className=""
            type="text"
            value={inputText}
            onChange={(e) => onTodoUpdate(e)}
          ></input>
        ) : (
          todo.text
        )}
      </label>
      <Dropdown options={dropdownOptions} />
    </li>
  );
}
