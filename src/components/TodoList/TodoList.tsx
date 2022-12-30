import React from "react";
import TodoListItem, {
  EditTodo,
  RemoveTodo,
  Todo,
  ToggleComplete,
} from "../TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export default function TodoList({
  todos,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}
