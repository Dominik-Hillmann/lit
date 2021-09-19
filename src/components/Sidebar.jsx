import React from 'react';
import '../css/Sidebar.css';

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.handleProject1.bind(this);
    }
    
    handleProject1() {
        console.log('Test 1');
        this.props.changeProject('graph-2');
    }

    handleProject2() {
        console.log('Test 2');
        this.props.changeProject('graph-1');
    }


    render() {
        return (
            <nav>
                <p
                    onClick={() => this.handleProject1()}
                >
                    Test project 1
                </p>
                <p
                    onClick={() => this.handleProject2()}
                >
                    Test project 2
                </p>
            </nav>
        );
    }
}