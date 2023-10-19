import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <TaskList />
    </div>
  );
}

export default App;
