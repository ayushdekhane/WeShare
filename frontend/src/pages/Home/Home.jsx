import React, { useState } from 'react'
import Header from '../../components/Header/Header'
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Headervideo from '../../components/Headervideo/headervideo'
import Quotes from '../../components/quotes/quotes'

const Home = () => {
  return (
    <>

      <Headervideo/>
      <FoodDisplay/>
      <Header/>
      <Quotes/>
      <AppDownload/>
    </>
  )
}

export default Home
