class User < ApplicationRecord
    has_many :tickets, dependent: :destroy
    has_many :games, through: :tickets
    has_many :comments, dependent: :destroy
    has_many :games, through: :comments

    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 6 }
end
