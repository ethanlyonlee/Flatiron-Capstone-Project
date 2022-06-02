# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Teams..."
team1 = Team.create(
  name: 'Chicago Bulls', 
  about_info: "The Chicago Bulls are an American professional basketball team based in Chicago. The Bulls compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division. The team was founded on January 16, 1966, and played its first game during the 1966–67 NBA season. The Bulls play their home games at the United Center, an arena on Chicago's West Side.", 
  website_url: 'https://www.nba.com/bulls/', 
  image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/400px-Chicago_Bulls_logo.svg.png'
)

team2 = Team.create(
  name: 'Golden State Warriors', 
  about_info: "The Golden State Warriors are an American professional basketball team based in San Francisco. The Warriors compete in the National Basketball Association (NBA), as a member of the league's Western Conference Pacific Division. Founded in 1946 in Philadelphia, the Warriors moved to the San Francisco Bay Area in 1962 and took the city's name, before changing its geographic moniker to Golden State in 1971. The club plays its home games at the Chase Center.", 
  website_url: 'https://www.nba.com/warriors/', 
  image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/400px-Golden_State_Warriors_logo.svg.png'
)

team3 = Team.create(
  name: 'Boston Celtics', 
  about_info: "The Boston Celtics are an American professional basketball team based in Boston. The Celtics compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division. Founded in 1946 as one of the league's original eight teams, the Celtics play their home games at TD Garden, which they share with the National Hockey League's Boston Bruins. The Celtics are regarded as one of the most successful basketball teams in NBA history. The franchise is one of two teams with 17 NBA Championships, the other franchise being the Los Angeles Lakers. The Celtics currently hold the record for the most recorded wins of any NBA team.", 
  website_url: 'https://www.nba.com/celtics/',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/400px-Boston_Celtics.svg.png'
)

team4 = Team.create(
  name: 'Miami Heat', 
  about_info: "The Miami Heat are an American professional basketball team based in Miami. The Heat compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Southeast Division. The club plays its home games at FTX Arena, and has won three NBA championships.",
  website_url: 'https://www.nba.com/heat/',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/400px-Miami_Heat_logo.svg.png'
)

team5 = Team.create(
  name: 'Dallas Mavericks', 
  about_info: "The Dallas Mavericks (often referred to as the Mavs) are an American professional basketball team based in Dallas. The Mavericks compete in the National Basketball Association (NBA) as a member of the Western Conference Southwest Division. The team plays its home games at the American Airlines Center, which it shares with the National Hockey League's Dallas Stars.", 
  website_url: 'https://www.nba.com/mavericks/',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/400px-Dallas_Mavericks_logo.svg.png'
)

team6 = Team.create(
  name: 'Phoenix Suns', 
  about_info: "The Phoenix Suns are an American professional basketball team based in Phoenix, Arizona. They compete in the National Basketball Association (NBA), as a member of the league's Western Conference Pacific Division. The Suns are the only team in their division not to be based in California, and play their home games at the Footprint Center. The Suns are one of four major league sports teams based in the Phoenix area, but are the only one to bill themselves as representing the city (the other teams - the Cardinals, Coyotes, and Diamondbacks - all bill themselves as representing the state of Arizona).",
  website_url: 'https://www.nba.com/suns/', 
  image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/380px-Phoenix_Suns_logo.svg.png'
)

puts 'Seeding Locations...'
location1 = Location.create(
  name: 'United Center', 
  city: 'Chicago', 
  state: 'IL', 
  number_of_seats: 23500, 
  website_url: 'https://www.unitedcenter.com', 
  image_url: 'https://www.nbcsports.com/sites/rsnunited/files/article/hero/United-Center-GettyImages.jpg'
)

