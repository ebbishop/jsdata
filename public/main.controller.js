'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			allUsers: function(User) {
				return User.findAll()
			},
			allPosts: function(allUsers, Post) {
				return Post.findAll()
			}
		}
	})
})

app.controller('MainController', function($scope, allPosts, allUsers) {

	// var dataInJsDataCache = Post.getAll()
	// Post.ejectAll();
	// console.log('data in jsdata cache: ', Post.getAll())


	$scope.allPosts = allPosts
	$scope.allUsers = allUsers

	// console.log("These are the posts: ", allPosts)
})


