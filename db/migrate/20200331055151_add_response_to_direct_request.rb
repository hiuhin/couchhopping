class AddResponseToDirectRequest < ActiveRecord::Migration[5.2]
  def change
    add_column :direct_requests, :response, :string
  end
end