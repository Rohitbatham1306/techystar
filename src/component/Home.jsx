import React from 'react'
import vg from "../assests/2.webp"

import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Techystar</h1>
          <p> Solotion to all your problem </p>
        </main>
      </div>

      <div className='home2' >
        <img src={vg} alt='Graphics' />
        <div>

          <p>
            We are your one and only solution to the tech problems you face
            every day.
            We are leading tech company whose aim is to increase the problem
            solving ability in children.

          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1> Who we are?</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt, similique libero distinctio nobis debitis cupiditate aliquid illo reprehenderit,
            saepe rem quam, consectetur maxime. Neque cupiditate reprehenderit qui rem, ullam labore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt, similique libero distinctio nobis debitis cupiditate aliquid illo reprehenderit,
            saepe rem quam, consectetur maxime. Neque cupiditate reprehenderit qui rem, ullam labore
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt, similique libero distinctio nobis debitis cupiditate aliquid illo reprehenderit,
            saepe rem quam, consectetur maxime. Neque cupiditate reprehenderit qui rem, ullam labore</p>
        </div>
      </div>


      <div className="home4" id='brands'> 
        <div>
          <h1> Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p> Google </p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p> Amazon </p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p> Youtube </p>
            </div>

            <div style={{ animationDelay: "0.1s" }}>
              <AiFillInstagram />
              <p> instagram  </p>
            </div>

          </article>
        </div>
      </div>
    </>
  )
}

export default Home