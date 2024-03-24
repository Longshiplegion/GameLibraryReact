import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GamesService from './services/GameService';

const UpdateGame = () => {
    const [gameId, setGameId] = useState('');
    const [game, setGame] = useState({
        id: '',
        name: '',
        release_date: '',
        developer: '',
        publisher: ''
    });

    useEffect(() => {
        fetchGame();
    }, [gameId]);

    const fetchGame = async () => {
        try {
            const gameData = await GamesService.getGameById(gameId);
            setGame(gameData);
        } catch (error) {
            console.error('Error fetching game:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGame({ ...game, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await GamesService.updateGame(gameId, game);
            // Optionally, you can redirect to another page or show a success message
        } catch (error) {
            console.error('Error updating game:', error);
        }
    };

    return (
        <div>
            <h2>Update Game</h2>
            <label htmlFor="gameId">Game ID:</label>
            <input type="text" id="gameId" name="gameId" value={gameId} onChange={(e) => setGameId(e.target.value)} required />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={game.name} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="release_date">Release Date:</label>
                    <input type="text" id="release_date" name="release_date" value={game.release_date} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="developer">Developer:</label>
                    <input type="text" id="developer" name="developer" value={game.developer} onChange={handleInputChange} required />
                </div>
                <div>
                    <label htmlFor="publisher">Publisher:</label>
                    <input type="text" id="publisher" name="publisher" value={game.publisher} onChange={handleInputChange} required />
                </div>
                <button type="submit">Update Game</button>
            </form>
        </div>
    );
};

export default UpdateGame;