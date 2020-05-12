import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Hero() {
  return (
    <Fade>
      <section className='masthead' role='img' aria-label='hero image'>
        <div>
          <h1>Dharma Initiative</h1>
          <a className='explore-button' href='#services'>
            Explore now
          </a>
        </div>
        <div className='icon-container'>
          <a href='#expertise'>
            <i className='fas fa-mouse'></i>
          </a>
        </div>
      </section>
    </Fade>
  )
}
