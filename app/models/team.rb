class Team < ApplicationRecord
    has_many :games
    has_many :locations, through: :games
end
