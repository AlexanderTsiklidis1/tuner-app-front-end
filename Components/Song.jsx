import React from "react";
import { Link } from "react-router-dom";
function Song({ song, index }) {
  return (
    <tr>
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.time}</td>
      <td>{song.is_favorite ? "Yes" : "No"}</td>
      <td>
        <Link className="td" to= {`/songs/${song.id}`}>See More...</Link>
      </td>
    </tr>
  );
}

export default Song;