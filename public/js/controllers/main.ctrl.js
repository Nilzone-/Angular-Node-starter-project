(function() {
    angular
        .module('MyApp')
        .controller('MainController', MainController);
    
    MainController.$inject = [];
    
    function MainController() {
        var vm = this;
        
        vm.title = 'Starter Project';
    }
    
})();