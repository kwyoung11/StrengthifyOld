Cs50xFinalProject::Application.routes.draw do
  
  # Root URL
  root to: 'home#index'
  
  # Administration routes
  get "/admin", to: 'admin/home#index' 
  namespace :admin do
    resources :users, :home
    resources :workouts do
      resources :exercises
    end
  end
  
  controller :home do 
    get 'admin' => :index
  end
  
  # Users, workouts (nested resource), analytics as a member
  # route of workouts
  resources :users do 
    resources :workouts do 
        get 'analyze', :on => :collection
    end
  end
  
  resources :password_resets, :sessions, :exercises
  
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
  
  # Routes for omniauth callback URL and on omniauth failure
  get 'auth/:provider/callback', to: 'sessions#create_with_fitbit'
  get 'auth/failure', to: redirect('/')



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"


  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
