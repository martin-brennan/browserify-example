var _ = require('underscore');
var Backbone = require('backbone');
var personModel = require('../model/person.js')

module.exports = Backbone.Collection.extend({
	model: personModel,

	url: './people.json'
});