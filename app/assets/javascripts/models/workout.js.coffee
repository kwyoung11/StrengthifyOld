class Strengthify.Models.Workout extends Backbone.RelationalModel

relations: [
	type: Backbone.HasMany
	key: 'exercises'
	relatedModel: 'Strengthify.Models.Exercise'
	collectionType: 'Strengthify.Collections.ExercisesCollection'
	includeInJSON: false
	reverseRelation: 
		key: 'workout_id' 
		includeInJSON: 'id'
]


defaults: {
	sets: 1,
	completed: false
}

