import React, { Component } from 'react'

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.directRequest;
        this.renderResponse = this.renderResponse.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    handleResponse(response) {
        this.setState({response: response }, () => this.props.updateDirectRequest(this.state))
    }


    renderResponse() {
        const { directRequest, updateDirectRequest } = this.props;
        // console.log(directRequest.id)
        // console.log(directRequest.host_id)
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
                    return "Your Request Has Been Accepted!"
                default:
                    return "Your Request Is Still Pending..."
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
