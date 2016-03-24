'use strict';

var selectMenu = [function() {
	return {
		restrict: 'A',
		scope: {
			selectedValueName: '='
		},
		link: function(scope, element, attrs) {
			$(element).selectmenu({
				change: function( event, data ) {
					scope.$parent[scope.selectedValueName] = data.item.value;
					scope.$apply();
				}
			});
		}
	};
}];

juApp.directive('selectMenu', selectMenu);