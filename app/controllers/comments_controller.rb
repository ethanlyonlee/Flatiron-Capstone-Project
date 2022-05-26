class CommentsController < ApplicationController
    # before_action :comment_find, only: [:edit, :update, :destroy]
    # before_action :authorize_comment, only: [:update, :edit, :destroy]

    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

    def create
        # byebug
        current_user = User.find(session[:current_user])
        @comment = current_user.comments.create!(comment_params)
        render json: @comment, status: :created
    end

    def update
        #comment = comment_find
        @comment.update!(comment_params)
        render json: @comment
    end

    def destroy 
        #comment = @current_user.comment_find
        @comment.destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:content, :game_id, :user_id)
    end

    # def correct_user
    #     comment = Comment.find_by(id: params[:id])
    #     unless current_user?(comment.user)
    #       redirect_to user_path(current_user)
    # end

    def authorize_comment
        unless @current_user == @comment.user 
          redirect_to "/comments"
        end
      end

end
