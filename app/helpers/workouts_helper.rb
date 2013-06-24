module WorkoutsHelper
  # Based on the category, time and metric measurement options selected by the user,
  # instantiate an SQL query that retrieves the appropriate data, and then convert into JSON format
  # to display in the view
  # @param metric_param. The chosen measurement variable.
  # @param cat_param. The chosen category variable.
  # @param time_param. The chosen time interval.
  # @return. JSON formatted string to workouts#analyze controller method.
  def get_metric_data_with_category(metric_param, cat_param, time_period)
    cat_param = determineCatParam(cat_param)
    determineQuery(metric_param, cat_param, format_time(time_period), date_trunc(time_period), getSeriesLength(time_period));
    @total_metric.map { |e| { date: e.date.strftime("%Y-%m-%d"), ind_load_volume: e.load_volumes, load_volume: choose_metric(e, metric_param), workout_id: e.ids } }
  end
  
  # Choose the measurement metric to display
  def choose_metric(ex, params)
    params == "Time" ? ex.total_duration :
    params == "Reps" ? ex.total_reps :
    params == "Weight" ? ex.total_weight :
    params == "Sets" ? ex.total_sets :
    ex.total_load_volume
  end
  
  
  
  #########################
  # Begin helper functions
  ########################
  
  # Set the categories if none was chosen
  def determineCatParam(cat_param)
    if ((cat_param == "All") || (cat_param == nil))
      cat_param = ["Full Body", "Lower Body", "Upper Body", "Legs", "Hips", "Shoulders", "Arms", "Chest", "Back"]
    else 
      cat_param
    end
  end

  
  # Decide the type of SQL query to send to the server 
  def determineQuery(metric_param, cat_param, time_window, time_period, series_length)    
    if metric_param == "Time"
      @total_metric = Workout.find_by_sql(["
         SELECT 
            DISTINCT date_trunc(?, series.date)::date as date,
            array_agg(id) OVER WIN as ids, 
            array_agg(duration) OVER WIN as load_volumes, 
            sum(COALESCE(duration, 0)) OVER WIN as total_duration 
         FROM (
            SELECT generate_series(?, 0) + current_date::date as date
         ) series 
         LEFT OUTER JOIN 
            workouts on series.date = workouts.created_at::date AND 
            workouts.user_id = ? AND 
            workouts.category IN (?) AND 
            (workouts.created_at BETWEEN ? AND ?) 
         WINDOW 
            WIN AS (PARTITION BY date_trunc(?, series.date)::date)
         ORDER BY 
            date ASC", 
         time_period, series_length, @user.id, cat_param, time_window, Time.now.midnight, time_period
        ]) 
    elsif metric_param == "Reps"
      @total_metric = Workout.find_by_sql(["
        SELECT 
            DISTINCT date_trunc(?, series.date)::date as date,
            array_agg(reps) OVER WIN as load_volumes,
            sum(COALESCE(reps, 0)) OVER WIN as total_reps,
            array_agg(exerciseable_id) OVER WIN as ids     
        FROM (
            select generate_series(?, 0) + current_date as date
        ) series 
        LEFT JOIN (
            exercises INNER JOIN (select * from workouts where user_id = ?) workouts 
            ON exercises.exerciseable_id = workouts.id AND 
            workouts.category IN (?) AND 
            (workouts.created_at BETWEEN ? AND ?)
        ) 
        ON series.date = exercises.created_at::date 
        WINDOW 
           WIN AS (PARTITION BY date_trunc(?, series.date)::date)
        ORDER BY date ASC", 
        time_period, series_length, @user.id, cat_param, time_window, Time.now.midnight, time_period
        ])      
      
    elsif metric_param == "Weight"
      @total_metric =  Workout.find_by_sql(["
        SELECT 
            DISTINCT date_trunc(?, series.date)::date as date,
            array_agg(weight) OVER WIN as load_volumes,
            sum(COALESCE(weight, 0)) OVER WIN as total_weight,
            array_agg(exerciseable_id) OVER WIN as ids     
        FROM (
            select generate_series(?, 0) + current_date as date
        ) series 
        LEFT JOIN (
            exercises INNER JOIN (select * from workouts where user_id = ?) workouts 
            ON exercises.exerciseable_id = workouts.id AND 
            workouts.category IN (?) AND 
            (workouts.created_at BETWEEN ? AND ?)
        ) 
        ON series.date = exercises.created_at::date 
        WINDOW 
           WIN AS (PARTITION BY date_trunc(?, series.date)::date)
        ORDER BY date ASC",
        time_period, series_length, @user.id, cat_param, time_window, Time.now.midnight, time_period
        ])
      
      
    elsif metric_param == "Sets"
      @total_metric = Workout.find_by_sql(["
         SELECT 
            DISTINCT date_trunc(?, series.date)::date as date,
            array_agg(id) OVER WIN as ids, 
            array_agg(sets) OVER WIN as load_volumes, 
            sum(COALESCE(sets, 0)) OVER WIN as total_sets 
         FROM (
            SELECT generate_series(?, 0) + current_date::date as date
         ) series 
         LEFT OUTER JOIN 
            workouts on series.date = workouts.created_at::date AND 
            workouts.user_id = ? AND 
            workouts.category IN (?) AND 
            (workouts.created_at BETWEEN ? AND ?) 
         WINDOW 
            WIN AS (PARTITION BY date_trunc(?, series.date)::date)
         ORDER BY 
            date ASC", 
         time_period, series_length, @user.id, cat_param, time_window, Time.now.midnight, time_period
        ])
      
      
      
    else # metric is equal to "Load Volume"
      @total_metric = Workout.find_by_sql(["
          SELECT 
             DISTINCT date_trunc(?, series.date)::date as date,
             array_agg(id) OVER WIN as ids, 
             array_agg(load_volume) OVER WIN as load_volumes, 
             sum(COALESCE(load_volume, 0)) OVER WIN as total_load_volume 
          FROM (
             SELECT generate_series(?, 0) + current_date::date as date
          ) series 
          LEFT OUTER JOIN 
             workouts on series.date = workouts.created_at::date AND 
             workouts.user_id = ? AND 
             workouts.category IN (?) AND 
             (workouts.created_at BETWEEN ? AND ?) 
          WINDOW 
             WIN AS (PARTITION BY date_trunc(?, series.date)::date)
          ORDER BY 
             date ASC", 
         time_period, series_length, @user.id, cat_param, time_window, Time.now.midnight, time_period
        ])
    end
  end

  # Format the time based on Users' input
  def format_time(time_window) 
    time_window == "One-Week" ? Time.now.midnight - 7.days :
    time_window == "Days" ? Time.now.midnight - 22.days :
    time_window == "Weeks" ? Time.now.midnight - 22.weeks :
    time_window == "Months" ? Time.now.midnight - 12.months :
    Time.now.midnight - 22.days
  end
  
  def date_trunc(time_window)
    time_window == "One-Week" ? 'day' :
    time_window == "Days" ? 'day' :
    time_window == "Weeks" ? 'week' :
    time_window == "Months" ? 'month' :
    'day'
  end
  
  def getSeriesLength(time_period)
    if time_period == "One-Week"
      -12 
    elsif time_period == 'Weeks' 
      -154
    elsif time_period == "Months"
      -365
    else 
      -22
    end
  end
  
end