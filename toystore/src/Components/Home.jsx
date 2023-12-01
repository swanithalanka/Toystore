import React from 'react'
import HeroSlider, { Slide, MenuNav } from 'hero-slider';
import bg_image_1 from '../Assets/home-3.jpg'
import bg_image_2 from '../Assets/home-3.jpg'
import bg_image_3 from '../Assets/home-4.jpg'
function Home() {
    const sliderStyle = {
        marginTop: '50px', 
      };
  return (
    <div>
    <HeroSlider
      height={'100vh'}
      autoplay
      accessibility={{
        shouldDisplayButtons: true,
      }}
      animations={{
        slidingAnimation: 'fade',
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug('onSliding(nextSlide): ', nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            'onBeforeSliding(previousSlide, nextSlide): ',
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug('onAfterSliding(nextSlide): ', nextSlide),
      }}
    >
         <Slide
        label='Bg_image_1'
        background={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(${bg_image_1})`,
          backgroundSize: 'cover',
          shouldLazyLoad: false,
        }}
      >
      </Slide>
      <Slide
        label='Bg_image_2'
        background={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(${bg_image_2})`,
          backgroundSize: 'cover',
          shouldLazyLoad: false,
        }}
      ></Slide>
      <Slide
        label='Bg_image_3'
        background={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(${bg_image_3})`,
          backgroundSize: 'cover',
          shouldLazyLoad: false,
        }}
      ></Slide>
    </HeroSlider>
    </div>
  )
}

export default Home
