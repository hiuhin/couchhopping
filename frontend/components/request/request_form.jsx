import React from 'react';
import { createDirectRequest } from '../../util/direct_request_util';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            host_id: this.props.host.id,
            status: "Pending",
            start: "",
            end: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    updateDate(field) {
        return e => {
        // console.log(e.currentTarget.value)}
            let date = e.currentTarget.value;
                date = new Date(date);
            this.setState({ [field]: date })
        }    
    }

    handleSubmit(e) {
        // console.log(this.props)
        e.preventDefault();
        this.props.createDirectRequest(this.state);
        this.setState({
            start: "",
            end: "",
            message: ""
        })
        this.props.toggleRequestForm();
        // this.props.history.push('/dashboard');
    }

    render() {
        const {toggleRequestForm} = this.props;
        return (
            <div className="requestform padded">
                <form>
                    <div className="multicolumn">
                        <label className="multicolumn-column">
                            Arrival Date<br />
                            <input type="date" onChange={this.updateDate("start")}/>
                        </label>
                        <label className="multicolumn-column">
                            Departure Date<br />
                            <input type="date" onChange={this.updateDate("end")}/>
                        </label>
                    </div>
                    <br/>
                    <label>
                        Message<br />
                        <textarea 
                            name="message" id="" cols="30" rows="5" 
                            onChange={this.update("message")}
                            placeholder="Introduce yourself with a nice note describing your trip, why you'd like to stay, and why you'd be a great guest." />
                    </label>
                    <div className="requestFormButtons">
                        <button className="cancel" onClick={() => toggleRequestForm()}>Cancel</button>
                        <button onClick={this.handleSubmit}>Send</button>
                    </div>
                </form>
                
            </div>
        )
    }

}

export default Request;
