import React, { Component } from 'react';


class Footer extends Component {

  render() {
    return (
      <div id="main">
        <section id="footer">
          <ul className="icons">
            <li><a href="https://twitter.com/Jandy_boba" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
          
        </section>
      </div>
    );
  }
}

export { Footer }