import heroImage from "../../assets/hero.png"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
const Hero = () => {
  return (
    <section className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[667px] w-full mb-10 relative">
      <div className="bg-white p-3 rounded-3xl max-w-[233px] relative top-8 xl:top-12">
        <div className="relative">
          <img
            src={heroImage}
            alt="Hero Image"
            width={211}
            height={211}
            className="rounded-3xl mb-3"
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary p-2 rounded-full"><FaPlay /></span>
        </div>
        <p><b>Unblock </b>, your best look, one click at a time, your style upgrade starts here, stop today!</p>
      </div>
      <div>
        <h5>MODERN COLLECTION <BsFire /></h5>
        <h1>Every clicks brings you closer to perfection shop now!</h1>
        <div>
          <Link to=''>Check our modern Collection</Link>
          <FaArrowRight />
        </div>
      </div>
    </section>
  )
}

export default Hero;