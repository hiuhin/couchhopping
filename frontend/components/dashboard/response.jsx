import React from 'react';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';

class Response extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yes: false,
            maybe: false,
            no: false
        }
        this.handleResponse = this.handleResponse.bind(this);
    }

    handleResponse(response) {
        switch (response) {
            case "yes":
                this.setState({ yes: !this.state.yes, no: false, maybe: false });
                break;
            case "maybe":
                this.setState({ maybe: !this.state.maybe, no: false, yes: false });
                // this.props.toggleResponseForm();
                break;
            case "no":
                this.setState({ no: !this.state.no, yes: false, maybe:false });
                break;
        }
    }

    render() {
        const {requester} = this.props;
        console.log(this.state)
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
                            className={this.state.yes ? "yes activeResponse" : "yes"}
                            onClick={() => this.handleResponse("yes")}
                        >Yes
                        </div>
                        <div 
                            className={this.state.maybe ? "maybe activeResponse" : "maybe"}
                            onClick={() => this.handleResponse("maybe")}
                        >Maybe
                        </div>
                        <div 
                            className={this.state.no ? "no activeResponse" : "no"}
                            onClick={() => this.handleResponse("no")}
                        >No
                        </div>
                    </div>
                </div>
            </div>
        )
    } 

}

export default Response;