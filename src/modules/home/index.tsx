import React from 'react'
import Card from './components/Card'

const Home = () => {
  return (
    <div style={{ padding: '15px' }}>
      <Card time={new Date()} weight={200} />
      <Card time={new Date()} weight={200} variant="short" />
      <Card time={new Date()} weight={200} variant="withButton" />
    </div>
  )
}

export default Home
