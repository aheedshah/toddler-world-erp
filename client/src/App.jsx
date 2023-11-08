import './App.css';
import {useEffect, useState} from "react";
import {getTest} from "./functions/test";

function App() {
    const [data, setData] = useState("Hello World!");

    useEffect(() => {
        getTest()
            .then((res) => {
                setData(res.message);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <h1>Hello World</h1>
            <h1>{data}</h1>
        </div>
    );
}

export default App;
