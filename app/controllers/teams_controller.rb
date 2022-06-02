class TeamsController < ApplicationController
  
    def index
        render json: Team.all
    end

    def show
        team = Team.find(params[:id])
        render json: team, serializer: TeamWithGamesSerializer
    end
    
end
