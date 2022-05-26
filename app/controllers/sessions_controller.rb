class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
  
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end

    # def current_user?(user)
    #   user == current_user
    # end
  
    # def current_user
    #   if(user_id = session[:user_id])
    #     @current_user ||= User.find_by(id: user_id)
    # end
  
  end