class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :name, null: false
      t.string :status, null: false
      t.integer :age
      t.integer :job
      t.text :about_me
      t.integer :city_id, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
  
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :city_id
  end
end
