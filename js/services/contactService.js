services.service('contactService', ['$http', '$q', function($http, $q){

	var self = this;

	this.simpleFormToken = 'd7d6a0a7ea62ea0febb7da1e74686972';

	this.pushSimpleForm = function(formObj){
		console.log(formObj);
		var deferred = $q.defer();
		$http.jsonp('http://getsimpleform.com/messages/ajax?form_api_token='+self.simpleFormToken+'&callback=JSON_CALLBACK', {
			params: formObj
		}).then(function(result){
			deferred.resolve(result);
		}, function(response){
			deferred.reject(response);
		});
		return deferred.promise;
	}
	
}]);