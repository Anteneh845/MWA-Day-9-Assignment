angular
    .module("meanGuitars")
    .controller("AddGuitarController", AddGuitarController)

function AddGuitarController(GuitarDataFactory) {
    let vm = this;
    vm.addGuitarHandler = () => {
        if (vm.form.$valid) {
            let guitar = {
                year: vm.year,
                type: vm.type,
                link: vm.link,
                brand: vm.brand,
                stringType: vm.stringType,
            }
            console.log(vm)
            console.log(guitar)
            GuitarDataFactory
                .addGuitar(guitar)
                .then(() => location.href = "/#!/")
                .catch(err => console.log(err))
        }
    }
}