function UserForm() {
    const nameField = React.useRef(null);

    function send() {
        // свойство current указывает на элемент input
        const inputMaterial = nameField.current;
        console.log("Name: " + inputMaterial.value);
    }

    return (
        <div>
            <input type="text" ref={nameField} />
            <button onClick={send}>Send</button>
        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <UserForm />
);


const root = ReactDOM.createRoot(
    document.getElementById("app")
);

function UserForm() {
    const[name, setName] = React.useState("Tom");

    React.useEffect(() => {
        const userName = localStorage.getItem("userName");

        if(userName !== null) {
            setName(userName);
            console.log("Got");
        }

        return() => {
            console.log(name);
            localStorage.setItem("userName", name);
            console.log("Saved!");
        }
    },
    [])

    function changeName(event) {
        setName(event.target.value);
    }
    function unmount() {
        root.unmount();
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <div>
                <p>Name <input type="text" value={name} onChange={changeName} /></p>
                <button onClick={unmount}>Unmount</button>
            </div>
        </div>
    );
}

root.render(
    <UserForm />
);


const roots = ReactDOM.createRoot(
    document.getElementById("app")
);

function UserForm() {
    const[name, setName] = React.useState("Tom");
    const nameRef = React.useRef(name);

    React.useEffect(() => {
        nameRef.current = name;
    }, [name]);

    React.useEffect(() => {
        const userName = localStorage.getItem("userName");

        if(userName !== null) {
            setName(userName);
            console.log("Got!");
        }

        return() => {
            console.log(nameRef.current);
            localStorage.setItem("userName", nameRef.current);
            console.log("Saved!");
        }
    }, 
    []);

    function changeName(event) {
        setName(event.target.value);
    }
    function unmount() {
        return roots.unmount();
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <div>
                <p>Name: <input type="text" value={name} onChange={changeName}/></p>
                <button onClick={unmount}>Unmount</button>
            </div>
        </div>
    );
}

roots.render(
    <UserForm />
);