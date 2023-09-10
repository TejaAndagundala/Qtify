import React from "react";
import styles from "./MusicPlayer.module.css";
import SongImage from "../../assests/SongImage.png";
import PauseImage from "../../assests/PauseImage.png";
import DurationImage from "../../assests/DurationImage.png";

const MusicPlayer = () => {
  return (
    <div className={styles.musicPlayer}>
      <div className={styles.musicImage}>
        <img src={SongImage} alt="songImage" />
        <div className={styles.musicImage_heading}>
          <h3>Song name</h3>
          <p>Album name</p>
        </div>
      </div>
      <div className={styles.player}>
        <img src={PauseImage} width="48px" height="48px" alt="pauseImage" />
        <div className={styles.duration}>
          <span className="startTime">0.38</span>
          <img src={DurationImage} height="6px" alt="durationImage" />
          <span className="endTime">3.38</span>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
