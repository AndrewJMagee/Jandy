import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state={
      tab: 'JANDY BOBA'
    }
  }

  render() {
    return (
      <header id="header">
        <h1><a href="/">Jandy Boba</a></h1>
        <nav className="links">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="eastcoast.html">East Coast USA</a></li>
            <li><a href="westcoast.html">West Coast USA</a></li>
            <li><a href="asia.html">Asia</a></li>
            <li><a href="therest.html">The Rest!</a></li>
          </ul>
        </nav>
        <nav className="main">
          <ul>
            <li className="search">
              <a className="fa-search" href="#search">Search</a>
              <form id="search" method="get" action="#">
                <input type="text" name="query" placeholder="Search" />
              </form>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export {Header}