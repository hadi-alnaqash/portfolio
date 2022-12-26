import React from 'react'
import { About } from '../components/home/about'
import Connect from '../components/home/connect'
import Footer from '../components/home/footer'
import Head from '../components/home/head'
import NavBar from '../components/home/navBar'
import Projcts from '../components/home/projects'
import Services from '../components/home/services'


const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <Head />
      <About />
      <Services />
      <Projcts />
      <Connect />
      <Footer />
    </div>
  )
}

export default HomeScreen