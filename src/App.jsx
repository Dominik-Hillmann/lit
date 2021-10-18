import React from 'react';
import './App.css';

// import './components/ExampleFlow';
import ExampleFlow from './components/ExampleFlow';
import ExampleFlow2 from './components/ExampleFlow2';
import Sidebar from './components/Sidebar';;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphId: 'graph-1',
            displayedGraph: <ExampleFlow />
        };
    }


    changeProject(graphId) {
        if (graphId === 'graph-1') {
            this.setState({
                graphId: 'graph-2',
                displayedGraph: <ExampleFlow2 />
            });
            
        } else if (graphId === 'graph-2') {
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
                <Sidebar changeProject={this.changeProject.bind(this) /* .bind very important */} />
                {this.getCurrentGraph()}
            </div>
        );
    }
}
