class GamesController < ApplicationController
    
    def index
        games = Game.all
        render json: games
    end

    # def show 
    #     game = Game.find(params[:id])
    #     render json: game, serializer: GameWithTeamSerializer
    # end

    def destroy
        current_user = User.find(session[:current_user])
        ticket = Ticket.find_by(user_id: current_user.id, game_id: params[:id])
        ticket.destroy
    end
    
end
