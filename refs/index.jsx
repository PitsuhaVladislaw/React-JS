class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Tomi"}

        this.nameField = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.nameField);
        let name = this.nameField.current.value;
        alert("Name: " + name);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input ref={this.nameField} />
            <input type="submit" value="Send" />
        </form>
    };

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input defaultValue={this.state.name} ref={this.nameField} />
            <input type="submit" value="Send" />
        </form>
    };
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <UserForm />
);


class NameField extends React.Component {
    constructor(props) {
        super(props);

        let isValid = this.validate(props.value);
        this.state = { value: props.value, valid: isValid };
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
        return val.length > 2;
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);

        this.setState({ value: val, valid: isValid });
    }
    render() {
        let color = this.state.valid === true ? "green" : "red";

        return <p>
            <label>Имя:</label><br />
            <input type="text" value={this.state.value} onChange={this.onChange} style={{ borderColor: color }} />
        </p>;
    }
}

class AgeField extends React.Component {

    constructor(props) {
        super(props);
        let isValid = this.validate(props.value);

        this.state = { value: props.value, valid: isValid };
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
        return val >= 0;
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);

        this.setState({ value: val, valid: isValid });
    }
    render() {
        let color = this.state.valid === true ? "green" : "red";

        return <p>
            <label>Возраст:</label><br />
            <input type="number" value={this.state.value} onChange={this.onChange} style={{ borderColor: color }} />
        </p>;
    }
}

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.nameField = React.createRef();
        this.ageField = React.createRef();
    }
    handleSubmit(e) {
        e.preventDefault();
        let name = this.nameField.current.state.value;
        let age = this.ageField.current.state.value;
        
        if (this.nameField.current.state.valid && this.ageField.current.state.valid) {
            alert(`Имя: ${name} Возраст: ${age}`);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <NameField value="" ref={this.nameField} />
                <AgeField value="5" ref={this.ageField} />
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <UserForm />
);