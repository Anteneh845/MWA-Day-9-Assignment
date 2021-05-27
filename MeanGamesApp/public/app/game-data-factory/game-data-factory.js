angular
    .module("meanGames")
    .factory("GameDataFactory", GameDataFactory);

function GameDataFactory($http) {
    return {
        getGameList: () => getGameList($http),
        createNewGame: (game) => createNewGame(game, $http),
        getGameById: (gameId) => getGameById(gameId, $http),
        deleteGameById: (gameId) => deleteGameById(gameId, $http)
    }
}

const deleteGameById = (gameId, $http) => {
    return $http.delete("/api/games/" + gameId)
        .then(complete)
        .catch(failed)
}

const getGameById = (gameId, $http) => {
    return $http.get("/api/games/" + gameId)
        .then(complete)
        .catch(failed)
}
const createNewGame = (game, $http) => {
    return $http.post("/api/games/", game)
        .then(complete)
        .catch(failed)
}
const getGameList = ($http) => {
    return $http.get("/api/games")
        .then(complete)
        .catch(failed)
}

const complete = (response) => {
    return response.data;
}

const failed = (error) => {
    console.log(error);
}