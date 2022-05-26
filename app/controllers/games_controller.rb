class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games
    end

    def show
        game = Game.find(params[:id])
        render json: game
    end

    def destroy
        game = Game.find(params[:id])
        game.destroy
    end

  

end
