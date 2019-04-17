import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          Hello! <span role="img" aria-label="waving hand" />
        </h1>
        <div>
          My name is Ivana and I am a full-stack developer in Bratislava. <br />
          You can check out my{' '}
          <a href="https://github.com/ivanahuckova" target="_blank" rel="noopener noreferrer">
            github
          </a>
          ,{' '}
          <a href="https://twitter.com/ivanahuckova" target="_blank" rel="noopener noreferrer">
            twitter
          </a>{' '}
          and{' '}
          <a href="https://www.linkedin.com/in/ivana-huckova/" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
