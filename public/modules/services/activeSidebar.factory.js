angular
    .module('public')
    .factory('activeSidebarFactory', [function() {
        var activeSidebar = null;

        function setActiveSidebar(target) {
            activeSidebar = target;
        }

        function getActiveSidebar() {
            return activeSidebar;
        }

        return {
            getActiveSidebar: getActiveSidebar,
            setActiveSidebar: setActiveSidebar
        }
    }])