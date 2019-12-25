import React, { Component } from 'react';

import { Layout } from './layout.js'

class About extends Component {
  render() {
    return (
      <Layout>
        <div id="main">
          <article className="post">
            <header>
              <div className="title">
                <h2>Anniversary card, cleverly hidden inside my gift</h2>
                <p>I'll love you always, Jeff</p>
              </div>
              
            </header>
            <span className="image featured"><img src="images/aboutpic.jpg" alt="" /></span>
            <p> This blurb will be stored on privately so it is kind of like an electronic card, I suppose. </p>
            <p>These have been the most amazing two years of my life, I am so glad to have spent them with you. You are undoubtedly the most amazing person I have ever known. Kind, talented, brilliant, harworking, 
            compassionate, sexy ;) don't even being to describe you. You have been with me through some really hard times lately and I am infinetly grateful for that. The memories I have made with you over the last 24 months will be cherished for the rest of my life. 
            The times we had in SF, all the cooking and playing games, all the amazing discussions we've had, all the times you have changed my mind (and of course, we can't forget all the lick fights >:)). Every second with you is one that is well spent. You mean everything to me and I can't wait to make more memories together. 
            </p>
            <p>I love you with unimaginable intensity,</p>
            <p> Andy &lt;3 </p>
          </article>

        </div>
      </Layout>
    );
  }
}

export default About;
