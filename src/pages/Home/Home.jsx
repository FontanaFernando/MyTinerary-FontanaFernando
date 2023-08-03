import React from 'react'
import Layout from '../Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'

const Home = () => {
  return (
    <Layout>
      <article>
        <section>
          <h2>Find the perfect destination</h2>
          <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button>View More</button>
        </section>
        <aside>
          <Carousel />
        </aside>
      </article>
    </Layout>
  )
}

export default Home