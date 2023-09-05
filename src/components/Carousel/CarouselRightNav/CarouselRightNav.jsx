import { useSwiper } from "swiper/react";
import React, { useEffect, useState } from "react";
import styles from "../Carousel.module.css";
import { ReactComponent as Arrow } from "../../../assests/RightNav.svg";

const CarouselRightNav = () => {
  const swiper = useSwiper();
  const [rightNav, setRightNav] = useState(swiper.rightNav);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setRightNav(swiper.rightNav);
    });
  }, []);
  return (
    <div className={styles.rightNavigation}>
      {!rightNav && <Arrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNav;
