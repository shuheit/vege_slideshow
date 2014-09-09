var app = app || {};

app.VegeViewRight = Backbone.View.extend({
	tagName: 'div',
	className: 'vegeContainer vegeContainer-right',
	template: $('#vegeTemplate').html(),

	render: function(){
		var tmpl = _.template( this.template );
		this.$el.html( tmpl( this.model.toJSON() ) );
		return this;
	}
});