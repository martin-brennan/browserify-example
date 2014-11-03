var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var PeopleView = require('./src/view/people.js');
var PeopleCollection = require('./src/collection/people.js');

$(document).ready(function () {
	var people = new PeopleCollection();
	people.fetch().then(function () {
		var peopleList = new PeopleView({ collection: people });
		peopleList.render();
	});
});