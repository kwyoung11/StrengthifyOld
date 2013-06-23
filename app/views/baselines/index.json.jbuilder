json.array!(@baselines) do |baseline|
  json.extract! baseline, :challenge_id, :reps, :duration
  json.url baseline_url(baseline, format: :json)
end