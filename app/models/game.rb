class Game < ApplicationRecord
  has_many :tickets, dependent: :destroy
  has_many :users, through: :tickets
  has_many :comments, dependent: :destroy
end
