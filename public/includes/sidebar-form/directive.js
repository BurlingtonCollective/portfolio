angular
    .module('public')
    .directive('sidebarForm', ['activeSidebarFactory', function(activeSidebarFactory) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.sidebarIdentity = attrs['name'];

                scope.$root.$on('sidebarForm.toggle', function() {            
                    if (activeSidebarFactory.getActiveSidebar() === scope.sidebarIdentity) {
                        element.addClass('in');
                    } else {
                        element.removeClass('in');
                    }
                });
            }
        }
    }])