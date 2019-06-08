import React from 'react';
import './App.scss';
import person from './imgs/person.svg';

function App() {
    return (
        <div className="App svg-animation">
            <div className="container">
                <div className="heading">
                    <div className="person-container">
                        <img className="person" src={person} alt="person" />
                    </div>
                    <div className="content">
                        <h1>Hello!</h1>
                        <div>
                            My name is Ivana and I am a Fullstack JavaScript Developer in Bratislava. You can check out my{' '}
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
                            . I am currently working on{' '}
                            <a href="https://www.hackersalt.com" target="_blank" rel="noopener noreferrer">
                                hackersalt
                            </a>{' '}
                            and{' '}
                            <a href="https://pinely.app" target="_blank" rel="noopener noreferrer">
                                pinely.
                            </a>
                            <br />
                            <br />
                            Email me at <a href="mailto: hello@ivanahuckova.com">hello@ivanahuckova.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="svg-animation" />
        </div>
    );
}

export default App;
