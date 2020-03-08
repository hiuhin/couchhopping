class DirectRequest < ApplicationRecord
    validates :status, inclusion: { in: ["Pending", "Accepted"]}
    validates :user_id, :host_id, :status, :start, :end, :message, presence: true

    belongs_to :user
end
