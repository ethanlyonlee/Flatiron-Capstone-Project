class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :about_info
      t.string :website_url
      t.string :image_url

      t.timestamps
    end
  end
end
