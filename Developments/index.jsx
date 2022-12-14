const rootNode = document.getElementById("app")

const root = ReactDOM.createRoot(rootNode);
root.render(
        <h1>Hello React</h1>,
    );

    function ClickButton(props) {
            function press() {
                alert("Hello React")
            }

            return <button onClick ={press}>Click </button>
        }
    
    ReactDOM
            .createRoot(document.getElementById("app"))
            .render(
                <ClickButton />
            )

    class ClickButton extends React.Component {
            constructor(props) {
                super(props);

                this.press = this.press.bind(this);
            }

            press() {
                console.log(this);
                alert("Hello React");
            }
            render() {
                return <button onClick={this.press}> Click </button>
            }
        }

    function ClickButton(props) {
            function press(e) {
                console.log(e);// выводим информацию о событии
                alert("Hello React!");
            }

            return <button onClick ={press}> Click </button>
        }

    class ClickButton extends React.Component {
            constructor(props) {
                super(props);
                this.press = this.press.bind(this);
            }

            press(e) {
                console.log(e);
                alert("Hello React!");
            }
            render() {
                return <button onClick={this.press}> Click </button>;
            }
        }

    function PrintButton(props) {
            function print(name, age) {
                console.log(`Name: ${name}, Age: ${age}`);
            }

            return <div>
                    <button onClick={() => print("Bob", 24)}> Print Bob </button>
                    <button onClick={() => print("Kai", 27)}> Print Kai </button>
                </div>;
        }

    class PrintButton extends React.Component {
            constructor(props) {
                super(props);
                this.print = this.print.bind(this);
            }

            print(name, age) {
                alert(`Name: ${name}, Age: ${age}`);
            }
            render() {
                return <div>
                    <button onClick={() => this.print("Ezio", 28)}> Print Ezio </button>
                    <button onClick={() => this.print("Tom", 36)}> Print Tom </button>
                </div>;
            }
        }

        ReactDOM
            .createRoot(document.getElementById("app"))
            .render(
                <PrintButton />
            )