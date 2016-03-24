'use strict';

var css3Fun = [function() {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: 'views/css3Fun.html',
		link: function(scope, element, attrs) {
			scope.onClickGo = function() {
				$('.egg').addClass('roll');
				$('.backTriangle2').addClass('crack');
				$('.backTriangle4').addClass('crack');
				$('.backTriangle6').addClass('crack');
				$('.backTriangle8').addClass('crack');
				$('.topShell').addClass('breakTopOff');
				$('.chickHead .bottomBeak').addClass('moveMouth');
				for (var i = 1; i <= 5; i ++) {
					$('.happy .letter:nth-child('+ i +')').addClass('showLetter');
				}
				for (var i = 1; i <= 7; i ++) {
					$('.easter .letter:nth-child('+ i +')').addClass('showLetter');
				}
				var newEgg = $('.egg').clone(true);
				$('.egg').before(newEgg);
				$('.egg:last').remove();
			}
		}
	}
}];

juApp.directive('css3Fun', css3Fun);