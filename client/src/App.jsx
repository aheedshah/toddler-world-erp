import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState();

    useEffect(() => {
        // Fetch data from the server when the component mounts
        fetch('http://localhost:4000/api/details/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="App">
            {data && <h1>Hello {data[0].name}</h1>}
        </div>
    );
}

export default App;
