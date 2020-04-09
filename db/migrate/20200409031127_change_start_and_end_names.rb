class ChangeStartAndEndNames < ActiveRecord::Migration[5.2]
  def change
    remove_column :direct_requests, :start
    remove_column :direct_requests, :end
    add_column :direct_requests, :start_date, :date
    add_column :direct_requests, :end_date, :date
  end
end
