angular
    .module("meanGames", ["ngRoute"])
    .config(appConfig);

function appConfig($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/game-list/game-list.html",
            controller: "GameListController",
            controllerAs: "gameListCtrl"
        })
        .when("/games/new",{
            templateUrl:"app/new-game/new-game.html",
            controller:"NewGameController",
            controllerAs: "newGameCtrl"
        })
        .when("/games/:gameId",{
            templateUrl:"app/game-detail/game-detail.html",
            controller: "GameDetailController",
            controllerAs: "gameDetailCtrl"
        })
        .otherwise({
            redirectTo: "/"
        })

}