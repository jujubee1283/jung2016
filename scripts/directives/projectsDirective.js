'use strict';

var projects = [function() {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: 'views/projects.html',
		link: function(scope, element, attrs) {

		}
	}
}];

juApp.directive('projects', projects);