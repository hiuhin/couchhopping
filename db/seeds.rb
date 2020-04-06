# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Spot.delete_all
City.delete_all
DirectRequest.delete_all

s1 = Spot.create!(
    max_guests: Faker::Number.within(range: 1..3),
    kid_friendly: true,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "I live in a bright, cozy studio apartment and have a twin size airbed for guests."
)

s2 = Spot.create!(
    max_guests: 1,
    kid_friendly: false,
    pet_friendly: false,
    smoking: false, 
    sleeping_arrangement: "shared room",
    description: "You will be my roommate if you stay. I can only host one person per evening for now with my very limited space (used to host couples), please mention you check my living situation. The fold out futon will be your bed with sheets and blankets. It is next to my bed. The downside is you don't have much privacy, also please mention that you are clean and won’t bring bedbugs to my futon. !!!Please mention you use deodorant or perfume and not snore!!! "
)

s3 = Spot.create!(
    max_guests: 1,
    kid_friendly: false,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "public room",
    description: "I have a sofa in the living room that's available. "
)

s4 = Spot.create!(
    max_guests: 4,
    kid_friendly: true,
    pet_friendly: true,
    smoking: true, 
    sleeping_arrangement: "shared bed",
    description: "I got two mattresses in my room that I can offer you. There won't be too much floor space left if they are both in use, but if that's fine for you, it's fine for me! :)"
)

s5 = Spot.create!(
    max_guests: 1,
    kid_friendly: true,
    pet_friendly: true,
    smoking: true, 
    sleeping_arrangement: "public room",
    description: "I live in a small apartment with a couch in the living area/kitchen."
)

s6 = Spot.create!(
    max_guests: 3,
    kid_friendly: false,
    pet_friendly: false,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "Guest room available that fits a family of 3. Absolutely no smoking, no kids, and no pets."
)

s7 = Spot.create!(
    max_guests: 3,
    kid_friendly: true,
    pet_friendly: true,
    smoking: true, 
    sleeping_arrangement: "private room",
    description: "Guest room available that fits a family of 3."
)

s8 = Spot.create!(
    max_guests: 2,
    kid_friendly: true,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "Please contact me for more information. Thank you!"
)

s9 = Spot.create!(
    max_guests: 8,
    kid_friendly: true,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "Three bedroom house- the whole house- free for you and your guests! You're very welcome."
)

s10 = Spot.create!(
    max_guests: 1,
    kid_friendly: false,
    pet_friendly: false,
    smoking: true, 
    sleeping_arrangement: "shared room",
    description: "You will be my roommate if you stay. I can only host one person per evening for now with my very limited space (used to host couples), please mention you check my living situation. The fold out futon will be your bed with sheets and blankets. It is next to my bed. The downside is you don't have much privacy, also please mention that you are clean and won’t bring bedbugs to my futon. !!!Please mention you use deodorant or perfume and not snore!!! "
)

s11 = Spot.create!(
    max_guests: 3,
    kid_friendly: true,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "Extra guest bedroom has one queen bed and one twins bed. Bathroom is shared. Close to shopping mall and restaurants. I look forward to meeting you!"
)


c1 = City.create!(
    name: "San Francisco"
)

c2 = City.create!(
    name: "Los Angeles"
)

c3 = City.create!(
    name: "New York"
)

c4 = City.create!(
    name: "Austin"
)

c5 = City.create!(
    name: "Chicago"
)

c6 = City.create!(
    name: "Atlanta"
)

c1.photo.attach( io: File.open("#{Rails.root}/db/images/sf.jpg"), filename: "sf.jpg")
c2.photo.attach( io: File.open("#{Rails.root}/db/images/la.jpg"), filename: "la.jpg")
c3.photo.attach( io: File.open("#{Rails.root}/db/images/nyc.jpg"), filename: "nyc.jpg")
c4.photo.attach( io: File.open("#{Rails.root}/db/images/austin.jpg"), filename: "austin.jpg")
c5.photo.attach( io: File.open("#{Rails.root}/db/images/chicago.jpg"), filename: "chicago.jpg")
c6.photo.attach( io: File.open("#{Rails.root}/db/images/atlanta.jpeg"), filename: "atlanta.jpeg")


