import React from 'react'
import Layout from '../Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import './home.css'

const Home = () => {
  return (
    <Layout>
      <article>
        <section className='hero'>
          <h2>Find the perfect destination</h2>
          <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button>View More</button>
        </section>
        <aside>
          <img src="public/beach.svg" alt="beach" />
        </aside>
      </article>
      <section>
        <Carousel />
      </section>
    </Layout>
  )
}

export default Home