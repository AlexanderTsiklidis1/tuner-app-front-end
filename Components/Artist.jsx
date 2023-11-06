import { useState } from "react";
import ArtistForm from "./ArtistForm"; // Replace with your specific component

function Artist({ artist, handleDelete, handleEdit }) {
  const [viewEditForm, setEditForm] = useState(false);

  const toggleView = () => {
    setEditForm(!viewEditForm);
  };

  return (
    <div className="Artist">
      {viewEditForm ? (
        <>
          <ArtistForm
            artistDetails={artist} // Pass artist data instead of review data
            toggleView={toggleView}
            handleSubmit={handleEdit} // Pass appropriate edit function
          />
          <button onClick={toggleView}>
            {viewEditForm ? "Cancel" : "Edit this artist"}
          </button>
        </>
      ) : (
        <>
          <h4>{artist.name}</h4>
          <h5>{artist.genre}</h5>
          {/* Display additional artist information as needed */}
          <button onClick={toggleView}>
            {viewEditForm ? "Cancel" : "Edit this artist"}
          </button>
          <button onClick={() => handleDelete(artist.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Artist;