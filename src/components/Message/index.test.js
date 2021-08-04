
import React from 'react';
import ReactDOM from 'react-dom';
import Message from '.';
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test('message implement the component', () => {
    const item = {
        message: "test",
        priority: 1
    };

    act(() => {
        ReactDOM.render(<Message data={item} clear={() => {}} />, container);
    });
        
    const h6 = container.querySelector("h6");
    const button = container.querySelector("button span");
    expect(h6.textContent).toBe("test");
    expect(button.textContent).toBe("Clear");
})