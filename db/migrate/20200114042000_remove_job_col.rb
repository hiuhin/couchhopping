class RemoveJobCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :job
    add_column :users, :job, :string
    add_column :users, :gender, :string
    add_column :users, :language, :string
    add_column :users, :book, :string
    add_column :users, :movie, :string
  end
end
