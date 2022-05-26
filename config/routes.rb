Rails.application.routes.draw do

  resources :comments
  resources :games
  resources :users
  resources :tickets
  resources :items
  resources :sessions
  
   # Initially Authenticate User
   get '/authorized_user', to: 'users#show'

   # Login / Logout Routes
   post '/login', to: 'sessions#login'
   delete '/logout', to: 'sessions#logout'
   get '/authorize_user', to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
