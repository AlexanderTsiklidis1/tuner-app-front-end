import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function SongEditForm() {
  const { index } = useParams();
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

  useEffect(() => {
    fetch(`${API}/songs/${index}`)
      .then((response) => response.json())
      .then((fetchedSong) => {
        setSong(fetchedSong);
      })
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  const updateSong = () => {
    const httpOptions = {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-type": "application/json",
      },
    };

    fetch(`${API}/songs/${index}`, httpOptions)
      .then(() => {
        alert(`${song.name} has been updated!`);
        navigate(`/songs/${index}`);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  return (
    <div className="Edit">
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
      <Link to={`/songs/${index}`}>
        <button className="button">Go Back</button>
      </Link>
    </div>
  );
}

export default SongEditForm;
