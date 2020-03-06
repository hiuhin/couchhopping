import React from 'react';

class Request extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="requestform padded">
                <form>
                    <div className="multicolumn">
                        <label className="multicolumn-column">
                            Arrival Date<br />
                            <input type="date" placeholder="yyyy-mm-dd" />
                        </label>
                        <label className="multicolumn-column">
                            Departure Date<br />
                            <input type="date" placeholder="yyyy-mm-dd" />
                        </label>
                    </div>
                    
                    <br/>
                    <label>
                        Message<br />
                        <textarea 
                            name="message" id="" cols="30" rows="10" 
                            placeholder="Introduce yourself with a nice note describing your trip, why you'd like to stay, and why you'd be a great guest." />
                    </label>

                </form>
                
            </div>
        )
    }

}

export default Request;


// import React from 'react';

// class RequestForm extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {

//         if (this.props.user === undefined) return null;
//         return (
//             <div>
//                 <form className="requestform">
//                     hi
//                     <br/>
//                     hi
//                     <br/>
//                     hi
//                     <br/>
//                     hi
//                     <br/>
//                     hi
//                     <br/>
//                     <label>Hosting Availability
//                         <select
//                             value={this.state.status}
//                             // onChange={this.update("status")}
//                         >
//                         <option value="Accepting Guests">
//                             Accepting Guests
//                         </option>
//                         <option value="Not Accepting Guests">
//                             Not Accepting Guests
//                         </option>
//                         </select>
//                     </label>
//                     <label>Gender
//                         <select
//                             value={this.state.gender}
//                             // onChange={this.update("gender")}
//                         >
//                             <option value="female">Female</option>
//                             <option value="male">Male</option>
//                         </select>
//                     </label>
//                     <label>Hosting Availability
//                         <select
//                             value={this.state.status}
//                         // onChange={this.update("status")}
//                         >
//                             <option value="Accepting Guests">
//                                 Accepting Guests
//                         </option>
//                             <option value="Not Accepting Guests">
//                                 Not Accepting Guests
//                         </option>
//                         </select>
//                     </label>
//                     <label>Gender
//                         <select
//                             value={this.state.gender}
//                         // onChange={this.update("gender")}
//                         >
//                             <option value="female">Female</option>
//                             <option value="male">Male</option>
//                         </select>
//                     </label>
//                     <label>Hosting Availability
//                         <select
//                             value={this.state.status}
//                         // onChange={this.update("status")}
//                         >
//                             <option value="Accepting Guests">
//                                 Accepting Guests
//                         </option>
//                             <option value="Not Accepting Guests">
//                                 Not Accepting Guests
//                         </option>
//                         </select>
//                     </label>
//                     <label>Gender
//                         <select
//                             value={this.state.gender}
//                         // onChange={this.update("gender")}
//                         >
//                             <option value="female">Female</option>
//                             <option value="male">Male</option>
//                         </select>
//                     </label>
//                     <label>Hosting Availability
//                         <select
//                             value={this.state.status}
//                         // onChange={this.update("status")}
//                         >
//                             <option value="Accepting Guests">
//                                 Accepting Guests
//                         </option>
//                             <option value="Not Accepting Guests">
//                                 Not Accepting Guests
//                         </option>
//                         </select>
//                     </label>
//                     <label>Gender
//                         <select
//                             value={this.state.gender}
//                         // onChange={this.update("gender")}
//                         >
//                             <option value="female">Female</option>
//                             <option value="male">Male</option>
//                         </select>
//                     </label>
//                     <label>Hosting Availability
//                         <select
//                             value={this.state.status}
//                         // onChange={this.update("status")}
//                         >
//                             <option value="Accepting Guests">
//                                 Accepting Guests
//                         </option>
//                             <option value="Not Accepting Guests">
//                                 Not Accepting Guests
//                         </option>
//                         </select>
//                     </label>
//                     <label>Gender
//                         <select
//                             value={this.state.gender}
//                         // onChange={this.update("gender")}
//                         >
//                             <option value="female">Female</option>
//                             <option value="male">Male</option>
//                         </select>
//                     </label>
//                 </form>
//             </div>

//         )
//     }
// }

// export default RequestForm;