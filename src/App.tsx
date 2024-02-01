import "./App.css";
import { Todo } from "./components/Todo";
import { CompletedCounted } from "./components/CompletedCounted";
import { CompletedTasksProvider } from "./contexts/CompletedTasksContext";

function App() {
  return (
    <CompletedTasksProvider>
      <Todo />
      <CompletedCounted />
    </CompletedTasksProvider>
  );
}

export default App;
