import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assests/3 (1).jpg"
import img2 from "../assests/4.jpg"


const Services = () => {
  return (
    <div >
        <Carousel  infiniteLoop autoPlay showStatus = {false}
        showArrows = {false} interval={1000}
        showThumbs ={ false}>
<div>
     <img  src= {img1} alt='reloading'/>
     <p className='legend'> Full stack</p>
</div>
<div>
     <img  src= {img2} alt='reloading'/>
     <p className='legend'>peer-to-peer support</p>
</div>

        </Carousel>
    </div>
  )
}

export default Services