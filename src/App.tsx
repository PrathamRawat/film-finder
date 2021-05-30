import React, {useState} from 'react';
import './App.css';

function App() {


    let searchQuery = useState("")

    const search = () => {

    }

    return (
        <div>
            <input type={"text"}/>
            <button onClick={search}>Search</button>
        </div>
    );
}

export default App;
