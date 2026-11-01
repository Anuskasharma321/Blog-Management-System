import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/Layout/Layout'
import Card from './Components/Card/Card'

const Home = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center flex-wrap gap-7 mt-9 space-x-3 mb-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        
        </div>



    </Layout>
  )
}

export default Home