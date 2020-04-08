class DirectRequest < ApplicationRecord
    validates :status, inclusion: { in: ["Pending", "Accepted", "Declined"]}
    validates :response, inclusion: { in: ["", "Yes", "Maybe", "No"]}
    validates :user_id, :host_id, :status, :start, :end, :message, presence: true
    validate :start_must_come_before_end

    belongs_to :user

    private

    def start_must_come_before_end
        errors[:start_date] << 'must specify a start date' unless :start
        errors[:end_date] << 'must specify an end date' unless :end
        errors[:start_date] << 'must come before end date' if :start > :end
    end

end
