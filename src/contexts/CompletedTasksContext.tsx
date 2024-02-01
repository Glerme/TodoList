import { createContext, useContext, useState } from "react";
import { TodoList } from "../interfaces/toDoList";

interface CompletedTasksContextData {
  addTodo: (value: string) => void;
  removeTodo: (id: number) => void;
  toDoList: TodoList[];
  completedTasks: (id: number) => void;
}

export const CompletedTasksContext = createContext<CompletedTasksContextData>({
  addTodo: () => {},
  removeTodo: () => {},
  toDoList: [],
  completedTasks: () => {},
});

export const CompletedTasksProvider = ({ children }: any) => {
  const [toDoList, setTodoList] = useState<TodoList[]>([]);

  const addTodo = (value: string) => {
    const newTodo = {
      id: Math.random() * 1000,
      value,
      isCompleted: false,
    };

    setTodoList((state) => [...state, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodoList((state) => state.filter((todo) => todo.id !== id));
  };

  const completedTasks = (id: number) => {
    setTodoList((state) => {
      return state.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }

        return todo;
      });
    });
  };

  return (
    <CompletedTasksContext.Provider
      value={{
        toDoList,
        addTodo,
        removeTodo,
        completedTasks,
      }}
    >
      {children}
    </CompletedTasksContext.Provider>
  );
};

export const useTodoList = () => useContext(CompletedTasksContext);
