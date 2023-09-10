import { CircularProgress } from "@mui/material";
import React from "react";
import Card from "../Card/Card.jsx";
import { useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel.jsx";
import Filter from "../FilterTabs/FilterTabs.jsx";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "show All" : "collapse All"}
        </h4>
      </div>
      {type === "song" ? <Filter /> : null}
      {data?.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderCardComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
