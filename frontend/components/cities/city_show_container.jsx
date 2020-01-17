import React from 'react';
import { connect } from 'react-redux';
import CityShow from './city_show';
import { fetchCity } from '../../actions/city_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = ({ session, entities: { cities, users } }, ownprops) => {
    return {
        city: cities[ownprops.match.params.cityId],
        hosts: Object.values(users),
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    fetchCity: cityId => dispatch(fetchCity(cityId)),
    fetchUsers: cityId => dispatch(fetchUsers(cityId))
})


export default connect(mSTP, mDTP)(CityShow);