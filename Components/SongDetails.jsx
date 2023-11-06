import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Artists from "./Artists"
const API = import.meta.env.VITE_BASE_URL;

function SongDetails() {
  const [song, setSong] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${index}`)
      .then((response) => response.json())
      .then((fetchedSong) => {
        setSong(fetchedSong);
      })
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };

    fetch(`${API}/songs/${index}`, httpOptions)
      .then((res) => {
        console.log(res);
        alert("Song was deleted successfully!");
        navigate('/songs');
      })
      .catch((err) => console.error(err));
  };

  return (
    <article className="home-container">
      <h3 className="welcome-heading">
        {song.name}
      </h3>
      <h5 className="app-heading">
        Artist: {song.artist}
      </h5>
      <h6 className="app-heading">
        Album: {song.album}
      </h6>
      <p className="app-heading">
        Time: {song.time}
      </p>
      <p className="app-heading">
        Favorite: {song.is_favorite ? "Yes" : "No"}
      </p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/songs`}>
            <button className="button">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/songs/${index}/edit`}>
            <button className="button" style={{ padding: "10px" }}>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete} className="button" style={{ padding: "10px" }}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SongDetails;
