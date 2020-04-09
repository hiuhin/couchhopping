class DirectRequest < ApplicationRecord
    validates :status, inclusion: { in: ["Pending", "Accepted", "Declined"]}
    validates :response, inclusion: { in: ["", "Yes", "Maybe", "No"]}
    validates :user_id, :host_id, :status, :start_date, :end_date, :message, presence: true
    validate :start_must_come_before_end

    belongs_to :user

    private

    def start_must_come_before_end
        return if start_date === nil || end_date === nil
        errors[:depature_date] << 'must come after arrival date' if start_date > end_date
    end
end
