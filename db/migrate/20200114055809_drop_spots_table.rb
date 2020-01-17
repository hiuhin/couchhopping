class DropSpotsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :spots
  end
end
