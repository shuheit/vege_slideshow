var app = app || {};

app.VegesView = Backbone.View.extend({
	el: '#veges',

	initialize: function( vegeArray ){
		this.collection = new app.Veges( vegeArray );
		this.render();
	},

	events: {
		'click .vegeContainer-left': 'moveToLeft',
		'click .vegeContainer-right': 'moveToRight',
	},

	moveToLeft: function() {
		this.$el.empty();
		this.shiftCollection();
		this.render();
	},

	moveToRight: function() {
		this.$el.empty();
		this.unshiftCollection();
		this.render();
	},

	shiftCollection: function(){
		var clone = this.collection.clone();
		var first = clone.shift();
		clone.push(first);
		this.collection = clone;
	},

	unshiftCollection: function(){
		var clone = this.collection.clone();
		var last = clone.pop();
		clone.unshift(last);
		this.collection = clone;
	},

	render: function() {
		var i =0;
		this.collection.each(function( item ) {
			if(i==3) return;
			this.renderVege( item, i );
			i++;
		}, this );
	},

	renderVege: function( item, pos ) {
		var vegeView;
		switch(pos){
			case 0:
				vegeView = new app.VegeViewLeft({ model: item });
				break;
			case 1:
				vegeView = new app.VegeViewCenter({ model: item });
				break;
			case 2:
				vegeView = new app.VegeViewRight({ model: item });
				break;
		}
		this.$el.append( vegeView.render().el );
	}
});