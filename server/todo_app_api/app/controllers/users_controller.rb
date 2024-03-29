class UsersController < ApplicationController
    # POST /users
    def create
      user = User.new(user_params)
      if user.save
        render json: user, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end
  
    # POST /login
    def login
      user = User.find_by(name: params[:name])
      if user && user.authenticate(params[:password])
        render json: user
      else
        render json: { error: 'Error' }, status: :unauthorized
      end
    end
  
    private

    def user_params
        params.permit(:name, :password)
    end
  end
  