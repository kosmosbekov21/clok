import React from 'react'
import { Carousel } from 'react-bootstrap'
import l from '../Slider/Slider.module.scss'
import aaa from '../../../image/slaid/aaa.jpg'
import bbb from '../../../image/slaid/bbb.jpg'
import ddd from '../../../image/slaid/dd.jpg'
const Slider = () => {
  return (
//     <Carousel className={l.slaid}>
//   <Carousel.Item interval={1000}>
//     <img
//       className="d-block w-100"
//       src={aaa}
//       alt="r"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={500}>
//     <img
//       className="d-block w-100"
//       src={bbb}
//       alt="Second slide"
//     />
//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={ddd}
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-10"
//       src={fotoss}
//       alt="Third slide"
//     />
//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100 h-80"
      src={bbb}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Наручные часы Бишкек</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-20"
      src={aaa}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Наручные часы Бишкек</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-80"
      src={ddd}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Наручные часы Бишкек</h3>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel> 
  )
}

export default Slider
