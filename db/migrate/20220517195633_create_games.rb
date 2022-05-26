class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :date
      t.string :time
      t.string :venue
      t.string :image

      t.timestamps
    end
  end
end
