class Api::DirectRequestsController < ApplicationController
    def index
        @direct_requests_by_user = current_user.direct_requests.all
        @direct_requests_to_user = DirectRequest.where(host_id: current_user.id)
    end
    
    def show
        @direct_request = DirectRequest.find(params[:id])
    end

    def create
        @direct_request = DirectRequest.new(direct_request_params)
            if @direct_request.save!
                render "api/direct_requests/show"
            else
                render json: @direct_request.errors.full_messages, status: 422
            end
    end

    def destroy
        @direct_request = DirectRequest.find(params[:id])
            if @direct_request.destroy
                render "api/direct_requests/show"
            else
                render json: @direct_request.errors.full_messages, status: 422
            end
    end
    
    private
    
    def direct_request_params
        params.require(:direct_request).permit(
            :user_id,
            :host_id,
            :status,
            :start,
            :end,
            :message,
            :response
        )
    end

end
