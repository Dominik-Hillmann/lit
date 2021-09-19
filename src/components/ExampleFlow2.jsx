import React from 'react';
import ReactFlow from 'react-flow-renderer';
import '../css/ExampleFlow.css';

const elements = [
    {
        id: '1',
        type: 'input', // input node
        data: { label: 'Hallo Node' },
        position: { x: 210, y: 250 },
    }, {
        id: '2',
        // you can also pass a React component as a label
        data: { label: <div>Hihihi Node</div> },
        position: { x: 10, y: 200 },
    }, {
        id: '3',
        type: 'output', // output node
        data: { label: 'Moin Node' },
        position: { x: 270, y: 20 },
    }, {
        id: '4',
        data: { label: <h1>Das ist ein Test</h1> },
        position: { x: 50, y: 50 },
    }, 
    // animated edge
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e1-4', source: '1', target: '4', animated: true },
    { id: 'e2-4', source: '2', target: '4', animated: true },
];


// IMPORTANT: onDragStart
export default () => (
    <div id="ex">
        <ReactFlow elements={elements} onDragStart={() => false} />
    </div>
);