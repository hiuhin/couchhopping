import React from 'react';
import moment from 'moment';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            host_id: this.props.host.id,
            status: "Pending",
            start_date: "",
            end_date: "",
            message: "",
            response: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }
    
    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createDirectRequest(this.state)
        .then(this.props.toggleSuccessNote)
        .then(this.clearForm)
        .then(this.props.toggleRequestForm)
        .then(() => setTimeout(this.props.toggleSuccessNote, 1000))
    }

    clearForm() {
        this.setState({
            start_date: "",
            end_date: "",
            message: ""
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.errors.length > 0) && (prevProps.errors === this.props.errors)) {
            this.props.clearDirectRequestErrors();
        }
    }

    componentWillUnmount(){
        this.props.clearDirectRequestErrors();
    }

    renderErrors() {
        return this.props.errors.map((error,idx) => (
            <li key={idx} className="errors">
                {error}
            </li>
        ))
    }

    render() {
        
        const {toggleRequestForm} = this.props;
        return (
          <div className="requestform padded">
            <form>
              <div className="multicolumn">
                <label className="multicolumn-column">
                  Arrival Date
                  <br />
                  <input
                    type="date"
                    onChange={this.update("start_date")}
                    value={this.state.start_date}
                    required
                  />
                </label>
                <label className="multicolumn-column">
                  Departure Date
                  <br />
                  <input
                    type="date"
                    onChange={this.update("end_date")}
                    value={this.state.end_date}
                    required
                  />
                </label>
              </div>
              <br />
              <label>
                Message
                <br />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  onChange={this.update("message")}
                  placeholder="Introduce yourself with a nice note describing your trip, why you'd like to stay, and why you'd be a great guest."
                  value={this.state.message}
                  required
                />
              </label>
              <div className="errors-container">{this.renderErrors()}</div>
              <div className="requestFormButtons">
                <button className="cancel" onClick={() => toggleRequestForm()}>
                  Cancel
                </button>
                <button onClick={this.handleSubmit}>Send</button>
              </div>
            </form>
          </div>
        );
    }
    
}

export default Request;
