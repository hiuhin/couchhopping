import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
          <div className="container">
              <div className="footer">
                <header>CONNECT WITH ME</header>
                <ul className="footer-icons">
                <i className="fab fa-github" />
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-angellist"></i>
                </ul>
              </div>
          </div>
        );
    }
}

export default Footer
