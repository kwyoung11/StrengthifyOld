class Strengthify.Views.WorkoutsNew extends Backbone.View

	template: JST['workouts/new']

	events:
		'submit #new_workout' : 'createWorkout'


	render: -> 
		$(@el).html(@template(workouts: @workout))
		this

	createWorkout: (event) ->
		event.preventDefault()
		@workout.create({
			name: $('#exercise_name').val()
		})