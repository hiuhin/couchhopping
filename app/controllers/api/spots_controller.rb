class Api::SpotsController < ApplicationController
    before_action :require_logged_in

    def show
        @spot = Spot.find(params[:id])
    end

    def create
         @spot = Spot.new(spot_params)
        if @user.save
            render "api/spots/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def edit
        @spot = Bench.update!(bench_params)
        render :show
        if @spot.update
            render :show
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end

    private
    
    def spot_params
        params.require(:spot).permit(
            :max_guests,
            :kid_friendly,
            :pet_friendly,
            :smoking, 
            :sleeping_arrangement,
            :description
        )
    end
end
