import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Initials from './Initials';

function App() {
  const [section, setSection] = useState('home');
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <a href="#home" onClick={() => setSection('home')}>Home</a>
        <a href="#initials" onClick={() => setSection('initials')}>Initials</a>
      </nav>
      {section === 'home' && (
        <div>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      )}
      {section === 'initials' && (
        <section id="initials">
          <Initials />
        </section>
      )}
    </>
  );
}

export default App;
