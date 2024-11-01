import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Investor Infrastructure Assistant</title>
        <meta property="og:title" content="Investor Infrastructure Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
