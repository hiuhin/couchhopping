class AddSpotIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :spot_id, :integer
    add_index :users, :spot_id
  end
end
