import React, { useState } from 'react';
import GamesService from './services/GameService';

const AddGame = () => {
    const [newGame, setNewGame] = useState({
        name: '',
        release_date: '',
        developer: '',
        publisher: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewGame({ ...newGame, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await GamesService.addGame(newGame);
            // Optionally, you can redirect the user or show a success message
        } catch (error) {
            console.error('Error adding game:', error);
        }
    };

    return (
        <div>
            <h2>Add Game</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={newGame.name} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="release_date">Release Date:</label>
                    <input type="text" id="release_date" name="release_date" value={newGame.release_date} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="developer">Developer:</label>
                    <input type="text" id="developer" name="developer" value={newGame.developer} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="publisher">Publisher:</label>
                    <input type="text" id="publisher" name="publisher" value={newGame.publisher} onChange={handleInputChange} required />
                </div>
                <button type="submit">Add Game</button>
            </form>
        </div>
    );
};

export default AddGame;
