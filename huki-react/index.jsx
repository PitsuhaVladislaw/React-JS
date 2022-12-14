///Classical method React with Class

class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};

        this.press = this.press.bind(this);
    }

    incrementCounter(prevState, props) {
        return {
            counter: prevState.counter + props.increment
        };
    }
    press() {
        this.setState(this.incrementCounter)
    }

    render() {
        return <div>
                <button onClick={this.press}>Count</button>
                <div>Counter:{this.state.counter} <br /> Increment:{this.props.increment}</div>
            </div>
    };
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <ClickButton increment={2}/>
);


///React method with Hooks

function ClickButtonHook(props) {
    const[count, setCount] = React.useState(0);
    const press = function() {
        setCount(count + props.increment);
    };

    return (
        <div>
            <button onClick={press}>Send</button>
            <div>Counter: {count} <br /> Increment: {props.increment}</div>
        </div>
    )
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <ClickButtonHook increment={2}/>
);

import React, { useState } from "react";

function ClickButtonNewHook(props) {
    const[count, setCount] = React.useState(0);
    const press = () => setCount(count + props.increment);

    return (
        <div>
            <button onCLick={press}>Send</button>
            <div>Counter: {count} <br /> Increment: {props.increment}</div>
        </div>
    );
}

function ClickButtonHook(props) {
    const[count, setCount] = React.useState(0);
    const press = function() {
        setCount(count + props.increment);
    }

    return (
        <div>
            <button onClick={press}>Send</button>
            <div>Counter: {count} <br /> Increment: {props.increment}</div>
        </div>
    );
}

const ClickButtonHook = (props) => {
    const[count, setCount] = React.useState(0);
    const press = () => setCount(count + props.increment);

    return (
        <div>
            <button onClick={press}>Send</button>
            <div>Counter: {count} <br /> Increment: {props.increment}</div>
        </div>
    );
}