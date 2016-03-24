'use strict';

var dialog = ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		scope: {
			options: '='
		},
		link: function(scope, element, attrs) {
			$timeout(function() {
				var buttonsArray = scope.options.buttons;
				var buttons = {};
				for (var i = 0; i < buttonsArray.length; i ++) {
					buttons[buttonsArray[i].name] = buttonsArray[i].fn;
				}

				$(element).dialog({
					autoOpen: false,
					resizable: false,
					height: scope.options.height,
					width: scope.options.width,
					modal: true,
					buttons: buttons
				});
			});
		}
	};
}];

juApp.directive('dialog', dialog);