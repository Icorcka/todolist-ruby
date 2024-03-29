Rails.application.routes.draw do
  post 'users', to: 'users#create'
  post 'login', to: 'users#login'

  get 'tasks', to: 'tasks#index'
  post 'tasks', to: 'tasks#create'
  delete 'tasks/:id', to: 'tasks#destroy'
end
