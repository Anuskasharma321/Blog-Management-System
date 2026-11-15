import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/Layout/Layout'
import Card from './Components/Card/Card'

const Home = () => {
  return (
   <Layout>
  <div className='flex flex-wrap justify-center space-x-5 mt-6'>
    {
      blogs.length > 0 && blogs.map((blog)=>{
        console.log(blog)
        return (
          <Card blog={blog} />
        )
      })
    }
  

  </div>
   </Layout>
  )
}


export default Home