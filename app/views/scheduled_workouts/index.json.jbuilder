json.array!(@scheduled_workouts) do |scheduled_workout|
  json.extract! scheduled_workout, 
  json.url scheduled_workout_url(scheduled_workout, format: :json)
end