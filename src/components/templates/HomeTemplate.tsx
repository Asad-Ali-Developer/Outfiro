import { Banner, Blog, Feature, NewArrival, PopularProducts } from "../atoms"
import Footer from "../atoms/Footer"
import { Hero } from "../molecules"

const HomeTemplate = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <NewArrival />
      <Banner />
      <PopularProducts />
      <Blog />
      <Footer />
    </div>
  )
}

export default HomeTemplate