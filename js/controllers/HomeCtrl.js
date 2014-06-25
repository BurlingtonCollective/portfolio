controllers.controller('HomeCtrl', ['$scope', 'contactService', function($scope, contactService){
	
	$scope.sendContact = function(){
		if($scope.contactForm.honeypot){
			//spam detection
			//show error
		}else{
			var cleanObj = {
				name: $scope.contactForm.name,
				email: $scope.contactForm.email,
				message: $scope.contactForm.message
			};
			var result = contactService.pushSimpleForm(cleanObj);
			if(result.data.success){
				//showmessage
			}else{
				//show error
			}
		}
	}
	
}]);