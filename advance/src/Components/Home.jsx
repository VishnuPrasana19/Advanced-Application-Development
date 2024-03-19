import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
    <>
  <link
    href="https://fonts.googleapis.com/css?family=Amatic+SC|Raleway"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" href="assets/css/styles.css" />
  {/* Forked from a template on Tutorialzine: https://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox */}
  <header>
    <h2>
      <a href="#">Life is a party!</a>
    </h2>
    <nav>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/book">Book Events</Link>
      </li>
      <li>
        <Link to="/view">View Booked Events</Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
    </nav>
  </header>
  <section className="hero">
    <div className="background-image" />
    <div className="hero-content-area">
      <h1>Life is a party!</h1>
      <h3>"Life's too short not to celebrate every birthday!"</h3>
      <Link to="/book" className="btn">
        Book Events
      </Link>
    </div>
  </section>
  <section className="destinations">
    <h3 className="title">Some of our Works:</h3>
    <p>
    "From themed decorations to custom cakes, we specialize in making your birthday celebrations unforgettable. 
    Our experienced team takes care of every detail, ensuring a stress-free experience for you and a magical day for the guest of honor. 
    Whether it's a milestone birthday or a fun-filled theme party, we're here to turn your vision into reality. 
    Let us handle the planning, so you can focus on creating memories that will last a lifetime."
    </p>
    <hr />
    <ul className="grid">
      <li className="small image-1" />
      <li className="large image-2" />
      <li className="large image-3" />
      <li className="small image-4" />
    </ul>
  </section>
  <section className="packages">
    <h3 className="title">ABOUT US</h3>
    <hr />
    <ul className="grid">
      <li>
        <i className="fa fa-compass fa-4x" />
        <h4>Our Mission</h4>
        <p>
        emphasize the commitment to creating unforgettable birthday experiences for clients, 
        ensuring every aspect of their special day is meticulously planned and executed to perfection.
        </p>
      </li>
      <li>
        <i className="fa fa-camera-retro fa-4x" />
        <h3>Our Team</h3>
        <p>
        Introduce the talented individuals who make up the event management team. 
        Share their expertise, experience, and passion for organizing birthday celebrations. 
        Including brief bios or profiles of key team members adds a personal touch and fosters a connection with clients.
        </p>
      </li>
      <li>
        <i className="fa fa-bicycle fa-4x" />
        <h4>Creative Approach</h4>
        <p>
        Describe the company's creative approach to birthday event planning.
         Highlight innovative ideas, unique themes, and attention to detail that set the company 
         apart in the industry. Illustrate how the team 
        strives to infuse creativity and imagination into every event, e
        nsuring it reflects the client's personality and preferences.
        </p>
      </li>
      <li>
        <i className="fa fa-flag-checkered fa-4x" />
        <h4>Services Offered</h4>
        <p>
        Detail the range of services provided by the event management company. 
        This could include full event planning and coordination, venue selection, catering, entertainment, decoration, and more.
         Emphasize the customizable nature of the services to cater to various birthday themes and preferences.
        </p>
      </li>
    </ul>
  </section>
  <section className="testimonials">
    <h3 className="title">Testimonials from our adventurers:</h3>
    <hr />
    <p className="quote">
      Wow! "Our daughter's birthday party organized by Birthday Bash 
      was an absolute hit! From the magical decorations to the seamless coordination, every detail was flawlessly executed. 
      Thank you for creating unforgettable memories that our family will cherish forever."
    </p>
    <p className="author">- Albert Herter</p>
    <p className="quote">
    "I cannot express how grateful we are to Birthday Bash for making our son's birthday celebration truly exceptional. The level of professionalism and dedication displayed by the team was outstanding. 
    They went above and beyond to ensure every aspect of the event exceeded our expectations."
    </p>
    <p className="author">- Sharon Rosenberg</p>
    <p className="quote">
    Working with Birthday Bash was an absolute pleasure. 
    Their creative ideas and attention to detail transformed our backyard into a magical wonderland for our 
    daughter's birthday party. 
    The team was professional, accommodating, and truly brought our vision to life. Highly recommend!"
      sunset, woah. You know? It's like that.
    </p>
    <p className="author">- Luis Mendoza</p>
  </section>
  <section className="contact">
    <h4 className="title">Learn more</h4>
    <hr />
    <form>
      <input type="email" placeholder="Email" />
      <Link to="/home" className="btn">
        Submit
        </Link>
    </form>
  </section>
  <footer>
    <p>
      Images courtesy of <a href="http://unsplash.com/">unsplash</a>.
    </p>
    <p>
     copyright@Birthdaybash.com
    </p>
    <ul>
      <li>
        <a href="#">
          <i className="fa fa-twitter-square fa-2x" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-facebook-square fa-2x" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-snapchat-square fa-2x" />
        </a>
      </li>
    </ul>
  </footer>
</>
</div>
  )
}

export default Home