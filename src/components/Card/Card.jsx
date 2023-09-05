import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  //console.log(data);
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }

      case "newalbum": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="newalbum" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }

      case "song": {
        const { image, likes, title } = data;

        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy" />
              <div className={styles.banner}>
                {/* <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div> */}
                <Chip
                  label={`${likes} likes`}
                  className={styles.chip}
                  size="small"
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
