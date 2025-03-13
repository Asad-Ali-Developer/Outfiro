import { feature_1, feature_2 } from "../../assets/features";

const Feature = () => {
  return (
    <section className="max-padd-container pt-14 pb-20">
      {/* Container */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-xl">
        <div className="flexCenter gap-x-10">
          <div>
            <img
              src={feature_1}
              alt="Feature_1"
              height={77}
              width={222}
              className="rounded-full"
            />
          </div>
          <div>
            <img
              src={feature_2}
              alt="Feature_2"
              height={77}
              width={222}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flexCenter flex-wrap sm:flex-nowrap gap-x-5">
          <div className="p-4 rounded-3xl">
            <h4 className="capitalize">Quality Product</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="p-4 rounded-3xl">
            <h4 className="capitalize">Fast Delievery</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="p-4 rounded-3xl">
            <h4 className="capitalize">Secure Payment</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature;