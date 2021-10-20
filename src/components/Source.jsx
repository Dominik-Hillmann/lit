import React from 'react';
import Tag from './Tag';

import '../css/Source.css';

export default class Source extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbol: '🧬',
            name: 'Test source: a Long Title',
            yearPublished: 1999,
            authors: ['Bodd et al.'],
            numStars: 2,
            tags: [
                {
                    name: 'Data',
                    color: 'red'
                }, {
                    name: 'Biology',
                    color: 'green'
                }
            ]
        }
    }


    getStars() {
        const coloredStarsContent = '⭐'.repeat(this.state.numStars);
        const coloredStars = <span>{coloredStarsContent}</span>;

        const greyStarsContent = '⭐'.repeat(3 - this.state.numStars);
        const greyStars = <span className="is-grey">{greyStarsContent}</span>;

        return [coloredStars, greyStars];
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
        return this.state.tags.map((tag, i) => {
            return <Tag key={i} shownColor={tag.color}>{tag.name}</Tag>;
        });
    }


    render() {
        return (
            <div className="label">
                <h1>{this.state.symbol}</h1>
                <h2>{`${this.state.name} (${this.state.yearPublished})`}</h2>
                
                <div className="subtitles">
                    <h3 className="authors">{this.getAuthors()}</h3>
                    <h3>{this.getStars()}</h3>
                </div>
                
                <div className="tags">{this.getTags()}</div>
            </div>
        );
    }
}
