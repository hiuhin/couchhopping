import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSessionErrors();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.closeModal());
        this.setState({
            email: '',
            password: ''
        });

    }

    handleDemo(e) {
        e.preventDefault();

        const user = {
            email: 'demo@email.com',
            password: "123456"
        }
        this.demo(user);
        this.setState({
            name: '',
            email: '',
            password: ''
        });
        // this.props.closeModal();
    }

    demo(user) {
        const intervalSpeed = 75;
        const { email, password } = user;
        const demoEmailTime = email.length * intervalSpeed;
        const demoPasswordTime = password.length * intervalSpeed;
        const buffer = intervalSpeed * 2;
        const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
        this.demoEmail(email, intervalSpeed);
        setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
        setTimeout(() => this.props.processForm(user), totalDemoTime + 500);
        setTimeout(() => this.props.closeModal(), totalDemoTime + 800);
    }

    demoEmail(email, intervalSpeed) {
        let i = 0;
        setInterval(() => {
            if (i <= email.length) {
                this.setState({ email: email.slice(0, i) });
                i++;
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }

    demoPassword(password, intervalSpeed) {
        let j = 0;
        setInterval(() => {
            if (j <= password.length) {
                this.setState({ password: password.slice(0, j) });
                j++;
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }

    handleCloseModal() {
        this.props.clearSessionErrors();
        this.props.closeModal();
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
        )
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div onClick={this.handleCloseModal} className="close-x">&#x2715;</div>
                    <h3>Log in to CouchHopping</h3><br />
                    <div className="errors">{this.renderErrors()}</div>
                    <div className="login-form">
                        <br />
                        <label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder="Email"
                            />
                        </label>
                        <br />
                        <label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password"
                            />
                        </label>
                        <br />
                        <div className="loginformbuttons">
                            <label>
                                <input
                                    className="login-submit"
                                    type="submit"
                                    value="Log In"
                                />
                                <br />
                            </label>
                            <label>
                                <input
                                    type="button"
                                    className="login-submit demo"
                                    onClick={this.handleDemo}
                                    value="Demo" />
                            </label>
                        </div>
                        <h5>Don't have an account?</h5>
                        <div onClick={this.handleCloseModal}>{this.props.signupLink}</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;
