angular
    .module('public')
    .directive('offCanvas', ['activeSidebarFactory', function(activeSidebarFactory) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var activeClass = 'oc-active-forms';

                scope.toggleOC = function(sidebarForm) {
                    console.log(sidebarForm);
                    element.toggleClass(activeClass);
                    activeSidebarFactory.setActiveSidebar(sidebarForm);
                    scope.$root.$broadcast('sidebarForm.toggle');
                }

                scope.addOC = function(sidebarForm) {
                    element.addClass(activeClass);
                    activeSidebarFactory.setActiveSidebar(sidebarForm);
                }

                scope.removeOC = function(sidebarForm) {
                    element.removeClass(activeClass);
                    activeSidebarFactory.setActiveSidebar(sidebarForm);
                }

                scope.$root.$on('offcanvas.toggle', scope.toggleOC);

                scope.$root.$on('offcanvas.open', scope.addOC);

                scope.$root.$on('offcanvas.close', scope.removeOC);
            }
        }
    }]);