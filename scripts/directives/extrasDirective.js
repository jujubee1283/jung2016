'use strict';

var extras = [function() {
	return {
		restrict: 'A',
		scope: {},
		templateUrl: 'views/extras.html',
		link: function(scope, element, attrs) {
			var extrasContainer = $(element).find('#extrasContainer');
			scope.extrasList = [{
				title: 'Foods I Like',
				content: ['Sushi', 'Thai noodles', 'Pho', 'Ramen', 'Pizza', 'Hamburger', 'Seafood']
			},{
				title: 'Hobbies',
				content: ['Reading', 'Journaling', 'Twirling Baton', 'Studying Japanese', 'Playing Video Games', 'Origami', 'Watching TV']
			},{
				title: 'Favorite Authors',
				content: ['Brandon Sanderson', 'Patrick Rothfuss', 'George R.R. Martin', 'John Flanagan', 'Sarah J. Maas', 'Joe Abercombie']
			},{
				title: 'Countries Visited',
				content: ['Japan', 'Australia', 'France']
			},{
				title: 'US States Visited',
				content: ['Nevada', 'Hawaii', 'Massachusetts', 'Missouri', 'New York', 'Alaska']
			},{
				title: 'Favorite TV Shows',
				content: ['The Office', 'The Big Bang Theory', 'Friends', 'Parks and Recreation']
			},{
				title: 'Favorite Animals',
				content: ['Domestic Cat', 'Tiger', 'Bearded Dragon', 'Leopard', 'Dog', 'Owl', 'Octopus']
			},{
				title: '好きなマンガ',
				content: ['よつばと!', '7SEEDS', 'ナルト', '鋼の錬金術師', 'ドラゴンボール', 'デスノート']
			},{
				title: 'DIY Car Maintenance',
				content: ['Oil Change', 'Battery Replacement', 'Cabin Air Filter', 'Engine Air Filter', 'Head Lights', 'Tail Lights', 'Starter Solenoid']
			},{
				title: 'DIY Car Maintenance (2)',
				content: ['Radiator Replacement', 'Remote Key Battery', 'Valve Cover Gasket', 'Break Pads']
			}];

		}
	}
}];

juApp.directive('extras', extras);

// Foods I don't like: chilli peppers/spicy Foods, 

// favorite fruits
// tamasan, dr slump
