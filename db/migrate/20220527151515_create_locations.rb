class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :city
      t.string :state
      t.integer :number_of_seats
      t.string :website_url
      t.string :image_url

      t.timestamps
    end
  end
end
