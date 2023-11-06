import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Artist from "./Artist"; 
import ArtistForm from "./ArtistForm"; 

const API = import.meta.env.VITE_API_URL; 

function Artists() {
  const [artists, setArtists] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`${API}/artists/${id}`) 
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        setArtists(responseJSON.allArtists);
      })

  }, [id, API]);

  const handleAdd = (newArtist) => {
    fetch(`${API}/artists/${id}`, { 
      method: "POST",
      body: JSON.stringify(newArtist),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setArtists([...artists, responseJSON]);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (artistId) => {
    fetch(`${API}/artists/${id}`, { method: "DELETE" }) // Update the API endpoint for artists
      .then((response) => {
        const copyArtistArray = [...artists];
        const indexDeletedArtist = copyArtistArray.findIndex(
          (artist) => artist.id === artistId
        );
        copyArtistArray.splice(indexDeletedArtist, 1);
        setArtists(copyArtistArray);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (updatedArtist) => {
    fetch(`${API}/songs/${id}/artists/${updatedArtist.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedArtist),
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => response.json())
    .then(responseJSON => {
        const copyArtistArray = [...artists]
        const indexUpdatedArtist = copyArtistArray.findIndex(artist => {
            return artist.id === updatedArtist.id
        })
        copyArtistArray[indexUpdatedArtist] = responseJSON
        setArtists(copyArtistArray)
    });
  };

  return (
    <section className="Artists">
      <h2>Artists</h2>
      <ArtistForm handleSubmit={handleAdd}>
        <h3>Add a New Artist</h3>
      </ArtistForm>
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} handleDelete={handleDelete} handleEdit={handleEdit} />
      ))}
    </section>
  );
}

export default Artists;