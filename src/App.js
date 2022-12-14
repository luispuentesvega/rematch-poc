import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <Todo />
      <AddTodo />
    </div>
  );
}

export default App;
