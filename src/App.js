import logo from './logo.svg';
import './App.css';

// import './components/ExampleFlow';
import ExampleFlow from './components/ExampleFlow';
import Sidebar from './components/Sidebar';
import React from 'react';

class App extends React.Component {

    changeProject() {
        console.log('Parent method called');
    }


    render() {
        return (
            <div className="App">
                {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header> */}
                <Sidebar changeProject={this.changeProject} />
                <ExampleFlow />
            </div>
        );
    }
}

export default App;
