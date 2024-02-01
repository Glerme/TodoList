import { useState } from "react";
import { useTodoList } from "../../contexts/CompletedTasksContext";

export const Todo = ({}) => {
  const { toDoList, addTodo, completedTasks, removeTodo } = useTodoList();

  const [inputTodo, setInputTodo] = useState<string>("");

  return (
    <>
      <div>
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          style={{
            marginRight: "1rem",
          }}
        />

        <button
          onClick={() => {
            addTodo(inputTodo);
            setInputTodo("");
          }}
        >
          Add
        </button>
      </div>

      <div>
        <ul>
          {toDoList.map((todo) => (
            <div
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <li>{todo.value}</li>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginLeft: "1rem",
                }}
              >
                <button onClick={() => removeTodo(todo.id)}>Excluir</button>

                <button
                  onClick={() => completedTasks(todo.id)}
                  style={{
                    marginLeft: "1rem",
                  }}
                >
                  {todo.isCompleted ? "Voltar a tasks" : "Completar"}
                </button>
              </div>

              <div
                style={{
                  marginLeft: "1rem",
                }}
              >
                {todo.isCompleted ? "Completo" : "Incompleto"}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
