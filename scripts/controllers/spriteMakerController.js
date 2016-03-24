'use strict';

var spriteMakerCtrl = ['$scope', 'spriteMakerService', 'exportService', 'mainService',
function(scope, spriteMakerService, exportService, mainService) {
	scope.spriteMaker = spriteMakerService;
	scope.spriteMaker.colors = scope.colors;
	scope.clearDialogOptions = {
		width: 350,
		height: 220,
		buttons: [{
			name: 'Clear Canvas',
			fn: function() {
				scope.clearCanvas();
				scope.closeClearDialog();
			}
		},
		{
			name: 'Cancel', fn: function() {
				scope.closeClearDialog();
			}
		}]
	};
	scope.currentHoveredBit = null;

	scope.openClearDialog = function() {
		$('#clear-dialog').dialog("open");
	};

	scope.closeClearDialog = function() {
		$('#clear-dialog').dialog("close");
	};

	scope.drawBit = function(bit, $event) {
		var leftKey = scope.spriteMaker.reverseKeyMap[bit.substring(0,1)];
		if (scope.spriteMaker.isEraserSelected) {
			scope.spriteMaker.bitMap[leftKey][bit.substring(1)].color = '';
			$($event.target).css('background-color', '');
		} else {
			scope.spriteMaker.bitMap[leftKey][bit.substring(1)].color = scope.spriteMaker.currentColor;
			$($event.target).css('background-color', scope.spriteMaker.currentColor);
		}
	};

	//this is used to set the current bit that the mouse is over
	scope.setHoveredBit = function(bit, $event) {
		scope.currentHoveredBit = {bit: bit, e: $event};
	};

	scope.startDrawing = function(bit, $event) {
		scope.drawBit(bit, $event);
		$('.project-section .my-sprite .canvas').on('mousemove',
		function() {
			if (scope.currentHoveredBit) {
				scope.drawBit(scope.currentHoveredBit.bit, scope.currentHoveredBit.e);
			}
		});
		// watch for mouseup outside of canvas
		$('body').on('mouseup', function(e) {
			scope.stopDrawing();
		});
	};

	scope.stopDrawing = function() {
		$('.project-section .my-sprite .canvas').off('mousemove');
		$('body').off('mouseup');
	};

	scope.invertBg = function() {
		if (scope.spriteMaker.bgInverted) {
			$('.project-section .my-sprite .canvas .bit').addClass('inverted');
		} else {
			$('.project-section .my-sprite .canvas .bit').removeClass('inverted');
		}
	};

	scope.clearCanvas = function() {
		$('.canvas .bit').css('background-color', '');
		scope.spriteMaker.bitMap = [];
		scope.spriteMaker.initBitMap();
	};

	scope.doExport = function() {
		$('.sprite-maker .msg-area').text('');
		var getURL = 'http://screencapture-juung.rhcloud.com?url=profile-juung.rhcloud.com/%23/spriteMaker';
		exportService.getScreenshot([scope.spriteMaker.sliderSize.toString(),
			scope.spriteMaker.getDotSeparatedColors()], getURL, 'mySprite.png');
	};

	scope.updateTileSize = function(val) {
		var newSize = scope.spriteMaker.sliderToTileSizeMap[val];
		$('.my-sprite .canvas').removeClass('size90 size80 size70 size60 size50 size40 size30 size20 size10 size0');
		$('.my-sprite .canvas').addClass('size' + val);
	};

	// update tile size when slider changed
	if (!scope.tileSizeFromUrl || scope.tileSizeFromUrl.length === 0) {
		scope.$watch('spriteMaker.sliderSize', function(val) {
			scope.updateTileSize(val);
		});
	}

	if (!mainService.loadStatus['projects']['sprite']) {
		scope.$on('spriteMakerImageFailed', function(val) {
			$('.sprite-maker .msg-area').text(exportService.errorMsg);
		});

		scope.spriteMaker.convertUrlColorsToArray();
		scope.spriteMaker.bitMap = [];
		scope.spriteMaker.initBitMap();

		if (scope.tileSizeFromUrl && scope.tileSizeFromUrl.length > 0) {
			scope.updateTileSize(Number(scope.tileSizeFromUrl));
		}
		mainService.loadStatus['projects']['sprite'] = true;
	}
}];

juApp.controller('spriteMakerCtrl', spriteMakerCtrl);
