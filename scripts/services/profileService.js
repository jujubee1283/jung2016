var profileConstants = {
	'objective': "I'm a front end developer with back end development experience. I enjoy working" +
				" on web applications that use a Javascript framework, such as AngularJS, and being on a team" +
				" that utilizes an Agile methodology. I'm also comfortable with pair-programming as defined in " +
				"XP Agile, doing full-stack and test-driven development.",
	'education': {
		school: 'California Polytechnic State University',
		location: 'San Luis Obispo, CA',
		yearsAttended: '2002 - 2006',
		degree: 'Bachelor of Science in Computer Engineering'
	},
	'skills': [{
		title: "Front End",
		list: [{skill: "Javascript", proficiency: 3}, 
			{skill: "jQuery", proficiency: 3}, 
			{skill: "Backbone.js", proficiency: 2}, 
			{skill: "AngularJS", proficiency: 3},
			{skill: "RequireJS", proficiency: 1}, 
			{skill: "underscore.js", proficiency: 2}, 
			{skill: "HTML5", proficiency: 3},
			{skill: "CSS3", proficiency: 3},
			{skill: "SVG", proficiency: 1},
			{skill: "Ajax", proficiency: 2},
			{skill: "JSON", proficiency: 3}, 
			{skill: "D3.js", proficiency: 2},
			{skill: "DC.js", proficiency: 2},
			{skill: "Highcharts", proficiency: 1}, 
			{skill: "Less.js", proficiency: 3},
			{skill: "Jasmine test framework", proficiency: 3},
			{skill: "Karma test runner", proficiency: 1},
			{skill: "Chrome Developer Tools", proficiency: 3},
			{skill: "Firebug", proficiency: 2},
			{skill: "jsFiddle", proficiency: 2}]
	},{
		title: "Back End",
		list: [{skill: "Java", proficiency: 3},
			{skill: "JDBC", proficiency: 2},
			{skill: "JUnit", proficiency: 2},
			{skill: "SQL", proficiency: 2},
			{skill: "PL/SQL", proficiency: 1},
			{skill: "Oracle", proficiency: 1},
			{skill: "HiveQL", proficiency: 1},
			{skill: "Couchbase (NoSQL)", proficiency: 1},
			{skill: "REST", proficiency: 2},
			{skill: "Node.js", proficiency: 1},
			{skill: "ExpressJS", proficiency: 1},
			{skill: "PhantomJS", proficiency: 1},
			{skill: "Python", proficiency: 1}]
	},{
		title: "Tools",
		list: [{skill: "Git", proficiency: 2},
			{skill: "Subversion (SVN)", proficiency: 2},
			{skill: "CVS", proficiency: 1},
			{skill: "Apache Maven", proficiency: 1},
			{skill: "Jenkins CI", proficiency: 1},
			{skill: "Grunt", proficiency: 1},
			{skill: "npm", proficiency: 2},
			{skill: "Eclipse", proficiency: 3},
			{skill: "Webstorm", proficiency: 3},
			{skill: "PuTTY", proficiency: 1},
			{skill: "VI", proficiency: 2},
			{skill: "SublimeText", proficiency: 3}, 
			{skill: "Jira", proficiency: 2},
			{skill: "Rally", proficiency: 3},
			{skill: "Pivotal Tracker", proficiency: 2},
			{skill: "Adobe Photoshop", proficiency: 3},
			{skill: "Adobe Illustrator", proficiency: 1}]
	}],
	'proficiencyLevels': {
		1: {
			value: "novice",
			desc: "You have basic knowledge or limited experience in this skill."
		},
		2: {
			value: "intermediate",
			desc: "You are able to successfully complete tasks in this competency as requested. Help from an expert may be required from time to time, but you can usually perform the skill independently."
		},
		3: {
			value: "advanced",
			desc: 'You can perform the actions associated with this skill without assistance. You are recognized within your immediate organization as "a person to ask" when difficult questions arise regarding this skill.'
		}
	},
	'proficiencyMap': {
		'default': 'order',
		'proficiency': ['-proficiency', 'skill'],
		'alphabetical': 'skill'
	}
};

juApp.constant('profileService', profileConstants);

		// project ideas:  photo gallery with cool transitions (book page turning?)

		// minify css
		// how to get minify to run before server started?
		// if you want to simplify minify so that it just minifies all js at once,
		// maybe use the $timeout hack for common directives so that it skips trying to get
		// model data for 1 turn.
		// what is seo?

		// add undo for sprite maker
		// try oauth for fitbit and oauth in openshift again

		
		// to read
		// The Darkest Minds by Alexandra Bracken
		// Under the Never Sky by Veronica Rossi
		// Blood of Eden by Julie Kagawa
		// Faeries of Dreamdark by Laini Taylor

		// angularjs2 takeaway: ngResource
		// provider vs service?
		// ngView
		// directive replace

		// write tests
		// print css

		// caching issue
		// SEND_FILE_MAX_AGE_DEFAULT ?

		// for sprite maker, make some templates?
		// have option for increasing # of pixels?
		// change erase option for sprite maker. Ben kept clicking the invert one
		// -- maybe draw an erasor with sprite maker?
		// for sprite maker, make draw/erase mode more obvious

		// try different font besides courier?
		// update resume

		// set up less, after setting up grunt - low priority
		// set up routes
		// add captions - use border-image
		// change color scheme? Maa-iro?

		// back up note pws