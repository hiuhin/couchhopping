class City < ApplicationRecord
    has_one_attached :photo
    has_one_attached :icon

    validates :name, presence: true

    has_many :users
end