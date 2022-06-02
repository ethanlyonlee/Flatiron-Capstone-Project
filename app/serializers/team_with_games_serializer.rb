class TeamWithGamesSerializer < ActiveModel::Serializer
  attributes :id, :name, :about_info, :website_url, :image_url, :games

  def games 
    ActiveModelSerializers::SerializableResource.new(object.games,each_serializer:GameWithLocationSerializer)
  end

end
