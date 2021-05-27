angular
    .module("meanGames")
    .controller("NewGameController", NewGameController);

function NewGameController(GameDataFactory) {
    let vm = this;
    vm.isSubmitted = false;
    vm.createGameHandler = () => {
        if (vm.form.$valid) {
            let game = {
                title: vm.title,
                price: vm.price,
                rate: vm.rating,
                year: vm.year,
                minPlayers: vm.minPlayers,
                maxPlayers: vm.maxPlayers,
                minAge: vm.minAge,
                designers: vm.designers,
            }
            GameDataFactory.createNewGame(game)
                .then(() => location.href = '/#!/')
                .catch(err => console.log(err))
            console.log("Form is valid");
        } else {
            console.log("Form is not valid");
        }
    }
}