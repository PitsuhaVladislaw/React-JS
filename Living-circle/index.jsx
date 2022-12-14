class ClickButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Click"};

        this.press = this.press.bind(this);

        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps()");
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount()");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount()");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate()");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate()");
        return null;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }

    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        this.setState({class: className});
    }
    render() {
        console.log("render()");
        return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
    }
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <ClickButton />
)


const root = ReactDOM.createRoot(
    document.getElementById("app")
);

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), name: "Tom"};
        this.unmount = this.unmount.bind(this);
    }

    unmount() {
        root.unmount();
    }
    
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 
            1000
        );
        console.log("componentDidMount()")
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
        console.log("componentWillUnmount()");
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.state.name}</h1>
                <h2>Time is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.unmount}>Unmount</button>
            </div>
        );
    }
}

root.render(
    <Clock />
)