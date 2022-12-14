function Counter() {
    const[count, setCount] = React.useState(0);
    let countStateArray = React.useState(0);
    let countAr = countStateArray[0];
    let setStateAr = countStateArray[1];

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    )
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <Counter />
);

///Destructuring

function User() {
    const[name, setName] = React.useState("Tom");
    const[age, setAge] = React.useState(36);

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <User />
)


function User() {
    const[name, setName] = React.useState("Tom");
    const[age, setAge] = React.useState(36);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>

            <div>
                <p>Name: <input type="text" value={name} onClick={handleNameChange}/> </p>
                <p>Age: <input type="number" value={age} onClick={handleAgeChange}/></p>
            </div>
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <User />
)


function UserData() {
    const[user, setUser] = React.useState({name: "Tom", age: 36});

    function handleNameChange(event) {
        setUser({name: event.target.value, age: user.age});
    }
    function handleAgeChange(event) {
        setUser({name: user.name, age: event.target.value});
    }

    return (
        <div>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>

            <div>
                <p>Name: <input type="text" value={user.name} onChange={handleNameChange}/> </p>
                <p>Age: <input type="number" min="0" max="110" value={user.age} onChange={handleAgeChange}/> </p>
            </div>
        </div>
    )
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <UserData />
)


function UserData() {
    const[user, setUser] = React.useState({name: "Tom", age: 36});

    function handleNameChange(event) {
        setUser({...user, name: event.target.value});
    }

    function handleAgeChange(event) {
        setUser({...user, age: event.target.value});
    }

    return (
        <div>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>

            <div>
                <p>Name: <input type="text" value={user.name} onChange={handleNameChange}/> </p>
                <p>Age: <input type="text" value={user.age} onChange={handleAgeChange}/> </p>
            </div>
        </div>
    )
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <UserData />
)