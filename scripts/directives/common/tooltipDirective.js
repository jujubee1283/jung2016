'use strict';

var tooltip = [function() {
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, element, attrs) {
			$(element).tooltip({
				position: {
					my: "center bottom-20",
					at: "center top",
					using: function( position, feedback ) {
						$( this ).css( position );
						$( "<div>" )
							.addClass( "arrow" )
							.addClass( feedback.vertical )
							.addClass( feedback.horizontal )
							.appendTo( this );
					}
				}
			});
		}
	};
}];

juApp.directive('tooltip', tooltip);