'use strict';

var spriteMakerService = [function() {
	this.dim = 16;
	this.currentColor = '#000000';
	this.isEraserSelected = false;
	this.bgInverted = false;
	this.bitMap = [];
	this.keyMap = {
		0: 'a', 1: 'b', 2: 'c', 3: 'd',
		4: 'e', 5: 'f', 6: 'g', 7: 'h',
		8: 'i', 9: 'j', 10:'k', 11:'l',
		12:'m', 13:'n', 14:'o', 15:'p'
	};
	this.reverseKeyMap = {
		a: 0, b: 1, c: 2, d: 3,
		e: 4, f: 5, g: 6, h: 7,
		i: 8, j: 9, k:10, l:11,
		m:12, n:13, o:14, p:15
	};

	this.sliderOptions = {
		min: '0',
		max: '100',
		step: '10'
	};

	this.sliderToTileSizeMap = {
		100: 15,
		90: 13,
		80: 12,
		70: 10,
		60: 9,
		50: 8,
		40: 6,
		30: 5,
		20: 4,
		10: 2,
		0: 1
	};

	this.sliderSize = 100;

	this.initBitMap = function() {
		for (var i = 0; i < this.dim; i ++) {
			this.bitMap.push([]);
			for (var j = 0; j < this.dim; j++) {
				this.bitMap[i].push({
					key: this.keyMap[i] + j,
					color: this.colorsFromUrl ? this.colorsFromUrl[i][j] : ''
				});
			}
		}
	};

	this.getDotSeparatedColors = function() {
		var colors = '';
		for (var i = 0; i < this.bitMap.length; i ++) {
			for (var j = 0; j < this.bitMap[i].length; j++) {
				var c = this.bitMap[i][j].color.replace('#', '');
				if (i === this.bitMap.length - 1 &&
					j === this.bitMap[i].length - 1) {
					colors += c;
				} else {
					colors += c + '.';
				}
			}
		}
		return colors;
	};

	this.convertUrlColorsToArray = function() {
		if (this.colors) {
			this.colorsFromUrl = [];
			var colorArray = this.colors.split('.');
			for (var i = 0; i < this.dim; i ++) {
				this.colorsFromUrl.push([]);
				for (var j = i * this.dim; j < (i+1) * this.dim; j++) {
					if (colorArray[j]) {
						this.colorsFromUrl[i][j%this.dim] = '#' + colorArray[j];
					} else {
						this.colorsFromUrl[i][j%this.dim] = '';
					}
				}
			}
		}
	};
}];

juApp.service('spriteMakerService', spriteMakerService);