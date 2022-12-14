class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { welcome: "Welcome to this site!" };
    }

    render() {
        return <h1>{this.state.welcome}</h1>;
    }
}
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <Hello />
);

this.setState({welcome: "Привет React"});


class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Click"};

        this.press = this.press.bind(this);
    }

    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({class: className});
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
    }
}
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <ClickButton />
)


///First option

class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0, class: "off", label: "Click"};

        this.press = this.press.bind(this);
    }

    press() {
        this.setState({counter: this.state.counter + parseInt(this.props.increment)});

        let className = (this.state.class == "off") ? "on" : "off";
        this.setState({class: className});
    }
    render() {
        return <div>
                <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
                <div> Counter: {this.state.counter} <br /> Increment: {this.props.increment} </div>
            </div>
    }
}

///Second option

class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0, class: "off", label: "Click"};

        this.press = this.press.bind(this);
    }

    incrementCounter(prevState, props) {
        return {
            counter: prevState.counter + parseInt(props.increment)
        };
    }

    press() {
        this.setState(this.incrementCounter);
        this.setState(this.incrementCounter);

        let className = (this.state.class == "off") ? "on" : "off";
        this.setState({class: className});
    }
    render() {
        return <div>
                <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
                <div> Counter: {this.state.counter} <br /> Increment: {this.props.increment} </div>
            </div>
    }
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <ClickButton increment="1" />
)