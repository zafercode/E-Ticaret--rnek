import React from 'react'
import Box from '../components/Box'
import ContentSlider from '../components/ContentSlider'
import Ecommerce from '../components/Ecommerce'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'

const Home = () => {
  return (
    <div>
        <Navbar />
        <ImageSlider />
        <Box />
        <Offers />
        <Ecommerce />
        <ContentSlider />
        <Footer />
    </div>
  )
}

export default Home