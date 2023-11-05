import React from "react";

function Song({ song }) {
  return (
    <tr>
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.time}</td>
      <td>{song.is_favorite ? "Yes" : "No"}</td>
    </tr>
  );
}

export default Song;