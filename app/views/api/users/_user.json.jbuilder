json.extract! user, :id, :email, :name, :status, :age, :job, :about_me, :city_id,
    :gender, :language, :book, :movie, :spot_id

json.city user.city.name
