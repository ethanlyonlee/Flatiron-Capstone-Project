Rails.application.routes.draw do

  get '/users/:id', to: 'users#game_tickets'

  resources :tickets
  resources :games
  resources :locations
  resources :teams
  resources :users
  resources :comments

  get '/authorized_user', to: 'users#show'
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
