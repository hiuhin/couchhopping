import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            city_name: 'San Francisco',
            status: 'Accepting Guests',
            job: "NA",
            age: "NA",
            gender: "NA",
            language: "NA",
            about_me: "Describe your hobbies, countries you've visited, dream destinations, etc...",
            book: "NA",
            movie: "NA"
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCity = this.handleCity.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    // handleCity(e) {
    //     switch (e.currentTarget.value) {
    //         case "San Francisco":
    //             this.setState({
    //                 city_id: 1
    //             });
    //             break;
    //         case "Los Angeles":
    //             this.setState({
    //                 city_id: 2
    //             });
    //             break;
    //         case "New York":
    //             this.setState({
    //                 city_id: 3
    //             });
    //             break;
    //         case "Austin":
    //             this.setState({
    //                 city_id: 4
    //             });
    //             break;
    //         case "Chicago":
    //             this.setState({
    //                 city_id: 5
    //             });
    //             break;
    //         case "Atlanta":
    //             this.setState({
    //                 city_id: 6
    //             });
    //             break;
    //     }
    // }

    handleCity(e) {
        this.setState({
            city_name: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSessionErrors();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            name: '',
            email: '',
            password: '',
        });
    }

    handleOpenModal() {
        this.props.clearSessionErrors();
        this.props.openModal();
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
                <h1>Stay with Locals and Meet Travelers</h1>
                <h3>Share Authentic Travel Experiences</h3>
                <br />
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <h2>Sign Up With Email</h2><br />
                    <div className="errors">{this.renderErrors()}</div>
                    <div className="signup-form">
                        <br />
                        <label>Name<br />
                            <input type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                className="signup-input"
                                placeholder="First and Last Name"
                            />
                        </label>
                        <br />
                        <label>Email<br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                                placeholder="Email"
                            />
                        </label>
                        <br />
                        <label className="signup-password">Password<br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                                placeholder="Password"
                            />
                        </label>
                        <label className="signup-select">Location<br />
                            <select onChange={this.handleCity} >
                                <option value="San Francisco">San Francisco</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="New York">New York</option>
                                <option value="Austin">Austin</option>
                                <option value="Chicago">Chicago</option>
                                <option value="Atlanta">Atlanta</option>
                            </select>
                        </label>
                        <br />
                        <div className="signupbuttons">
                            <label>
                                <input
                                    className="signupjoin"
                                    type="submit"
                                    value="  Join  " />
                                <br />
                            </label>
                        </div>
                    </div>
                </form>
                <div className="loginsection">
                    <br />
                    <div>Already a member?</div>
                    <div className="loginlink" onClick={this.handleOpenModal}>Login</div>
                </div>

            </div>
        );
    }
}

export default SessionForm;
