import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './comp/Header'; // Make sure you have a Header component
import AddPlayer from './comp/AddPlayer'; // Import your AddPlayer component
import UpdatePlayer from './comp/UpdatePlayer'; // Import your UpdatePlayer component
import DeletePlayer from './comp/DeletePlayer'; // Import your DeletePlayer component
import PlayerList from './comp/PlayerList'; // Import your PlayerList component

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<div className="App">
                    <h1>Player List</h1>
                    <PlayerList />
                </div>} />
                <Route path="/add" element={<AddPlayer />} />
                <Route path="/update" element={<UpdatePlayer />} />
                <Route path="/delete" element={<DeletePlayer />} />
            </Routes>
        </Router>
    );
}

export default App;
