const BASE_URL = 'http://localhost:3000'; // Replace with your backend API URL

const GamesService = {
    async getAllGames() {
        const response = await fetch(`${BASE_URL}/games`);
        return response.json();
    },

    async getGameById(id) {
        const response = await fetch(`${BASE_URL}/games/${id}`);
        return response.json();
    },

    async addGame(game) {
        const response = await fetch(`${BASE_URL}/games`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        });
        return response.json();
    },

    async updateGame(id, game) {
        const response = await fetch(`${BASE_URL}/games/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        });
        return response.json();
    },

    async deleteGame(id) {
        const response = await fetch(`${BASE_URL}/games/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    },
};

export default GamesService;
