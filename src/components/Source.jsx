import React from 'react';


export default class Source extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: '🧬',
            name: 'Test source: a Long Title',
            yearPublished: 1999,
            authors: ['Bodd et al.'],
            numStars: 2,
            tags: ['Data', 'Biology']
        }
    }

    getStars() {
        return '⭐'.repeat(this.state.numStars);
    }

    getAuthors() {
        const authors = this.state.authors;

        switch (authors.length) {
            case 0: 
                return '';
            case 1:
                return authors[0];
            case 2:
                return `${authors[0]} and ${authors[1]}`;
            default:
                return `${authors[0]} et al.`;
        }
    }


    getTags() {
        return this.state.tags.map(tagName => <p>{tagName}</p>);
    }


    render() {
        return (
            <>
                <h1>{`${this.state.name} (${this.state.yearPublished})`}</h1>
                <h2>{this.getAuthors()}</h2>
                <h2>{this.getStars()}</h2>
                {this.getTags()}
            </>
        );
    }
}