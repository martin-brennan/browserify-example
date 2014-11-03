var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
	el: '#people',

	template: _.template("<li><%= name %> [<a href='mailto:<%= email %>'><%= email %></a>]</li>"),

	render: function () {
		_.each(this.collection.models, function (model) {
			this.$el.append(this.template(model.toJSON()));
		}, this);
		return this;
	}
});