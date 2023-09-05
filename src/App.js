import { useEffect, useState } from "react";
import { fetchNewAlbums, fetchNewSongs, fetchTopAlbums } from "./api/api.js";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Card from "./components/Card/Card.jsx";
import Section from "./components/Section/Section.jsx";
import styles from "./App.module.css";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [newSongsData, setNewSongsData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      //console.log(data);
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      //console.log(data);
      setNewAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateNewSongsData = async () => {
    try {
      const data = await fetchNewSongs();
      //console.log(data);
      setNewSongsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateNewSongsData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumData} />
        <Section type="newalbum" title="New Albums" data={newAlbumData} />
        <Section type="song" title="Songs" data={newSongsData} />
      </div>
      {/* <Card data={topAlbumData[0]} type="album" /> */}

      {/* {topAlbumData.map((item, index) => 
        <Card key={index} data={item} type="album" />
      ))} */}
      {/* {topAlbumData.map((item) => (
        <Card data={item} type="album" />
      ))} */}
    </>
  );
}

export default App;
