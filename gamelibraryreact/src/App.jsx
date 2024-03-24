import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Games from './Games';
import AddGame from './AddGame';
import UpdateGame from './UpdateGame';
import DeleteGame from './DeleteGame';

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/games">Game Library</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/games">Games</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add">Add Game</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/update">Update Game</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/delete">Delete Game</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/games" element={<Games />} />
                    <Route path="/add" element={<AddGame />} />
                    <Route path="/update" element={<UpdateGame />} />
                    <Route path="/delete" element={<DeleteGame />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
