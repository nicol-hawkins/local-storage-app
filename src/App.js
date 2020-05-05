import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const form = document.querySelector('form')
  const ul = document.querySelector('ul')
  const button = document.querySelector('button')
  const input = document.getElementById('item')

  const liGenerator = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  };

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
