angular.module("public",["ngRoute","firebase"]).run(["$rootScope",function(a){console.log("running")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"/public/modules/home/index.html",controller:"home.ctrl"}).otherwise({redirectTo:"/"})}]),angular.module("public").controller("home.ctrl",["$scope",function(a){console.log("hello world!"),a.testOC=function(){a.$root.$broadcast("offcanvas.toggle")}}]),angular.module("public").controller("project.post.ctrl",["$scope",function(a){console.log("Im here"),a.testSubmit=function(){console.log("submitting")}}]),angular.module("public").factory("activeSidebarFactory",[function(){function a(a){c=a}function b(){return c}var c=null;return{getActiveSidebar:b,setActiveSidebar:a}}]),angular.module("public").factory("firebaseFactory",["$firebaseAuth",function(a){var b="https://burlingtoncollective.firebaseio.com",c=new Firebase(b),d=a(c);return{ref:c,auth:d}}]),angular.module("public").directive("offCanvas",["activeSidebarFactory",function(a){return{restrict:"A",link:function(b,c,d){var e="oc-active-forms";b.toggleOC=function(d){console.log(d),c.toggleClass(e),a.setActiveSidebar(d),b.$root.$broadcast("sidebarForm.toggle")},b.addOC=function(b){c.addClass(e),a.setActiveSidebar(b)},b.removeOC=function(b){c.removeClass(e),a.setActiveSidebar(b)},b.$root.$on("offcanvas.toggle",b.toggleOC),b.$root.$on("offcanvas.open",b.addOC),b.$root.$on("offcanvas.close",b.removeOC)}}}]),angular.module("public").directive("sidebarForm",["activeSidebarFactory",function(a){return{restrict:"A",link:function(b,c,d){b.sidebarIdentity=d.name,b.$root.$on("sidebarForm.toggle",function(){a.getActiveSidebar()===b.sidebarIdentity?c.addClass("in"):c.removeClass("in")})}}}]);
//# sourceMappingURL=master.js.map