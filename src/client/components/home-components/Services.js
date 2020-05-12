import React from 'react'
import Fade from 'react-reveal/Fade'

const data = [
  {
    icon: 'fas fa-drafting-compass',
    title: 'Graphic Design',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            temporibus suscipit deleniti saepe alias recusandae velit eum.
            Soluta, sed fuga repellat hic officiis minima voluptatum sapiente!
            Nulla tempore velit modi!`,
  },
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            temporibus suscipit deleniti saepe alias recusandae velit eum.
            Soluta, sed fuga repellat hic officiis minima voluptatum sapiente!
            Nulla tempore velit modi!`,
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Marketing',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            temporibus suscipit deleniti saepe alias recusandae velit eum.
            Soluta, sed fuga repellat hic officiis minima voluptatum sapiente!
            Nulla tempore velit modi!`,
  },
]

export default function Services() {
  return (
    <Fade>
      <section id='services' className='services' aria-label='services section'>
        {data.map(function (item) {
          return (
            <div key={item.title}>
              <figure>
                <i className={item.icon}></i>
              </figure>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          )
        })}
      </section>
    </Fade>
  )
}
