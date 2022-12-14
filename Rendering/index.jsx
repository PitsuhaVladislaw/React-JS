/*
const rootNode = document.getElementById("app");

const root = ReactDOM.createRoot(rootNode);
root.render(
    <h1>Hello, React</h1>
) 
ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <div id="items">
            <h2>List of phones</h2>
            <ul>
                <li>Apple iPhone 12 Pro</li>
                <li>Samsung Galaxy S20</li>
                <li>Huawei P40 Pro</li>
                <li>Google Pixel 5</li>
            </ul>
        </div>,
    )
*/
ReactDOM
    .createRoot(document.getElementById("header"))
    .render(
        <h1>Hello, React</h1>
    );

ReactDOM
    .createRoot(document.getElementById("header"))
    .render(
        <div id="items">
            <h2>List of phones</h2>
            <ul>
                <li>Apple iPhone 12 Pro</li>
                <li>Samsung Galaxy S20</li>
                <li>Huawei P40 Pro</li>
                <li>Google Pixel 5</li>
            </ul>
        </div>
    );

const elem = ReactDOM.createRoot(document.getElementById("header"));

    function tick() {
        elem
        .render(
            <div>
                <h1>Сервис получения времени</h1>
                <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
    setInterval(tick, 1000);

    ReactDOM
        .createRoot(document.getElementById("container"))
        .render(
            <div>
                <h2>Начальное время {new Date().toLocaleTimeString()}.</h2>
            </div>
        );