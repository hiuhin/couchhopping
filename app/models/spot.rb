class Spot < ApplicationRecord
    validates :sleeping_arrangement, inclusion: { in: ["shared bed", "shared room", "public room", "private room"]}

    has_one :user
end
