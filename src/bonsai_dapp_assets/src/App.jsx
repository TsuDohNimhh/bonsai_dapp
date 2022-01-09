import React from 'react';
import "../assets/main.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
}

function Home () {
    return (
        <div className="App">
            
        </div>
    )
}

export default App;