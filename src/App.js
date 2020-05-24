import React from 'react';
import './App.scss';
import person from './imgs/person.svg';

function App() {
    return (
        <div className="App">
                <div className="person-container">
                    <img className="person" src={person} alt="person" />
                </div>
                <div className="content">
                    <h1>Hello!</h1>
                    <div>
                        My name is Ivana and I am a Fullstack Developer in Bratislava working at Grafana <span role="img" aria-label="heart">🧡</span>. You can check out my{' '}
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
                        . Some of the project that I've been working on -
                        <a href="https://www.toxichacker.com" target="_blank" rel="noopener noreferrer">
                            {' '}toxic hackers
                        </a>{' '}
                        and{' '}
                        <a href="https://pinely.app" target="_blank" rel="noopener noreferrer">
                            pinely
                        </a>
                        . I am currently availabe for hire.
                        <br />
                        Email me at <a href="mailto: hello@ivanahuckova.com">hello@ivanahuckova.com</a>
                    </div>
                </div>
            </div>
    );
}

export default App;
