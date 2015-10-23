angular
    .module('public')
    .factory('firebaseFactory', ['$firebaseAuth', function($firebaseAuth) {
        var url = 'https://burlingtoncollective.firebaseio.com';
        var ref = new Firebase(url);

        var auth = $firebaseAuth(ref);

        return {
            ref: ref,
            auth: auth
        };
    }])