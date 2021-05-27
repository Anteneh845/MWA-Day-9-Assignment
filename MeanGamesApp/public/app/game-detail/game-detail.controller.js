angular
    .module("meanGames")
    .controller("GameDetailController", GameDetailController);

function GameDetailController(GameDataFactory, $routeParams) {
    let vm = this;
    let gameId = $routeParams.gameId;
    GameDataFactory
        .getGameById(gameId)
        .then(resp=>vm.game = resp)
        .catch()
    vm.deleteGame = function(){
        GameDataFactory
            .deleteGameById(gameId)
            .then(()=>location.href="/#!/")
            .catch()
    }
}