location2 = Location.create(name: 'Chase Center', city: 'San Francisco', state: 'CA', number_of_seats: 18064, website_url: 'https://www.chasecenter.com/home', image_url: 'https://neolithfacades.com/wp-content/uploads/2020/11/Neolith-Chase-Center01.jpg')
location3 = Location.create(name: 'TD Garden', city: 'Boston', state: 'MA', number_of_seats: 19580, website_url: 'https://www.tdgarden.com', image_url: 'https://media.timeout.com/images/101638545/image.jpg')
location4 = Location.create(name: 'FTX Arena', city: 'Miami', state: 'FL', number_of_seats: 21000, website_url: 'https://www.ftxarena.com', image_url: 'https://www.miamiherald.com/latest-news/2z7omw/picture251914143/alternates/LANDSCAPE_1140/MIA_FTX_Arena_MJO_1')
location5 = Location.create(name: 'American Airlines Center', city: 'Dallas', state: 'TX', number_of_seats: 20000, website_url: 'https://www.americanairlinescenter.com', image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/American_Airlines_Center_%286246886325%29_cropped.jpg')
location6 = Location.create(name: 'Footprint Center', city: 'Phoenix', state: 'AZ', number_of_seats: 17071 , website_url: 'https://www.footprintcenter.com', image_url: 'https://304ljw4amcep3ali496xph6b-wpengine.netdna-ssl.com/wp-content/uploads/2021/09/Footprint-Center_3.jpg')

puts 'Seeding Games...'
game1 = Game.create(game_name: 'Golden State Warriors @ Chicago Bulls', date_time: '06-30-22, 7:00 PM', price: 150, location_id: location1.id, team_id: team1.id)
game2 = Game.create(game_name: 'Boston Celtics @ Golden State Warriors',  date_time: '07-01-22, 7:00 PM', price: 250, location_id: location2.id, team_id: team2.id)
game3 = Game.create(game_name: 'Miami Heat @ Boston Celtics', date_time: '07-02-22, 7:30 PM', price: 150, location_id: location3.id, team_id: team3.id)
game4 = Game.create(game_name: 'Dallas Mavericks @ Miami Heat', date_time: '07-03-22, 7:30 PM', price: 200, location_id: location4.id, team_id: team4.id)
game5 = Game.create(game_name: 'Phoenix Suns @ Dallas Mavericks', date_time: '07-05-22, 7:00 PM', price: 100, location_id: location5.id, team_id: team5.id)
game6 = Game.create(game_name: 'Chicago Bulls @ Phoenix Suns', date_time: '07-06-22, 8:00 PM', price: 150, location_id: location6.id, team_id: team6.id)

# 10.times do
#     Game.create(date_time: Faker::Date.between(from: '2022-05-01', to: '2022-12-31'), price: rand(6..15)*10, team_id: rand(1..Team.count), location_id: rand(1..Location.count)) 
# end

puts 'Seeding Users...'
user1 = User.create(first_name: 'Ethan', last_name: 'Lee', username: 'ethan', password: 'ethan', admin: true)
user2 = User.create(first_name: 'Chris', last_name: 'Paul', username: 'chris', password: 'chris', admin: false)
user3 = User.create(first_name: 'Harry', last_name: 'Porter', username: 'harry', password: 'harry', admin: false)
user4 = User.create(first_name: 'James', last_name: 'Harden', username: 'james', password: 'james', admin: false)
user5 = User.create(first_name: 'Kobe', last_name: 'Bryant', username: 'kobe', password: 'kobe', admin: false)
user6 = User.create(first_name: 'LeBron', last_name: 'James', username: 'lebron', password: 'lebron', admin: false)

puts 'Seeding Comments...'
comment1 = Comment.create(content: 'Big fan of Curry! This is a great game!', user_id: user1.id, game_id: 1)
comment2 = Comment.create(content: 'Oh no Celtics!', user_id: user2.id, game_id: 2)
comment3 = Comment.create(content: 'Jimmy Butler! Unforgettable!', user_id: user3.id, game_id: 3)
comment4 = Comment.create(content: 'Luka, MVP!', user_id: user4.id, game_id: 4)
comment5 = Comment.create(content: 'Are you kidding me, Paul?', user_id: user5.id, game_id: 5)
comment6 = Comment.create(content: 'We got this one, DeRozan!', user_id: user6.id, game_id: 6)

puts 'Done Seeding!'