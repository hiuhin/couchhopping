class Spot < ApplicationRecord
    validates :user_id, presence: true
    validates :sleeping_arrangement, inclusion: { in: ["shared bed", "shared room", "public room", "private room"]}

    belongs_to :user
end
