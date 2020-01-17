class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :max_guests
      t.boolean :kid_friendly
      t.boolean :pet_friendly
      t.boolean :smoking
      t.string :sleeping_arrangement
      t.text :description
      t.integer :user_id

      t.timestamps
    end
    add_index :spots, :user_id
  end
end
