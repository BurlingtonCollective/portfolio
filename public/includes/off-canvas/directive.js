angular
    .module('public')
    .directive('offCanvas', [function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var activeClass = 'oc-active-forms';

                scope.toggleOC = function() {
                    element.toggleClass(activeClass);
                }

                scope.addOC = function() {
                    element.addClass(activeClass);
                }

                scope.removeOC = function() {
                    element.removeClass(activeClass);
                }

                scope.$root.$on('offcanvas.toggle', scope.toggleOC);

                scope.$root.$on('offcanvas.open', scope.addOC);

                scope.$root.$on('offcanvas.close', scope.removeOC);
            }
        }
    }]);