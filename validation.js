var app = angular.module("app", ["ngMessages"]);

app.controller('UserController', function($scope) {
    $scope.isDisabled = false;
    $scope.someFunc = function(){
        $scope.isDisabled = true;
        return false;
    };
	
	var self = this;
    self.register = function() {
		
		//show in console
        console.log('Name : ', self.name);
		console.log('Email : ', self.email);
		console.log('Phone No. : ', self.phone);
		console.log('Password : ', self.pass);
		
		//keep value in array
		$scope.usereg = {
			userinfo:[
					  {
						  name:self.name,
						  email:self.email,
						  phone:self.phone,
						  pass:self.pass
					  }
		   ],
	   };
    };
	
});