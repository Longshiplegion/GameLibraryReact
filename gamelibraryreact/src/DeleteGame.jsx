import React, { useState, useEffect } from 'react';
import GamesService from './services/GameService';

const DeleteGame = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const response = await GamesService.getAllGames();
            setGames(response);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await GamesService.deleteGame(id);
            // Optionally, you can refresh the list of games or show a success message
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    };

    return (
        <div>
            <h2>Delete Game</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        {game.name} - {game.release_date} - {game.developer} - {game.publisher}
                        <button onClick={() => handleDelete(game.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteGame;
