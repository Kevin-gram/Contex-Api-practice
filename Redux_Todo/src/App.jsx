import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/AddTodoForm";
function App() {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
      {/* <TotalCompleteItems /> */}
    </div>
  );
}

export default App;
