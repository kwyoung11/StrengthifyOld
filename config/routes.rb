Cs50xFinalProject::Application.routes.draw do
    require File.expand_path("../../config/initializers/logged_in_constraint", __FILE__)

    # Root URL
    get '/blog', to: 'posts#index'
    root to: 'home#index', as: :unauthenticated_root
    root to: 'users#index', :constraints => LoggedInConstraint.new
    
  
    # Signup path
    controller :users do
       get 'signup' => :new
       get 'signup/:invitation_token' => :new
    end
    
    # Login and logout path
    controller :sessions do
      get 'login' => :new
      post 'login' => :create
      delete 'logout' => :destroy
      post 'activity' => :activity
    end
  
    # Nested routes for users 
    resources :users do 
      get 'find', :on => :collection
      get 'defaults', to: "defaults#show"
      get 'defaults/edit', to: "defaults#edit"
      resources :defaults
      resources :workouts do 
          get 'analyze', :on => :collection
          get 'snag', on: :member
          get 'performable', on: :collection
          get 'perform', on: :member
      end
      resources :challenges
    end
  
    resources :exercise_descriptions do
      get 'build', on: :member
      get 'clear', on: :collection
    end
    controller :exercise_descriptions do
      get 'build_workout', to: 'exercise_descriptions#index', as: :build_workout
    end 
      
    resources :baselines
    resources :activities 
    resources :invitations
    resources :password_resets
    resources :sessions
    resources :exercises
    resources :notifications
  
    controller :notifications do
      post 'seen' => :seen
    end
  
    resources :friendships do 
      get 'accept', on: :member
      get 'reject', on: :member    
    end
    
    patch '/admin/exercises', to: 'admin/exercises#add_exercise_to_db'
    post '/give', to: 'glories#give'
  
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
