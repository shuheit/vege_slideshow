var app = app || {};

app.VegeViewCenter = Backbone.View.extend({
	tagName: 'div',
	className: 'vegeContainer vegeContainer-center',
	template: $('#vegeTemplate').html(),

	render: function(){
		var tmpl = _.template( this.template );
		this.$el.html( tmpl( this.model.toJSON() ) );
		return this;
	}
});