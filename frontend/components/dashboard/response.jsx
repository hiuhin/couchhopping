import React from 'react';

class Response extends React.Component {

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
                        <span className="yes">Yes</span>
                        <span>Maybe</span>
                        <span className="no">No</span>
                    </div>
                </div>
            </div>
        )
    } 

}

export default Response;