function Hello(props) {
    return <div>
        <p>Name is {props.name}</p>
        <p>Age: {props.age}</p>
    </div>;
}

class Hello extends React.Component {
    render() {
        return <div>
            <p>Name is {this.props.name}</p>
            <p>Age: {this.props.age}</p>
        </div>;
    }
}

const Hello = (props) => {
    const {name, age} = props;
    return(<div>
            <p>Имя: {name}</p>
            <p>Возраст: {age}</p>
        </div>);
}

function Hello(props) {
            return <div>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
            </div>;
        }

        ReactDOM
            .createRoot(
                document.getElementById("app")
            )
            .render(
                <Hello name="Tom" age="33"/>
            );