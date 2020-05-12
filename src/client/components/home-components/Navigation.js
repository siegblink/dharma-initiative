import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

const links = [
  {name: 'Home', url: '/'},
  {name: 'About', url: '/about'},
  {name: 'Contact', url: '/contact'}
]

export default function Navigation() {
  const [burgerIsClicked, setBurgerIsClicked] = useState(false)

  function handleBurgerIsClicked() {
    setBurgerIsClicked(!burgerIsClicked)
  }

  return (
    <Fade top>
      <nav aria-label='main navigation'>
        <figure className='logo'>
          <i className='far fa-circle'></i>
        </figure>

        <Burger handleClick={handleBurgerIsClicked} />

        <ul>
          {links.map(function (item) {
            return (
              <li key={item.name}>
                <Link to={item.url}>{item.name}</Link>
                <span></span>
              </li>
            )
          })}
        </ul>

        {burgerIsClicked && <MobileNavigation />}
      </nav>
    </Fade>
  )
}

function Burger(props) {
  const { handleClick } = props

  return (
    <Fade>
      <div className='burger' onClick={handleClick}>
        <div className='menu'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </Fade>
  )
}

function MobileNavigation() {
  return (
    <Fade>
      <div className='mobile-nav'>
        {links.map(function (item) {
          return (
            <div key={item.url}>
              <Link to={item.url}>{item.name}</Link>
              <span></span>
            </div>
          )
        })}
      </div>
    </Fade>
  )
}
