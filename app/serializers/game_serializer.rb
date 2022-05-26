class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :venue, :image, :comments
end
