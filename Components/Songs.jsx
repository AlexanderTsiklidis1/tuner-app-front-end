import React, { useEffect, useState } from "react";
import Song from "./Song"; 

const API = import.meta.env.VITE_BASE_URL; 

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        setSongs(responseJSON.data.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="songs-container">
      <h2>All Songs</h2>
      <table className="songs-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Time</th>
            <th>Favorite</th>
            <th>Song Details</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return <Song key={song.id} song={song} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Songs;