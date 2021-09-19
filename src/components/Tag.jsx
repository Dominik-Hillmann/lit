import React from 'react';

import '../css/Tag.css';

export default class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.shownColor,
            name: this.props.children
        };
    }


    render() {
        return (
            <p 
                className="tag"
                style={{ backgroundColor: 'red' }}
            >
                {this.state.name}
            </p>
        );
    }
}