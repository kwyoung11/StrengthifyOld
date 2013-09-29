class Strengthify.Routers.Workouts extends Backbone.Router
	routes:
		"exercises": "new"
		"workouts": "index"
	 	

	initialize: ->
	 	@collection = new Strengthify.Collections.Workouts()
	 	@collection.fetch({reset: true})

	index: -> 
		alert("looking at all my workouts")
		view = 	new Strengthify.Views.WorkoutsIndex(collection: @collection)
		$(".wrap").prepend(view.render().el)

	new: ->
		alert("creating a new workout")
		@workout = new Strengthify.Models.Workout()
		view = new Strengthify.Views.WorkoutsNew(workout: @workout)
		$(".wrap").prepend(view.render().el)