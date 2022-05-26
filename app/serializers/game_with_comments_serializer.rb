class GameWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :venue, :image
  has_many :comments
end
