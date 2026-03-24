import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedDestination from './components/FeaturedDestination'
import ExclusiveOffers from './components/ExclusiveOffers'
import Testimonials from './components/Testimonials'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonials/>
    </>
  )
}

export default Home
