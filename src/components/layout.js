import React, { Component } from 'react';

import { Header } from './header.js'
import { Footer } from './footer.js'

const Wrapper = (props) => {
  return(
    <div id="wrapper">
      {props.children}
    </div>
  )
}

class Layout extends Component {

  render() {
    return (
      <body className="single is-preload">
        <Wrapper> 
          <Header/>
          { this.props.children }
          <Footer/>
        </Wrapper>
      </body>
    );
  }
}

export {Layout};
