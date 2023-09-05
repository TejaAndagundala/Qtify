import { useSwiper } from "swiper/react";
import React, { useEffect, useState } from "react";
import styles from "../Carousel.module.css";
import { ReactComponent as Arrow } from "../../../assests/LeftNav.svg";

const CarouselLeftNav = () => {
  const swiper = useSwiper();
  const [leftNav, setLeftNav] = useState(swiper.leftNav);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setLeftNav(swiper.leftNav);
    });
  }, []);
  return (
    <div className={styles.leftNavigation}>
      {!leftNav && <Arrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNav;
