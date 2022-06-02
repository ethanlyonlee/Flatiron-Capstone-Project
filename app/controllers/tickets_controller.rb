class TicketsController < ApplicationController
    wrap_parameters format: []
    
    # def index
    #     render:json => Ticket.all
    # end

    # def show
    #     ticket = Ticket.find(params[:id])
    #     render json: ticket
    # end

    def create 
        ticket = Ticket.create!(ticket_params)
        render json: ticket, status: :created
    end

    # def update
    #     ticket = Ticket.find(params[:id])
    #     ticket.update!(ticket_params)
    #     render json: ticket, status: :created
    # end

    # def destroy
    #     ticket = Ticket.find(params[:id])
    #     ticket.destroy
    # end

    private

    def ticket_params
        params.permit(:user_id, :game_id)
    end
end
