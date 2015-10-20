angular
    .module('public')
    .directive('offCanvas', [function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var activeClass = 'oc-active-forms';

                scope.$root.$on('offcanvas.toggle', function() {
                    element.toggleClass(activeClass);
                });

                scope.$root.$on('offcanvas.open', function() {
                    element.addClass(activeClass);
                });

                scope.$root.$on('offcanvas.close', function() {
                    element.removeClass(activeClass);
                });
            }
        }
    }]);