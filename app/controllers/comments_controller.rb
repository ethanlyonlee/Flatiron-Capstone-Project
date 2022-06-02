class CommentsController < ApplicationController
    wrap_parameters format: []

    def index 
        render json: Comment.all
    end

    def show
        current_comment = Comment.find(params[:id])
        render json: current_comment
    end

    def create 
        # byebug
        # current_user.comments.build
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = Comment.find(params[:id])
        comment.update!(comment_params)
        render json: comment, status: :created
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
    end

    private

    def comment_params
        params.permit(:content, :user_id, :game_id)
    end

end
