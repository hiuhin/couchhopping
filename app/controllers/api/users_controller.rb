class Api::UsersController < ApplicationController
    def index
       
        @users = User.where(city_id: params[:city_id])
    end

    def create
        # cityint = params[:user][:city_id].to_i

        # @user = User.new(email: params[:user][:email], status: params[:user][:status], name: params[:user][:name], password: params[:user][:password], city_id: cityint)

        @user = User.new(user_params)

        spot = Spot.create(
            max_guests: 1,
            kid_friendly: true,
            pet_friendly: true,
            smoking: true, 
            sleeping_arrangement: "shared room",
            description: "NA",
        )

        @user.spot_id = spot.id

        city = City.find_by(name: params[:user][:city_name])
        @user.city_id = city.id if city

        if @user.save
            login(@user)

            @user.save

            render "api/users/show"

        else
            spot.destroy
            render json: @user.errors.full_messages, status: 422
        end

        
    end

    def show
        @user = User.find_by(id: params[:id])
    end

    def update
        @user = User.find_by(id: params[:id])

        if @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :name, :status, :password, :age, :job, :about_me, :gender, :language, :book, :movie)
    end
end
