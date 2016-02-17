'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			author: function($stateParams, User) {
				return User.find($stateParams.userId)
			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, author, Post, $state) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	$scope.newPost = {}

	$scope.newPost.username = author.username

	$scope.createNewPost = function(newPost) {
		console.log("We are in the create new post!")
		console.log("this is the newPost: ", newPost)
		Post.create(newPost)
		.then(function(){
			$state.go('main')
		})
	}
	// console.log("this is newPost: ", $scope.newPost)

	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 