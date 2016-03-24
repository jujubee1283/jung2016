'use strict';

var tabs = ['mainService', '$location', function(mainService, $location) {
	return {
		restrict: 'E',
		templateUrl: 'views/tabs.html',
		link: function(scope, elem, attr) {
			scope.main = mainService;

			scope.clickTab = function(tab) {
				if (tab === 'home') {
					$location.path('/');
				} else {
					$location.path('/' + tab);
				}
			};
		}
	}
}];

juApp.directive('tabs', tabs);