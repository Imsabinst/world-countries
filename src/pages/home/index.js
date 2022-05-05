import React from 'react'

//import './home.scss'

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark']

const Home = () => {
  return (
    <div className="home">
      <div className="home__contries">{countries}</div>
    </div>
  )
}

export default Home
