class LocationWithGamesSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :number_of_seats, :website_url, :image_url, :games

  def games 
    ActiveModelSerializers::SerializableResource.new(object.games,each_serializer:GameWithTeamSerializer)
  end

end
