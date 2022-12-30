import TodoForm, { AddTodo } from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import {
  EditTodo,
  RemoveTodo,
  Todo,
  ToggleComplete,
} from "@/components/TodoListItem";
import { useState } from "react";

export default function HomePage() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text !== todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  const editTodo: EditTodo = (todoToEdit) => {
    let todoToUpdateIndex: number = todos.findIndex(
      (todo) => todo.text === todoToEdit.text
    );
    console.log(todoToUpdateIndex);
  };
  return (
    <div className="todo-app">
      <header>
        <h1>Todo App</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
