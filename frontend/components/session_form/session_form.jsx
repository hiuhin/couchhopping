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
                    {(this.props.formType === "signup") ? "Sign Up With Email" : "Log In"} 
                    {this.renderErrors()}
                    <div className="signup-form">
                        <br />
                        <label>Name:
                            <input type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <input 
                            className="session-submit" 
                            type="submit" 
                            value={(this.props.formType === "signup") ? "Join" : "Log In"}  />
                        <br />
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
