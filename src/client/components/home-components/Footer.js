import React from 'react'
import Fade from 'react-reveal/Fade'

const links = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Google+', url: 'https://myaccount.google.com' },
  { name: 'Behance', url: 'https://behance.net' },
  { name: 'Dribble', url: 'https://dribble.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
]

export default function Footer() {
  return (
    <Fade>
      <footer>
        <div className='primary'>
          <figure>
            <i className='far fa-circle'></i>
            <div className='underline'></div>
          </figure>
          <ul>
            {links.map(function (item) {
              return (
                <li key={item.name}>
                  <a href={item.url} target='_blank'>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
          <div>
            <p>5025 Roosevelt Rd, Moundridge, KS, 67107</p>
            <p>620-253-0311</p>
          </div>
        </div>
        <div className='secondary'>@2020 Dharma Initiative</div>
      </footer>
    </Fade>
  )
}
