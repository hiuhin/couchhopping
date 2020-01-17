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
    kid_friendly: true,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "Guest room available that fits a family of 3."
)

s7 = Spot.create!(
    max_guests: 3,
    kid_friendly: true,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "Guest room available that fits a family of 3."
)

s8 = Spot.create!(
    max_guests: 3,
    kid_friendly: true,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "Guest room available that fits a family of 3."
)

s9 = Spot.create!(
    max_guests: 3,
    kid_friendly: true,
    pet_friendly: true,
    smoking: false, 
    sleeping_arrangement: "private room",
    description: "Guest room available that fits a family of 3."
)

s10 = Spot.create!(
    max_guests: 1,
    kid_friendly: false,
    pet_friendly: false,
    smoking: false, 
    sleeping_arrangement: "shared room",
    description: "You will be my roommate if you stay. I can only host one person per evening for now with my very limited space (used to host couples), please mention you check my living situation. The fold out futon will be your bed with sheets and blankets. It is next to my bed. The downside is you don't have much privacy, also please mention that you are clean and won’t bring bedbugs to my futon. !!!Please mention you use deodorant or perfume and not snore!!! "
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


d1 = DReq.create!(
    user_id: 1,
    host_id: 2,
    status: "Pending", 
    start: 2020-04-01,
    last: 2020-04-02,
    message: ""
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