import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
          <div className="footer-container">
            <div className="footer">
              <div>
                <header>CONNECT WITH ME</header>
                <ul className="footer-icons">
                    <a href="https://github.com/hiuhin" target="_blank">
                        <i className="fab fa-github" /></a>
                    <a href="https://www.linkedin.com/in/anne-wong-231b0417a/" target="_blank">
                        <i className="fab fa-linkedin-in"></i></a>
                    <a href="https://angel.co/u/anne-wong-6" target="_blank"><i className="fab fa-angellist"></i></a>
                </ul>
              </div>
              <div>© 2020 Clone of CouchSurfing.com by Hiu Hin Anne Wong</div>
            </div>
          </div>
        );
    }
}

export default Footer
