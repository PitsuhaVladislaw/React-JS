/*
function Hello() {
    return <h1>HEllo React</h1>;
}

class Hello extends React.Component {
    render() {
        return <h1>Hello React</h1>
    }
}

let Hello = () => {
    return (<h1>Hello React</h1>);
}
*/

function Hi() {
    return <h1>Hello, Engene</h1>;
}

ReactDOM
    .createRoot(document.getElementById("app"))
    .render(
        <Hi />
    );