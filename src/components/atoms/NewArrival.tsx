import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import modules from 'swiper/modules'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Title from "./Title";
import { useEffect, useState } from "react";
import { products } from "../../data";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  sizes: string[];
  date: number;
  popular: boolean;
}

const NewArrival = () => {

  const [newArrival, setnewArrival] = useState<Product[]>([]);

  useEffect(() => {
    const data = products.slice(0, 10);
    setnewArrival(data);
  }, [newArrival]);

  return (
    <section>
      <Title />

      {/* Swiper Container */}
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="h-[555px]"
      >
        {newArrival.map((product) => (
          <SwiperSlide key={product._id}>
            <img src={product.image[0]} alt="productImage" />
          </SwiperSlide>
        ))}
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default NewArrival;
