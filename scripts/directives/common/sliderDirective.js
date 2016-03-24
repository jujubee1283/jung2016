'use strict';

var slider = [function() {
	return {
		restrict: 'A',
		scope: {
			currentValue: '=',
			options: '=',
			varName: '='
		},
		link: function(scope, element, attrs) {

			$(element).slider({
				value: Number(scope.currentValue) || 0,
				min: Number(scope.options.min) || 0,
				max: Number(scope.options.max) || 100,
				step: Number(scope.options.step) || 20,
				slide: function( event, data ) {
					var nameSplit = scope.varName ? scope.varName.split('.') : [];
					if (nameSplit.length === 2) {
						scope.$parent[nameSplit[0]][nameSplit[1]] = data.value;
					} else if (nameSplit.length === 1) {
						scope.$parent[nameSplit[0]] = data.value;
					}
					scope.$apply();
				}
			});
		}
	};
}];

juApp.directive('slider', slider);