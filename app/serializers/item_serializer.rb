class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :image
end
