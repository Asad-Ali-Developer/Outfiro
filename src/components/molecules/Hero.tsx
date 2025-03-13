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
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full w-8 h-8 cursor-pointer flex justify-center items-center">
            <span className="absolute h-full w-full rounded-full bg-white opacity-50 animate-ping"></span>
            <FaPlay className="text-sm relative left-[1px] text-white" />
          </span>
        </div>
        <p className="text-[13px]"><b className="uppercase">Unblock </b>, your best look, one click at a time, your style upgrade starts here, stop today!</p>
      </div>
      <div className="mt-12 sm:mt-20 xl:mt-40 max-w-[777px]">
        <h5 className="flex items-baseline gap-x-2 uppercase text-secondary medium-18">
          MODERN COLLECTION
          <BsFire />
        </h5>
        <h1 className="h1 font-[500] capitalize max-w-[772px]">Every clicks brings you closer to perfection shop now!
        </h1>
        <div className="flex">
          <Link to='' className="bg-white text-xs font-medium pl-5 rounded-full flexCenter gap-x-2 group">
            Check our modern Collection
            <FaArrowRight className="bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg] transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;