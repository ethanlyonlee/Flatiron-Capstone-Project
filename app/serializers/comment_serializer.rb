class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :game_id
  has_one :user
  has_one :game
end
