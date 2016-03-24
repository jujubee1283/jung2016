'use strict';

var aboutMe = [function() {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: 'views/aboutMe.html'
	}
}];
juApp.directive('aboutMe', aboutMe);