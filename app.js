'use strict';

var juApp = angular.module('myApp', ['ngRoute']);

var routeProvider = ['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		action: 'normal',
		templateUrl: 'views/profile.html'
	}).when('/projects', {
		action: 'normal',
		templateUrl: 'views/projects.html',
		controller: 'projectsCtrl'
	}).when('/about', {
		action: 'normal',
		templateUrl: 'views/aboutMe.html',
		controller: 'aboutCtrl'
	}).when('/myCharacter/:hairColor/:skinColor/:eyeColor/:customMessage', {
		action: 'myCharacter.custom'
	}).when('/myCharacter', {
		action: 'myCharacter'
	}).when('/spriteMaker/:tileSize/:colors', {
		action: 'spriteMaker'
	});
}];

var appController = ['$scope', '$route', '$routeParams', 'mainService', 'profileService',
function($scope, $route, $routeParams, mainService, profileService) {
	$scope.profile = profileService;

	// add default order to all of the skills
	for (var i = 0; i < $scope.profile.skills.length; i ++) {
		var skills = $scope.profile.skills[i].list;
		for (var j = 0; j < skills.length; j ++) {
			var skill = skills[j];
			skill.order = j;
		}
	}
	$scope.proficiencyOrder = "default";

	$scope.getResume = function() {
		var win = window.open('http://www.ju-ung.com/resources/Ju_Ung_resume.pdf');
	};

	$scope.render = function(){

		// Pull the "action" value out of the currently selected route.
		var renderAction = $route.current ? $route.current.action : null;

		if (!renderAction || renderAction === 'normal') {
			mainService.updateTab('home');
			$scope.isHome = true;
			$scope.renderPath = ['normal'];
			if (!$('body').hasClass('app-background')) {
				$('body').addClass('app-background');
			}
		} else {
			$('body').removeClass('app-background');
			var renderPath = renderAction.split( "." );

			// Grab the username out of the params.
			var username = ($routeParams.username || "");

			// Reset the booleans used to set the class for the navigation.
			var isCharacter = (renderPath[ 0 ] == "myCharacter");

			// Store the values in the model.
			$scope.renderAction = renderAction;
			$scope.renderPath = renderPath;
			$scope.username = username;
			$scope.isCharacter = isCharacter;

			// for myCharacter
			if ($routeParams.hairColor) {
				$scope.hairColor = $routeParams.hairColor;
				$scope.skinColor = $routeParams.skinColor;
				$scope.eyeColor = $routeParams.eyeColor;
				$scope.customMessage = $routeParams.customMessage.replace('%20', ' ');
			}

			// for spriteMaker
			if ($routeParams.colors) {
				$scope.tileSizeFromUrl = $routeParams.tileSize;
				$scope.colors = $routeParams.colors;
			}

			$('#progress-overlay').remove();
		}
	};

	// Listen for changes to the Route
	$scope.$on(
		"$routeChangeSuccess",
		function( $currentRoute, $previousRoute ){
			// Update the rendering.
			$scope.render();
		}
	);
}];

// Declare app level module which depends on views, and components
juApp.config(routeProvider)
.controller('appController', appController);
