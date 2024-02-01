import { useTodoList } from "../../contexts/CompletedTasksContext";

export const CompletedCounted = ({}) => {
  const { toDoList } = useTodoList();

  const completedTasks = toDoList.filter((todo) => todo.isCompleted);
  const uncompletedTasks = toDoList.filter((todo) => !todo.isCompleted);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2>Completos:</h2>
        <div>
          <p>{completedTasks.length}</p>
        </div>
      </div>

      <div>
        <h2>Incompletos:</h2>
        <div>
          <p>{uncompletedTasks.length}</p>
        </div>
      </div>
    </div>
  );
};
