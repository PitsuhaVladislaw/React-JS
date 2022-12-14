function User() {
    const[name, setName] = React.useState("Tom");

    React.useEffect(() => {
        document.title = `Hello, ${name}`;
    });

    function changeName(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Name: {name}</h3>

            <div>
                <p>
                    <input type="text" value={name} onChange={changeName} />
                </p>
            </div>
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <User />
);


//settings

function User() {
    const[name, setName] = React.useState("Tom");
    const[age, setAge] = React.useState(36);

    React.useEffect(() => {
        document.title = `Hello, ${name}`;
        console.log("useEffect");
    });

    function changeName(event) {
        setName(event.target.value);
    }
    function changeAge(event) {
        setAge(event.target.value);
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>

            <div>
                <p>
                    <input type="text" value={name} onChange={changeName} />
                </p>
                <p>
                    <input type="number" value={age} onChange={changeAge} />
                </p>
            </div>
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <User />
);


function User() {
    const[user, setUser] = React.useState({name: "Tom", age: 36});

    React.useEffect(() => {
        document.title = `Hello, ${user.name}`;
        console.log("useEffect");
    }, [user.name]);

    function changeName(event) {
        setUser({name: event.target.value, age: user.age});
    }
    function changeAge(event) {
        setUser({name: user.name, age: event.target.value});
    }

    return (
        <div>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>

            <div>
                <p>
                    <input type="text" value={user.name} onChange={changeName}/>
                </p>
                <p>
                    <input type="number" value={user.age} onChange={changeAge}/>
                </p>
            </div>
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <User />
);


const root = ReactDOM.createRoot(
    document.getElementById("app")
);

function User() {
    const [name, setName] = React.useState("Tom");
    const unmount = () => root.unmount();

    React.useEffect(() => {
        const unmountBtn = document.getElementById("unmountBtn");

        // подписываемся на событие onclick кнопки unmountBtn
        unmountBtn.addEventListener("click", unmount);
        console.log("EventListener added");

        return () => {
            // отписываемся от события
            unmountBtn.removeEventListener("click", unmount);
            console.log("EventListener removed");
        }
    },
        []); // эффект срабатывает только один раз - при самом первом рендеринге

    return (<div>
        <h3>Имя: {name}</h3>
        <p>Имя: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
    </div>);
}

root.render(
    <User />
);