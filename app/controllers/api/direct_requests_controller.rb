class Api::DirectRequestsController < ApplicationController
    def show
        @direct_request = Direct_request.find(params[:id])
    end

    def create
        @direct_request = Direct_request.new(direct_request_params)
            if @direct_request.save
                render "api/direct_requests/show"
            else
                render json: @direct_request.errors.full_messages, status: 422
            end
    end

    def destroy
        @direct_request = Direct_request.find(params[:id])
            if @direct_request.destroy
                render "api/direct_requests/show"
            else
                render json: @direct_request.errors.full_messages, status: 422
            end
    end

    
    private
    
    def direct_request_params
        params.require(:direct_request).permit(
            :status,
            :start,
            :end,
            :message
        )
    end

end
