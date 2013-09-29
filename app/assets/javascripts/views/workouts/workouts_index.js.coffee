class Strengthify.Views.WorkoutsIndex extends Backbone.View

	template: JST['workouts/index']

	initialize: ->
		@collection.on('reset', @render, this)

	render: -> 
		$(@el).html(@template(workouts: @collection))
		this