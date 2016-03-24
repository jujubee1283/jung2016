'use strict';

var myCharacter = ['exportService', 'mainService', function(exportService, mainService) {
	return {
		restrict: 'A',
		scope: true,
		templateUrl: 'views/myCharacter.html',
		link: function(scope, element, attrs) {
			scope.hairColor = scope.hairColor ? '#' + scope.hairColor : '#000000';
			scope.skinColor = scope.skinColor ? '#' + scope.skinColor : '#d2b48c';
			scope.eyeColor = scope.eyeColor ? '#' + scope.eyeColor : '#000000';
			scope.customMessage = scope.customMessage || 'Hello';

			scope.rgb2hex = function(rgb) {
				if (rgb.search("rgb") == -1) {
					return rgb;
				} else {
					rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
					var hex = function(x) {
						return ("0" + parseInt(x).toString(16)).slice(-2);
					};
					return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
				}
			};

			scope.changeBasicColor = function($event, type) {
				if ($event.target != $event.currentTarget) {
					var $el = $($event.target);
					var $container = $($event.currentTarget);
					$container.parent().find('input').removeClass('selected');
					$container.find('> *').removeClass('selected');
					$el.addClass('selected');
					var choice = $el.css('background-color');
					scope[type] = scope.rgb2hex(choice);
				}
			};

			scope.switchToInput = function(el) {
				$(el).parent().find('.basic-options > *').removeClass('selected');
				$(el).addClass('selected');
			};

			scope.doUpdate = function() {
				var myChar = $('.my-character');
				if (this.hairColor.length > 0) {
					myChar.find('.hair').css('background-color', this.hairColor);
					myChar.find('.bangs > *').css('background-color', this.hairColor);
				}

				if (this.skinColor.length > 0) {
					myChar.find('.face').css('background-color', this.skinColor);
					myChar.find('.ears > *').css('background-color', this.skinColor);
				}

				if (this.eyeColor.length > 0) {
					myChar.find('.eye').css('background-color', this.eyeColor);
				}
			};

			scope.doSpecificChange = function($event, clazz) {
				if ($event === null) {
					scope.switchToInput($('.' + clazz));
				} else {
					scope.changeBasicColor($event, clazz);
				}
			};

			scope.updateHandler = {
				hairColor: function() {
					var myChar = $('.my-character');
					if (scope.hairColor.length > 0) {
						myChar.find('.hair').css('background-color', scope.hairColor);
						myChar.find('.bangs > *').css('background-color', scope.hairColor);
					}
				},
				skinColor: function() {
					var myChar = $('.my-character');
					if (scope.skinColor.length > 0) {
						myChar.find('.face').css('background-color', scope.skinColor);
						myChar.find('.ears > *').css('background-color', scope.skinColor);
					}
				},
				eyeColor: function() {
					var myChar = $('.my-character');
					if (scope.eyeColor.length > 0) {
						myChar.find('.eye').css('background-color', scope.eyeColor);
					}
				}
			};

			scope.doUpdate = function($event, clazz) {
				scope.doSpecificChange($event, clazz);
				scope.updateHandler[clazz]();
			};

			scope.doExport = function() {
				$('.my-character-container .msg-area').text('');
				var getURL = 'http://screencapture-juung.rhcloud.com?url=profile-juung.rhcloud.com/%23/myCharacter';
				exportService.getScreenshot([this.hairColor, this.skinColor, this.eyeColor, this.customMessage], getURL, 'myCharacter.png');
			};


			if (!mainService.loadStatus['projects']['character']) {
				scope.$on('myCharacterImageFailed', function(val) {
					$('.my-character-container .msg-area').text(exportService.errorMsg);
				});

				// init
				scope.updateHandler['hairColor']();
				scope.updateHandler['skinColor']();
				scope.updateHandler['eyeColor']();

				mainService.loadStatus['projects']['character'] = true;
			}
		}
	}
}];

var alphaNumericOnly = [function(){
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
       modelCtrl.$parsers.push(function (inputValue) {

           if (inputValue == undefined) return '';
           var transformedInput = inputValue.replace(/[^A-z0-9 ]/g, '');
           if (transformedInput!=inputValue) {
              modelCtrl.$setViewValue(transformedInput);
              modelCtrl.$render();
           }
           return transformedInput;
       });
     }
   };
}];

juApp.directive('myCharacter', myCharacter)
.directive('alphaNumericOnly', alphaNumericOnly);
