angular
    .module('public')
    .controller('project.post.ctrl', ['$scope', function($scope) {
        console.log('Im here');

        $scope.testSubmit = function() {
            console.log('submitting'); 
        }
    }]); 