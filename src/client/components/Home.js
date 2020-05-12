import React, { Fragment } from 'react'
import Hero from './home-components/Hero'
import Services from './home-components/Services'
import Expertise from './home-components/Expertise'
import Stories from './home-components/Stories'
import Footer from './home-components/Footer'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Expertise />
      <Stories />
      <Footer />
    </Fragment>
  )
}
