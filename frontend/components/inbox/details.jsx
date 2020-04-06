import React, { Component } from 'react'

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.directRequest;
        this.renderResponse = this.renderResponse.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
    }

    handleResponse(response) {
        this.setState({response: response }, () => this.props.updateDirectRequest(this.state))
    }

    handleDeleteRequest() {
        this.props.deleteDirectRequest(this.props.directRequest.id)
    }


    renderResponse() {
        const { directRequest } = this.props;
  
        if (this.props.currentUser.id === directRequest.host_id) {
            switch (directRequest.response) {
                case "Yes":
                    return <button onClick={() => this.handleResponse("No")}>I Can No Longer Host</button>;
                case "Maybe":
                    return <><button onClick={() => this.handleResponse("Yes")}>Accept Request</button><button onClick={() => this.handleResponse("No")}>Decline Request</button></>;
                case "No":
                    return <button onClick={() => this.handleResponse("Yes")}>Nevermind, I Can Host</button>;
                case "":
                    return <><button onClick={() => this.handleResponse("Yes")}>Accept Request</button><button onClick={() => this.handleResponse("No")}>Decline Request</button></>;
            }
        } else {
            switch (directRequest.response){
                case "Yes":
                    return <><p>Your Request Has Been Accepted!</p><button onClick={this.handleDeleteRequest}>Delete Request</button></>
                default:
                    return <><p>Your Request Is Still Pending...</p><button onClick={this.handleDeleteRequest}>Delete Request</button></> 
            }
        }
    }

    render() {
        const { directRequest } = this.props;

        return (
            <div className="details-response align-right">
                {this.renderResponse()}
            </div>
        )
    }
}

export default Details
