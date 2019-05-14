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
          My name is Ivana and I am a javascript developer in Bratislava. <br />
          You can check out my{' '}
          <a href="https://github.com/ivanahuckova" target="_blank" rel="noopener noreferrer">
            github
          </a>
          ,{' '}
          <a href="https://twitter.com/ivanahuckova" target="_blank" rel="noopener noreferrer">
            twitter
          </a>
          ,{' '}
          <a href="https://www.linkedin.com/in/ivana-huckova/" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>{' '}
          and{' '}
          <a href="https://medium.com/@ivanahuckova" target="_blank" rel="noopener noreferrer">
            medium
          </a>
          . <br />
          Currently I am working on project <a href="https://www.hackersalt.com">hackersalt</a> 🧂.
          <br />
          Email me at <a href="mailto: hello@ivanahuckova.com">hello@ivanahuckova.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;
