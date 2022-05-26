class UsersController < ApplicationController

    # skip_before_action :authorize, only: [:create]
    before_action :authorize_user, except: [:create] 

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def destroy
      user = User.find(params[:id])
      user.destroy
    end

    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
end
