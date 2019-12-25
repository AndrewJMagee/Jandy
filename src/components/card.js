import React from 'react';

const CardBox = (props) => {
  return(
    <article className="post">
      {props.children}
    </article>
  )
}

const Image = (props) => {
  return(
    // <img src={props.image} alt="Logo" className="picture">
    // </img>
    <a href="abide.html" class="image featured"><img src={props.image} alt="" /></a>
  )
}


const Header = (props) => {
  return(
    <header>
      <div class="title">
        <h2><a href="abide.html">{props.title}</a></h2>
      </div>
      <div class="meta">
        <time class="published">{props.date}</time>
        <a href="about.html" class="author"><span class="name">{props.author}</span><img src={props.authoravatar} alt="" /></a>
      </div>
    </header>
  )
}

const Footer = (props) => {
  return(
    <footer>
      <ul class="actions">
        <li><a href="abide.html" class="button large">Continue Reading</a></li>
      </ul>
		</footer>
  )
}

const Details = (props) => {
  return(
    <div className="details">
        <p>{props.preview}</p>
    </div>
  )
}

const Star = ({ selected=false, onClick=f=>f }) =>
 <div className={(selected) ? "star selected" : "star"}
      onClick={onClick}>
 </div>

const Card = (props) => {
  return(
    <CardBox>
      <Header title={props.title} date={props.date} author={props.author} authoravatar={props.authoravatar}/>
      <Image image={props.image}/>
      <Details preview={props.preview}/>
      <Footer/>
    </CardBox>
  )
}


export { Card }

