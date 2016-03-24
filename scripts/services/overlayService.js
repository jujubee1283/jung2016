'use strict';

var overlay = [function(){
	this.show = false;
	this.showProgressSpinner = function() {
		this.show = true;
	};
	this.hideProgressSpinner = function() {
		this.show = false;
	};
}];

juApp.service('overlay', overlay);