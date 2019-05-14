import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>
          Hello!{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
        <div>
          My name is Ivana and I am a fullstack javascript developer in Bratislava. <br />
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
          . <br />I am currently working on this ❤️ project <a href="https://www.hackersalt.com">hackersalt</a>.
          <br />
          Email me at <a href="mailto: hello@ivanahuckova.com">hello@ivanahuckova.com</a>.
        </div>
      </div>
      <div className="svg-animation" />
    </div>
  );
}

export default App;
