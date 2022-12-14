const rootNode = document.getElementById('app');
    const root = ReactDOM.createRoot(rootNode);
    root.render(
        <h1>Hello, React</h1>
    );

ReactDOM
    .createRoot(document.getElementById('app'))
    .render(
        <h2>2 + 2 = {2 + 2}</h2>
    );


const user = {
    id: 5,
    age: 23,
    firstName: 'Tom',
    lastName: 'Ditl',

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

ReactDOM
    .createRoot(document.getElementById('app'))
    .render(
        <div id={user.id}>
            <p>Name is {user.getFullName()}</p>
            <p>Age: {user.age} </p>
            <p>Generatiom's time: {new Date().toLocaleTimeString()}</p>
        </div>
    );


