window.Strengthify =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: -> 
  	new Strengthify.Routers.Workouts()
  	Backbone.history.start({pushState: true})

$(document).ready ->
  Strengthify.initialize()
