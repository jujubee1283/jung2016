'use strict';

var exportService = ['$rootScope', 'overlay', function($rootScope, overlay) {
	this.errorMsg = 'Oops, there was a glitch. Please retry.';
	this.getScreenshot = function(params, getURL, filename) {

		if (params && params.length > 0) {
			for (var i = 0; i < params.length; i ++) {
				getURL += '/' + params[i].replace('#', '').replace(' ', '%20');
			}
		}

		//show progress spinner
		overlay.showProgressSpinner();
		// make call to get the screenshot
		// note: angular $http doesn't work due to cross domain issue (even though it's set on openshift)
		// note: ajax type GET with jsonp receives 200 but keeps trying to interpret the image as a script
		// note: also using an iframe to trigger file download didn't work because it got the cross domain error
		$.get(getURL, function(data) {
			// broadcast the image so that it can be displayed in a dialog
			var image = document.createElement('img');
			image.src = 'data:image/png;base64,'+ data;
			$rootScope.$broadcast("openImage", image);

			//hide progress spinner
			overlay.hideProgressSpinner();
			$rootScope.$apply();

			// thanks to Jeremy Banks on stackoverflow
			/*function b64toBlob(b64Data, contentType, sliceSize) {
				contentType = contentType || '';
				sliceSize = sliceSize || 512;

				var byteCharacters = atob(b64Data);
				var byteArrays = [];

				for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
					var slice = byteCharacters.slice(offset, offset + sliceSize);

					var byteNumbers = new Array(slice.length);
						for (var i = 0; i < slice.length; i++) {
						byteNumbers[i] = slice.charCodeAt(i);
					}
					var byteArray = new Uint8Array(byteNumbers);
					byteArrays.push(byteArray);
				}
				var blob = new Blob(byteArrays, {type: contentType});
				return blob;
			};

			// if html5 download is supported, use that to trigger image download
			if ("download" in document.createElement("a")) {
				var blob = b64toBlob(data, 'image/png;base64;');
				if (navigator.msSaveBlob) { // IE 10+
					navigator.msSaveBlob(blob, filename);
				} else {
					var link = document.createElement('a');
					if (link.download !== undefined) {
						// Browsers that support HTML5 download attribute
						var url = URL.createObjectURL(blob);
						link.setAttribute('href', url);
						link.setAttribute('download', filename);
						link.style = 'visibility:hidden';
						document.body.appendChild(link);
						setTimeout(function() {
							link.click();
						}, 0);
						document.body.removeChild(link);
					}
				}
			} else {
				// broadcast the image so that it can be displayed in a dialog
				var image = document.createElement('img');
				image.src = 'data:image/png;base64,'+ data;
				$rootScope.$broadcast("openImage", image);
			}*/
		}).fail(function(){
			//hide progress spinner
			overlay.hideProgressSpinner();
			$rootScope.$apply();
			
			// show error message
			if (getURL.indexOf('myCharacter') >= 0) {
				$rootScope.$broadcast('myCharacterImageFailed');
			} else if (getURL.indexOf('spriteMaker') >= 0) {
				$rootScope.$broadcast('spriteMakerImageFailed');
			}
		});


		/*$http.get(getURL).success(function(data) {
			console.log("$http get: " +data);
			//location.href = 'data:application/octet-stream;base64,' + data;
		});*/
	};

	this.testRunGetScreenshot = function() {
		var params = ["#000000", "#d2b48c", "#60affe", "Hello"];
		var url = 'http://screencapture-juung.rhcloud.com?url=profile-juung.rhcloud.com/%23/myCharacter/000000/d2b48c/60affe/Hello';
		$.get(url, function(data) {});
	};
}];

juApp.service('exportService', exportService);