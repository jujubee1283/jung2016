'use strict';

var main = [function(){
	this.tabs = ['home', 'projects', 'about'];
	this.currentTab = 0;
	this.loadStatus = {
		'home': false,
		'projects': {
			'init': false,
			'character': false,
			'sprite': false
		},
		'about': false
	};

	this.updateTab = function(tabName) {
		this.currentTab = this.tabs.indexOf(tabName);
	};
}];

juApp.service('mainService', main);