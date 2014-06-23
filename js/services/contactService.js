services.service('contactService', ['$http', '$q', function($http, $q){
	var self = this;
	this.simpleFormToken = 'd7d6a0a7ea62ea0febb7da1e74686972';
	this.pushSimpleForm = function(formObj){
		console.log(formObj);
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'http://getsimpleform.com/messages/ajax?form_api_token='+self.simpleFormToken,
			data: formObj
		}).then(function(result){
			console.log('submitted');
			console.log(result);
		}, function(response){
			console.log(response);
			console.log('no-go');
			deferred.reject(response);
		});
		return deferred.promise;
	}
}]);