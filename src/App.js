import React, { Component } from 'react';
import uuid from 'uuid/v1'
import './App.css';

import { Card } from './components/card.js'
import { Layout } from './components/layout.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      cards:
      [ 
      ]
    }
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    this.setState({
      cards:[
        {
          id: uuid(),
          title: "Abide - Cambridge, MA",
          preview: "If you are around Central Square in Cambridge MA -maybe taking a tour of Harvard or MIT-, you should...",
          image: "./images/abide.jpg",
          date: "October, 2019",
          author: "Jeff",
          authoravatar: "./images/avatarjeff.jpg",
        }
      ]
    });
  }

  render() {
    return (
      <Layout>
        <div className="main-body">
          {[...this.state.cards].map((card, index) => {
            return(
              <Card
                key={index}
                title={card.title}
                preview={card.preview}
                image={card.image}
                date={card.date}
                author={card.author}
                authoravatar={card.authoravatar}
                id={card.id}
                />
            )
          })}      
        </div>
      </Layout>
    );
  }
}

export default App;
