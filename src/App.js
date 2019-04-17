import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          Hello!{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <div>
          My name is Ivana and I am a full-stack developer in Bratislava. <br />
          You can check out my work <a href="https://github.com/ivanahuckova">here</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
