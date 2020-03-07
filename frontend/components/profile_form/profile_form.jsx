import React from 'react';


class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToUserProfile = this.navigateToUserProfile.bind(this);
    }
    componentDidMount() {
        // this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUser(this.props.currentUser.id)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
        this.navigateToUserProfile();
    }

    navigateToUserProfile() {
        const url = `/profile/${this.props.currentUser.id}`
        this.props.history.push(url);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }


    render() {
        if (this.props.user === undefined) return null;
        const {status, job, language, about_me, book, movie, age} = this.state;
        const {currentUser } = this.props;
        return (
            <div className="profileformbox">
                <h2>{currentUser.name}</h2>
                <form className="profileform">
                <label>Hosting Availability
                    <select 
                        value={this.state.status} 
                        onChange={this.update("status")}>
                        <option value="Accepting Guests">
                            Accepting Guests
                        </option>
                        <option value="Not Accepting Guests">
                            Not Accepting Guests
                        </option>
                    </select>
                </label>
                <label>Gender
                    <select 
                        value={this.state.gender}
                        onChange={this.update("gender")}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </label>
                <label>Occupation
                    <input type="text" value={job} onChange={this.update("job")}/>
                </label>
                
                <label>Languages I'm Fluent In
                    <input type="text" value={language} onChange={this.update("language")}/>
                </label>
                <label>Age<br/>
                    <input type="text" value={age} onChange={this.update("age")} />
                </label>
                <label>About Me
                    <textarea value={about_me} onChange={this.update("about_me")}/>
                </label>
                <label>Favorite Book
                    <input type="text" value={book} onChange={this.update("book")}/>
                </label>
                <label>Favorite Movie Quote
                    <input type="text" value={movie} onChange={this.update("movie")}/>
                </label>
                <button onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        )
    }
}

export default ProfileForm;