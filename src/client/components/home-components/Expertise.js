import React from 'react'
import Fade from 'react-reveal/Fade'

const data = [
  {
    label: 'Branding',
    percentage: '90%',
    class: 'branding',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium laborum veniam deserunt temporibus necessitatibus
            corporis non voluptatem dignissimos ratione distinctio explicabo
            nemo fuga, nam laboriosam deleniti, ullam recusandae in minima!`,
  },
  {
    label: 'Design',
    percentage: '80%',
    class: 'design',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium laborum veniam deserunt temporibus necessitatibus
            corporis non voluptatem dignissimos ratione distinctio explicabo
            nemo fuga, nam laboriosam deleniti, ullam recusandae in minima!`,
  },
  {
    label: 'Development',
    percentage: '85%',
    class: 'development',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium laborum veniam deserunt temporibus necessitatibus
            corporis non voluptatem dignissimos ratione distinctio explicabo
            nemo fuga, nam laboriosam deleniti, ullam recusandae in minima!`,
  },
]

export default function Expertise() {
  return (
    <Fade>
      <section
        id='expertise'
        className='expertise'
        aria-label='expertise section'>
        <div className='title'>
          <h1>Our Expertise</h1>
          <span className='underline'></span>
        </div>

        <div className='content'>
          {data.map(function (item) {
            return (
              <div key={item.label} className='entry'>
                <div>
                  <div className={item.class}></div>
                  <div className='description'>
                    <span>{item.label}</span>
                    <span>{item.percentage}</span>
                  </div>
                </div>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </Fade>
  )
}
