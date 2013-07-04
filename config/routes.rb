Cs50xFinalProject::Application.routes.draw do
  require File.expand_path("../../config/initializers/logged_in_constraint", __FILE__)

  # Root URL
  root to: 'users#index', :constraints => LoggedInConstraint.new 
  root to: 'home#index'

  # Signup path
  controller :users do
     get 'signup' => :new
  end
  
  # Login and logout path
  controller :sessions do
    get 'login' => :new
    post 'login' => :create
    delete 'logout' => :destroy
  end

  # Nested routes for users 
  resources :users do 
    get 'find', :on => :collection
    resources :workouts do 
        get 'analyze', :on => :collection
    end
    resources :challenges

  end

  resources :db_of_exercises do
    get 'search', on: :collection
    get 'filter', on: :collection
  end
  resources :baselines
  resources :activities 
  resources :invite_friends
  resources :password_resets
  resources :sessions
  resources :exercises

  resources :friendships do 
    get 'accept', on: :member
    get 'reject', on: :member    
  end
  
  patch '/admin/exercises', to: 'admin/exercises#add_exercise_to_db'

  # Administration routes
  get "/admin", to: 'admin/home#index' 
  namespace :admin do
    resources :users, :home, :exercises
    resources :workouts do
      resources :exercises
    end
  end
  
  controller :home do 
    get 'admin' => :index
  end

end
