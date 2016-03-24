'use strict';

var progressOverlay = ['overlay', function(overlay){
	return {
		restrict: 'A',
		template:'<div id="progress-overlay" ng-show="overlay.show"><div class="message-body"><div class="spinner"></div><div class="loading-text">Loading...</div></div>',
		scope: {},

		link: function(scope, elem, attrs) {
			scope.overlay = overlay;
		}
	};
}];

juApp.directive('progressOverlay', progressOverlay);