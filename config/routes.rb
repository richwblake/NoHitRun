Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :games, only: [:show, :index, :create]
  resources :splits, only: [:show, :create]
end
