import React, { useState, useEffect } from 'react';
import GamesService from './services/GameService';

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const gamesData = await GamesService.getAllGames();
            setGames(gamesData);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    return (
        <div>
            <h2>Games</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        {game.name} - {game.release_date} - {game.developer} - {game.publisher}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Games;