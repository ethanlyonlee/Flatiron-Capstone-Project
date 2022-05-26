class TicketSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity, :user_id, :game_id
  has_one :user
  has_one :game
end
