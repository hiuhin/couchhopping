import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            city_id: 0,
            status: 'Accepting Guests'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    }

    handleDemo(e) {
        const user = {
            name: 'Demo',
            email: 'demo@email.com',
            password: 123456
        }
        this.props.processDemoForm(user);
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                     <li key={`error-${i}`}>
                            {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <h2>{(this.props.formType === "signup") ? "Sign Up With Email" : "Log In"}</h2><br/>
                    <div className="errors">{this.renderErrors()}</div>
                    <div className="signup-form">
                        <br /> 
                        <label>Name<br/>
                            <input type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Email<br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Password<br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <div className="sessionbuttons">
                            <label>
                                <input 
                                    className="session-submit" 
                                    type="submit" 
                                    value={(this.props.formType === "signup") ? "Join" : "Log In"}  />
                                <br />
                            </label>
                            <label>
                                <input 
                                    type="button"
                                    className="session-submit demo"
                                    onClick={this.handleDemo}
                                    value="Demo User" />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
