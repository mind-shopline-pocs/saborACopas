
import Carousel from 'react-bootstrap/Carousel';
import SaborACopasLogo from '../../assets/Logo-SaborACopas.svg';
import alesmith from '../../assets/alesmith-banner.svg';
import ramuri from '../../assets/ramuri-banner.svg';
import carolus from '../../assets/carolus-banner.svg';


import React from 'react'

export const Carrousel = () => {
  return (
    <>
     <Carousel data-bs-theme="dark">
     <Carousel.Item>
        <img
          className="d-block w-100"
          src={alesmith}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5 className='text-light'>Third slide label</h5>
          <p className='text-light'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {carolus}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5 className='text-light'>Third slide label</h5>
          <p className='text-light'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ramuri}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='text-light'>Third slide label</h5>
          <p className='text-light'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}
