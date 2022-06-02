class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :number_of_seats, :website_url, :image_url
end
