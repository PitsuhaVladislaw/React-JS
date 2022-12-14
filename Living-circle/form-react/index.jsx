class UserForm extends React.Component {
            constructor(props) {
                super(props);
                this.state = {name: ""};

                this.onChange = this.onChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
            }

            onChange(element) {
                let val = element.target.value;
                this.setState({name: val});
            }
            handleSubmit(element) {
                element.preventDefault();
                alert("Name: " + this.state.name);
            }

            render() {
                return (
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <label>Name: </label> <br />
                            <input type="text" value={this.state.name} onChange={this.onChange} />
                        </p>
                        <input type="submit" value="Send" />
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