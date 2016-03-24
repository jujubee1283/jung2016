'use strict';

var spriteMaker = [function() {
	return {
		restrict: 'A',
		scope: true,
		templateUrl: 'views/spriteMaker.html'
	}
}];

juApp.directive('spriteMaker', spriteMaker);