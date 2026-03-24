import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testimonials/>
      <NewsLetter/>
    </>
  )
}

export default Home
