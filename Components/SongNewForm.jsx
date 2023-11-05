import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function SongNewForm() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const addSong = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/songs`, httpOptions)
      .then((res) => {
        console.log(res);
        alert(`${song.name} was added to the database!`);
        navigate("/songs");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div className="new-song-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={song.name}
          onChange={handleTextChange}
          placeholder="Name of the song"
          required
        />
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          type="text"
          value={song.artist}
          onChange={handleTextChange}
          placeholder="Name of the artist"
          required
        />
        <label htmlFor="album">Album</label>
        <input
          id="album"
          type="text"
          value={song.album}
          placeholder="Name of the album"
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="text"
          value={song.time}
          placeholder="Song duration (e.g., 4:30)"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          checked={song.is_favorite}
          onChange={handleCheckboxChange}
        />
        <br />
        <input type="submit" className="submit-button" />
      </form>
      <Link to="/songs">
        <button className="button">Back to Songs</button>
      </Link>
    </div>
  );
}

export default SongNewForm;
