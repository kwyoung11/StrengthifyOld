json.array!(@workouts) do |workout|
  json.extract! workout, :exercise, :weight, :reps
  json.url workout_url(workout, format: :json)
end