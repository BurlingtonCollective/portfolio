controllers.controller('HomeCtrl', ['$scope', 'contactService', function($scope, contactService){
	$scope.sendContact = function(){
		console.log($scope.contactForm);
		if($scope.contactForm.honeypot){
			//spam detection
			console.log($scope.contactForm.honeypot);
		}else{
			var cleanObj = {
				name: $scope.contactForm.name,
				email: $scope.contactForm.email,
				message: $scope.contactForm.message
			};
			contactService.pushSimpleForm(cleanObj);
		}

	}
}]);