import Left from "./components/Left.jsx";
import Right from "./components/Right";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [artistsData, setArtistsData] = useState([]);
  const[showAll, setShowAll] = useState(false)

  useEffect(() => {
    const getArtistsData = async () => {
      const artistsData = await getArtists();
      setArtistsData(artistsData);
    };
    getArtistsData();
  }, []);

  const getArtists = async () => {
    const response = await fetch("http://localhost:5000/artists");
    const data = await response.json();
    return data;
  };
  console.log(artistsData);
  return (
    <>
      <main>
        <Left />
        <Right showAll={showAll} artists={artistsData} show={()=>setShowAll(!showAll)} />
      </main>
    </>
  );
}

export default App;
