class CommentsController < ApplicationController
    # before_action :authenticate_user, except: [:show, :index]
    before_action :comment_find, only: [:show, :edit, :update, :destroy]
    before_action :authorize_comment, only: [:update, :edit, :destroy]

    def index
        render json: Comment.all
    end

    def create
        # byebug
        @comment = @current_user.comments.create!(comment_params)
        render json: comments, status: :created
    end

    def show
        #comment = comment_find
        render json: @comment
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

    def comment_find
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:content, :game_id, :user_id)
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
