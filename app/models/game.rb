class Game < ApplicationRecord
    belongs_to :team
    belongs_to :location

    has_many :tickets, dependent: :destroy
    has_many :users, through: :tickets

    has_many :comments, dependent: :destroy
    has_many :users, through: :comments


end
