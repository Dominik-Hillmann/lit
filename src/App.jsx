import logo from './logo.svg';
import './App.css';

// import './components/ExampleFlow';
import ExampleFlow from './components/ExampleFlow';
import ExampleFlow2 from './components/ExampleFlow2';
import Sidebar from './components/Sidebar';
import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            graphId: 'graph-1',
            displayedGraph: <ExampleFlow />
        };
    }

    changeProject(graphId) {
        console.log('Parent method called');

        if (graphId === 'graph-1') {
            console.log('To graph 2');
            this.setState({
                graphId: 'graph-2',
                displayedGraph: <ExampleFlow2 />
            });
            
        } else if (graphId === 'graph-2') {
            console.log('To graph 1');

            this.setState({
                graphId: 'graph-1',
                displayedGraph: <ExampleFlow />
            });
        }
    }

    getCurrentGraph() {
        return this.state.displayedGraph;
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
                <Sidebar changeProject={this.changeProject.bind(this) /* .bind very important */} />
                {this.getCurrentGraph()}
            </div>
        );
    }
}
