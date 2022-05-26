# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding users..."

User.create!([
    {username: "Ethan",
    password: "111111",
    is_admin: true},

    {username: "John",
    password: "111111",
    is_admin: true},

    {username: "Mary",
    password: "222222",
    is_admin: false},

    {username: "Linda",
    password: "222222",
    is_admin: true},

    {username: "Bob",
    password: "333333",
    is_admin: false},
])

puts "Seeding games..."

Game.create!([
    {name: "Chicago Bulls @ Golden State Warriors",
     date: "11-17-2022",
     time: "7:00 PM",
     venue: "Chase Center, San Francisco, CA",
     image: "https://www.nba.com/bulls/sites/bulls/files/mybulls_19_gsw.jpg"
    },
        
    {name: "Chicago Bulls @ Miami Heat",
        date: "11-19-2022",
        time: "6:00 PM",
        venue: "FTX Arena, Miami, FL",
        image: "https://www.nba.com/bulls/sites/bulls/files/mybulls_matchups1920_mia.jpg"
    },

    {name: "Chicago Bulls @ Brooklyn Nets",
        date: "11-23-2022",
        time: "7:00 PM",
        venue: "Barclays Center, Brooklyn, NY",
        image: "https://www.nba.com/bulls/sites/bulls/files/mybulls_matchups1920_bkn.jpg"
    },

    {name: "Chicago Bulls @ Milwaukee Bucks",
        date: "11-27-2022",
        time: "7:30 PM",
        venue: "Fiserv Forum, Milwaukee, WI",
        image: "https://www.nba.com/bulls/sites/bulls/files/mybulls_matchups1920_mil.jpg"
    },

    {name: "Chicago Bulls @ New York Knicks",
        date: "11-29-2022",
        time: "7:30 PM",
        venue: "Madison Square Garden, New York, NY",
        image: "https://www.nba.com/bulls/sites/bulls/files/mybulls_19_nyk.jpg"
    },
])

puts "Seeding tickets..."

Ticket.create!([
    {   user_id: 1,
        game_id: 1,
        price: 100,
        quantity: 1,},

    {   user_id: 2,
        game_id: 2,
        price: 200,
        quantity: 2,},
    
        {   user_id: 3,
            game_id: 3,
        price: 200,
        quantity: 1,},

        {   user_id: 4,
            game_id: 4,
        price: 100,
        quantity: 1,},

        {   user_id: 5,
            game_id: 5,
        price: 200,
        quantity: 3},
])

puts "Seeding comments..."

Comment.create!([
    {  user_id: 1,
        game_id: 1,
        content: "This game is awesome!"},
    
    {  user_id: 2,
        game_id: 2,
       content: "DeRozan, MVP"},

       {  user_id: 3,
        game_id: 3,
       content: "Come on DeMar"},

       {  user_id: 4,
        game_id: 4,
       content: "Disappointing!!!"},

       {  user_id: 5,
        game_id: 5,
       content: "Bulls Wins"},
    ])

puts "Seeding items..."

Item.create!([
    {  name: "Chicago Bulls Hat",
        price: 70,
      quantity: 10,
      image: "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4586000/altimages/ff_4586839-ffd097755be9ab54b742alt1_full.jpg&w=900"
    },
    
      {  name: "Zach LaVine Jersey",
        price: 80,
      quantity: 10,
      image: "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3774000/altimages/ff_3774093-7461e2ba66e9bbd02901alt1_full.jpg&w=900"
    },

      {  name: "Chicago Bulls Mug",
        price: 40,
      quantity: 10,
      image: "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4164000/altimages/ff_4164410-7c1ca1274518a6d23c3balt1_full.jpg&w=900"
    },
    
      {  name: "DeMar DeRozan T-Shirt",
        price: 90,
        quantity: 10,
        image: "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4728000/altimages/ff_4728175-d2ecbd4424584ec8df88alt1_full.jpg&w=900"
    },

      {  name: "Chicago Bulls Scarf",
        price: 45,
      quantity: 10,
      image: "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4258000/ff_4258431-e7e118a06813957d0bf0_full.jpg&w=900"
    },
    ])