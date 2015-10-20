angular
    .module('public', ['ngRoute', 'firebase'])
    .run(['$rootScope', function($rootScope) {
        
        console.log('running');

    }])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: '/public/modules/home/index.html',
            controller: 'home.ctrl'
        }).otherwise({
            redirectTo: '/'
        });

    }]);

