class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :game_name
      t.string :date_time
      t.integer :price
      t.belongs_to :team, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
