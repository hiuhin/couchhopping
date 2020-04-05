import React from 'react';

class Response extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.requestToUser;
        this.handleResponse = this.handleResponse.bind(this);
    }

    handleResponse(response) {
        this.setState({ response: response }, this.updateRequest);
    }

    updateRequest() {
        
        this.props.updateDirectRequest(this.state);
    }


    render() {
        const {requester} = this.props;
        return (
            <div>
                <div className="message">
                    <p>{this.props.message}</p>
                </div>
                <div className="yesnoform multicolumn">
                    <div>
                        Can you host {requester.name}?
                    </div>
                    <div className="yesnobuttons">
                        <div 
                            className={this.state.response === "Yes" ? "yes activeResponse" : "yes"}
                            onClick={() => this.handleResponse("Yes")}>
                            Yes
                        </div>
                        <div 
                            className={this.state.response === "Maybe" ? "maybe activeResponse" : "maybe"}
                            onClick={() => this.handleResponse("Maybe")}>
                            Maybe
                        </div>
                        <div 
                            className={this.state.response === "No" ? "no activeResponse" : "no"}
                            onClick={() => this.handleResponse("No")}>
                            No
                        </div>
                    </div>
                </div>
            </div>
        )
    } 

}

export default Response;