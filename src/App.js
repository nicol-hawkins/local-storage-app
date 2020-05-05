import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="small-container">
        <h1>New Tab App</h1>
        <form>
          <input id="item" type="text" placeholder="New" required />
        </form>
        <h2>Items</h2>
        <ul></ul>

        <button>Clear All</button>
      </div>
    </div>
  );
}

export default App;
