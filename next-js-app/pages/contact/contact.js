import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import img from './img/rasm.jpg';
import img2 from './img/rasm2.png';
import Image from 'next/image'

const Contact= () => {
  return (
    <>
      <Splide options = {
      {
        type :  'loop',
        autoplay: true,
        interval: 4000,
        speed: 1000,
        pagination: false,
        arrows: true
      }
      }>
        <SplideSlide>
           <Image
        src={img}
        alt="Landscape picture"
        style={{borderRadius: '20px'}}
        height={500}
      />
        </SplideSlide>
        <SplideSlide>
         <Image
        src={img2}
        style={{borderRadius: '20px'}}
        alt="Landscape picture"
        height={500}
      />
        </SplideSlide>
  </Splide>;
        
    </>
  )
}


export default Contact