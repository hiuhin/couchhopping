class CreateDirectRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_requests do |t|
      t.integer :user_id
      t.integer :host_id
      t.string :status
      t.date :start
      t.date :end
      t.string :message
      t.timestamps
    end
    add_index :direct_requests, :user_id
    add_index :direct_requests, :host_id
  end
end
