class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :about_info, :website_url, :image_url
end
