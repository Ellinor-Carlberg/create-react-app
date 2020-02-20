import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my to-do app.</h1>
      <TodoList/>
    </div>
  );
}

export default App;



/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */