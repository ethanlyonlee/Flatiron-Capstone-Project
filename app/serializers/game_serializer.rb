class GameSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :price, :game_name, :location, :team
  has_one :team
  has_one :location
end
