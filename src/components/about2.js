import React, { Component } from 'react';

import { Layout } from './layout.js'

class About2 extends Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <article className="post">
            <header>
              <div className="title">
                <h2>Christmas card, cleverly not that hidden (yet)</h2>
                <p>I love you sooo much Andy :3</p>
              </div>
              
            </header>
            <span className="image featured"><img src="images/aboutpic.jpg" alt="" /></span>
            <p> Soooo images, most links and the backend still aren't really working, but it will look a lot better soon! 
              Thanks for being such a wonderful boyfriend and for always putting so much into the relationship. You're 
              always so considerate and compassionate, and I am so lucky to have met you. I love how you're always challenging my beliefs
              and constantly teaching me how to be a better thinker and person. I  can't wait until next year
              when we can spend Christmas together finally :). I love the memories we've made together from the games we play 
              and meals we cook to just laying in bed not doing much. I look forward our future together!</p>
            
            <p>Love,</p>
            <p> Jeff &lt;3 </p>
          </article>

        </div>
      </Layout>
    );
  }
}

export default About2;
