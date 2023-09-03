import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api.js";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Card from "./components/Card/Card.jsx";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      //console.log(data);
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      {/* <Card data={topAlbumData[0]} type="album" /> */}

      {/* {topAlbumData.map((item, index) => 
        <Card key={index} data={item} type="album" />
      ))} */}
      {topAlbumData.map((item) => (
        <Card data={item} type="album" />
      ))}
    </>
  );
}

export default App;
