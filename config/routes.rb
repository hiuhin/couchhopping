Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:edit, :show, :create]
    resources :cities, only: [:index, :show]
    resources :direct_requests, only: [:index, :create, :show, :destroy, :update]
  end

  root "static_pages#root"
end