c1.icon.attach( io: File.open("#{Rails.root}/db/images/sf-icon.jpeg"), filename: "sf-icon.jpeg")
c2.icon.attach( io: File.open("#{Rails.root}/db/images/la-icon.jpg"), filename: "la-icon.jpg")
c3.icon.attach( io: File.open("#{Rails.root}/db/images/ny-icon.jpg"), filename: "ny-icon.jpg")
c4.icon.attach( io: File.open("#{Rails.root}/db/images/austin-icon.jpg"), filename: "austin-icon.jpg")
c5.icon.attach( io: File.open("#{Rails.root}/db/images/chicago-icon.jpg"), filename: "chicago-icon.jpg")
c6.icon.attach( io: File.open("#{Rails.root}/db/images/atlanta-icon.jpg"), filename: "atlanta-icon.jpg")


u1 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.matz,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s1.id
)
u2 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Not Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.matz,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s2.id
)
u3 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.matz,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English, Spanish",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s3.id
)
u4 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.matz,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s4.id
)
u5 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.matz,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English, French",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s5.id
)
u6 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Not Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.famous_last_words,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s6.id
)
u7 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.famous_last_words,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s7.id
)
u8 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.famous_last_words,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English, Chinese",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s8.id
)
u9 = User.create!(
    email: Faker::Internet.email,
    name: Faker::Name.name,
    status: 'Not Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: Faker::Job.title,
    about_me: Faker::Quote.famous_last_words,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s9.id
)
u10 = User.create!(
    email: 'demo@email.com',
    name: 'Demo User',
    status: 'Accepting Guests',
    age: Faker::Number.within(range: 18..80),
    job: "Student",
    about_me: Faker::Quote.matz,
    city_id: [c1,c2,c3,c4,c5,c6].sample.id,
    password: '123456',
    gender: Faker::Gender.binary_type,
    language: "English",
    book: Faker::Book.title,
    movie: Faker::Movie.quote,
    spot_id: s10.id
)

u11 = User.create!(
    email: 'anne@email.com',
    name: 'Anne Wong',
    status: 'Accepting Guests',
    age: 18,
    job: "Software Engineer",
    about_me: "My dream is the ability to make anywhere in the world my office",
    city_id: c1.id,
    password: '123456',
    gender: "Female",
    language: "English, Chinese", 
    book: "The Power of Now",
    movie: "You got a dream. You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period.",
    spot_id: s11.id
)


d1 = DirectRequest.create!(
    user_id: 1,
    host_id: 10,
    status: "Pending", 
    start: "2021-10-18",
    end: "2021-10-22",
    message: "Planning to celebrating my birthday at a new town. Will you offer me your place to stay?",
    response: ""
)

d2 = DirectRequest.create!(
    user_id: 2,
    host_id: 10,
    status: "Pending", 
    start: "2020-12-06",
    end: "2020-12-12",
    message: "I'd make a great guest because I love to get to know complete strangers. I can even cook for you! Will you respond to me as soon as possible? Thank you.",
    response: ""
)

d3 = DirectRequest.create!(
    user_id: 11,
    host_id: 10,
    status: "Pending", 
    start: "2021-01-10",
    end: "2021-01-18",
    message: "Hello there, my name is Anne. I'm planning to visit Austin next year during the holidays and would love to meet locals and hang out. Would you be able to host me?",
    response: ""
)

d4 = DirectRequest.create!(
    user_id: 10,
    host_id: 11,
    status: "Pending", 
    start: "2023-06-10",
    end: "2023-06-18",
    message: "I'm planning a low-budget trip and I'll need your hospitality to make it happen. Thank you in advance for your kindness, I will return the favor in the future!",
    response: ""
)

d5 = DirectRequest.create!(
    user_id: 10,
    host_id: 3,
    status: "Pending", 
    start: "2021-07-27",
    end: "2021-07-27",
    message: "Every year I try to go visit a new place and this year I plan to visit your city.",
    response: "Yes"
)

d6 = DirectRequest.create!(
    user_id: 7,
    host_id: 10,
    status: "Pending", 
    start: "2020-03-12",
    end: "2020-03-15",
    message: "Hello there! I have a work trip coming up and I'm planning to extend an extra few days afterward to explore the area. Would your place be available?",
    response: ""
)

d7 = DirectRequest.create!(
    user_id: 10,
    host_id: 4,
    status: "Pending", 
    start: "2069-12-24",
    end: "2069-12-25",
    message: "I know this trip is 50 years from now, but it's a very special day for me and I hope you can accept my request.",
    response: ""
)