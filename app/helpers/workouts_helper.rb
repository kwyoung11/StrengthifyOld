module WorkoutsHelper
  # Based on the category, time and metric measurement options selected by the user,
  # instantiate an SQL query that retrieves the appropriate data, and then convert into JSON format
  # to display in the view
  # @param metric_param. The chosen measurement variable.
  # @param cat_param. The chosen category variable.
  # @param time_param. The chosen time interval.
  # @return. JSON formatted string to workouts#analyze controller method.
  def get_metric_data_with_category(metric_param, cat_param, time_window)
    cat_param = determineCatParam(cat_param);
    time_window = format_time(time_window)
    date_trunc = date_trunc(time_window)
    determineQuery(determineMetricParam(metric_param), cat_param, time_window, date_trunc);
    @total_metric.map { |e| { date: e.date.strftime("%Y-%m-%d"), ind_load_volume: e.load_volumes, load_volume: choose_metric(e, metric_param), workout_id: e.ids } }
  end
  
  
  #########################
  # Begin helper functions
  ########################
  
  # Set the categories if none was chosen
  def determineCatParam(cat_param)
    if ((cat_param == "All") || (cat_param == nil))
      cat_param = ["Full Body", "Lower Body", "Upper Body", "Legs", "Hips", "Shoulders", "Arms", "Chest", "Back"]
    end
  end
  
  def determineMetricParam(metric_param)
    if metric_param == "Time"
      duration
    elsif metric_param == "Reps"
      reps
    elsif metric_param == "Weight" 
      weight
    elsif metric_param == "Sets"
      sets
    else
      'load_volume'
    end
  end
  
  # Decide the type of SQL query to send to the server 
  def determineQuery(metric_param, cat_param, time_window, date_trunc)    
    
    if metric_param == "Time"
      @total_metric = Workout.select("id, date(created_at), sum(duration) as duration, sum(duration) OVER (PARTITION BY date(created_at)) as total_duration").group("id, date(created_at)").where(:user_id => @user.id, :category => cat_param).where(:created_at => (time_window)..Time.now.midnight + 1.day).order("date(created_at) ASC")  
    elsif metric_param == "Reps"
      @total_metric = Workout.joins(:exercises).select("date(exercises.created_at), sum(reps) OVER (PARTITION BY date(created_at)) as total_reps").group("date(exercises.created_at)").where(:user_id => @user.id, :category => cat_param).where(:created_at => (time_window)..Time.now.midnight + 1.day).order("date(exercises.created_at) ASC")  
    elsif metric_param == "Weight"
      @total_metric = Workout.joins(:exercises).select("date(exercises.created_at), sum(weight) OVER (PARTITION BY date(created_at)) as total_weight").group("date(exercises.created_at)").where(:user_id => @user.id, :category => cat_param).where(:created_at => (time_window)..Time.now.midnight + 1.day).order("date(exercises.created_at) ASC") 
    elsif metric_param == "Sets"
      @total_metric = Workout.select("date(created_at), sum(sets) OVER (PARTITION BY date(created_at)) as total_sets").group("date(created_at)").where(:user_id => @user.id, :category => cat_param).where(:created_at => (time_window)..Time.now.midnight + 1.day).order("date(created_at) ASC") 
    else
      @total_metric = # Workout.select("array_agg(id) OVER (PARTITION BY date(created_at)) as ids, date(created_at), array_agg(load_volume) OVER (PARTITION BY date(created_at)) as load_volumes, sum(load_volume) OVER (PARTITION BY date(created_at)) as total_load_volume").group("date(created_at), id, load_volume").where(:user_id => @user.id, :category => cat_param).where(:created_at => (time_param)..Time.now.midnight + 1.day).order("date(created_at) ASC")
      
       Workout.find_by_sql(["
         SELECT 
            DISTINCT date_trunc(?, created_at)::date as date, 
            array_agg(id) OVER WIN as ids, 
            array_agg(load_volume) OVER WIN as load_volumes, 
            sum(load_volume) OVER WIN as total_load_volume 
         FROM workouts 
         WHERE workouts.user_id = ? AND 
            workouts.category IN (?) AND 
            (workouts.created_at BETWEEN ? AND ?) 
         WINDOW 
            WIN AS (PARTITION BY date_trunc(?, created_at)::date) 
         ORDER BY 
            date ASC", 
         date_trunc, @user.id, cat_param, time_window, Time.now.midnight, date_trunc
        ])
    end
  end
  
 
  
  # Choose the measurement metric to display
  def choose_metric(ex, params)
    params == "Time" ? ex.total_duration :
    params == "Reps" ? ex.total_reps :
    params == "Weight" ? ex.total_weight :
    params == "Sets" ? ex.total_sets :
    ex.total_load_volume
  end
  
  # Format the time based on Users' input
  def format_time(time_window) 
    if time_window == "One-Week"
      Time.now.midnight - 7.days
    elsif time_window == "Days"
      Time.now.midnight - 22.days
    elsif time_window == "Weeks"
      Time.now.midnight - 22.weeks
    elsif time_window == "Months"
      Time.now.midnight - 12.months
    else
      Time.now.midnight - 22.days
    end
  end
  
  def date_trunc(time_window)
    if time_window == "One-Week"
      'day'
    elsif time_window == "Days"
      'day'
    elsif time_window == "Weeks"
      'week'
    elsif time_window == "Months"
      'month'
    else
      'day'
    end
  end
  
end