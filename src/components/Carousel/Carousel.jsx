import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
//import SwiperCore, { Navigation } from "swiper/modules";
import CarouselLeftNav from "./CarouselLeftNav/CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav/CarouselRightNav";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  console.log(swiper);
  useEffect(() => {
    swiper.slideTo(0, 0);
  }, [data]);
  return <></>;
};
const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNav />
        <CarouselRightNav />
        {data.map((item) => (
          <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
