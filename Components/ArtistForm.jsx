import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArtistForm({ artistDetails, handleSubmit, toggleView, children }) {
  let { id } = useParams();

  const [artist, setArtist] = useState({
    name: "",
    genre: "",
  });

  const handleTextChange = (event) => {
    setArtist({ ...artist, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (artistDetails) {
      setArtist(artistDetails);
    }
  }, [id, artistDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(artist, id);
    if (artistDetails) {
      toggleView();
    }
    setArtist({
      name: "",
      genre: "",
    });
  };

  return (
    <div className="Edit">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={artist.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist name"
          required
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          required
          value={artist.genre}
          onChange={handleTextChange}
          placeholder="Artist genre"
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default ArtistForm;






