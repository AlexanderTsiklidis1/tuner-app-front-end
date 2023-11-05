import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(`${API}/songs`)
      .then(response => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setSongs(responseJSON.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="Songs">
      
    </div>
  );
}

export default Songs;