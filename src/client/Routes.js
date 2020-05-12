import React from 'react'
import { Route } from 'react-router-dom'
import Navigation from './components/home-components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function () {
  return (
    <div>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
    </div>
  )
}
