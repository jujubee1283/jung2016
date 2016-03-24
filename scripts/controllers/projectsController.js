'use strict';

var projectsCtrl = ['$scope', 'mainService', 'exportService',
	function($scope, mainService, exportService) {
	$scope.imageOptions = {
		width: 325,
		height: 400,
		buttons: [{
			name: 'Done', fn: function() {
				$scope.closeImageDialog();
			}
		}]
	};

	$scope.openImageDialog = function(data) {
		$('#image-dialog .getImage').empty().append(data);
		$('#image-dialog').dialog("open");
	};

	$scope.closeImageDialog = function() {
		$('#image-dialog').dialog("close");
	};

	// update tab
	mainService.updateTab('projects');

	// clear the animation when user returns to Projects tab so that it
	// doesn't animate right away.
	$('.ui-tabs .ui-tabs-nav .ui-tabs-anchor:eq(1)').click(function(){
		$('.css3Container .egg').removeClass('roll');
		$('.backTriangle2').removeClass('crack');
		$('.backTriangle4').removeClass('crack');
		$('.backTriangle6').removeClass('crack');
		$('.backTriangle8').removeClass('crack');
		$('.egg .topShell').removeClass('breakTopOff');
		$('.chickHead .bottomBeak').removeClass('moveMouth');
	});

	$scope.$on('openImage', function(val, data) {
		$scope.openImageDialog(data);
	});

	if (!mainService.loadStatus['projects']['init']) {

		// do a test run of export on load
		exportService.testRunGetScreenshot();

		mainService.loadStatus['projects']['init'] = true;
	}
}];

juApp.controller('projectsCtrl', projectsCtrl);