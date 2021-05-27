angular
    .module("meanGames")
    .controller("GameListController", GameListController)

function GameListController(GameDataFactory) {
    let vm = this;
    GameDataFactory
        .getGameList()
        .then(response => vm.games = response)
}