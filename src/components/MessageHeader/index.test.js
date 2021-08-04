
import React from 'react';
import ReactDOM from 'react-dom';
import MessagesHeader from '.';
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

test('MessageHeader implement the component', () => {
    const item = {
        title: "Error Type 1",
        count: 1
    };

    act(() => {
        ReactDOM.render(<MessagesHeader title={item.title} count={item.count} />, container);
    });
        
    const h2 = container.querySelector("h2");
    const text = container.querySelector(".MuiTypography-subtitle1");
    expect(h2.textContent).toBe("Error Type 1");
    expect(text.textContent).toBe("Count 1");
})