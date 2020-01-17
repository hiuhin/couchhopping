json.extract! city, :id, :name

json.photoURL url_for(city.photo)
json.iconURL url_for(city.icon)