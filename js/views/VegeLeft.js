var app = app || {};

app.VegeViewLeft = Backbone.View.extend({
	tagName: 'div',
	className: 'vegeContainer vegeContainer-left',
	template: $('#vegeTemplate').html(),

	render: function(){
		var tmpl = _.template( this.template );
		this.$el.html( tmpl( this.model.toJSON() ) );
		return this;
	}
});