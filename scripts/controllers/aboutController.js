'use strict';

var aboutCtrl = ['$scope', 'mainService',
	function($scope, mainService) {

	// update tab
	mainService.updateTab('about');
}];

juApp.controller('aboutCtrl', aboutCtrl);